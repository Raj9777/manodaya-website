import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Info, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { CLINIC_TIME_SLOTS, SERVICE_DESCRIPTIONS } from '../data/content';
import { sendStaffNotification } from '../utils/sendNotification';

export const BookingModal = ({ isOpen, onClose, initialService = '' }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    category: 'adult',
    age: '',
    service: initialService || 'Comprehensive Neuropsychological Assessment',
    type: 'In-Person Consultation',
    date: todayStr,
    time: CLINIC_TIME_SLOTS[0],
    notes: ''
  });

  const [submittedLead, setSubmittedLead] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Exclude lunch break from default slot selection
  useEffect(() => {
    if (formData.time.includes('Lunch Break')) {
      const firstAvail = CLINIC_TIME_SLOTS.find(s => !s.includes('Lunch Break'));
      if (firstAvail) {
        setFormData(prev => ({ ...prev, time: firstAvail }));
      }
    }
  }, [formData.time]);

  if (!isOpen) return null;

  const currentDescription = SERVICE_DESCRIPTIONS[formData.service] || 
    "Comprehensive evidence-based psychological consultation and clinical care.";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.patientName.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName || !trimmedPhone) {
      alert("Please provide valid patient name and contact phone number.");
      return;
    }

    setIsSubmitting(true);

    const bookingId = `MAN-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLead = {
      id: bookingId,
      patientName: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail || 'N/A',
      category: formData.category,
      age: formData.age.trim() || 'N/A',
      service: formData.service,
      type: formData.type,
      date: formData.date || new Date().toISOString().split('T')[0],
      time: formData.time,
      status: 'New',
      notes: formData.notes.trim() || 'Submitted via website form.',
      createdAt: new Date().toLocaleString('en-IN')
    };

    // Save to Firestore (primary) + localStorage (fallback)
    try {
      await setDoc(doc(db, 'leads', bookingId), newLead);
    } catch {
      // Firestore unavailable — save to localStorage
      const existingLeads = JSON.parse(localStorage.getItem('manodaya_crm_leads') || '[]');
      localStorage.setItem('manodaya_crm_leads', JSON.stringify([newLead, ...existingLeads]));
    }

    // Send automatic staff email notification (non-blocking)
    const isSupportGroup = (formData.service || '').toLowerCase().includes('support group');
    const templateId = isSupportGroup ? 'template_support_group' : 'template_booking';
    
    sendStaffNotification(templateId, {
      reference_id: bookingId,
      patientName: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail || 'N/A',
      category: formData.category,
      age: formData.age.trim() || 'N/A',
      service: formData.service,
      type: formData.type,
      date: formData.date || new Date().toISOString().split('T')[0],
      time: formData.time,
      notes: formData.notes.trim() || 'N/A'
    });


    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    } catch (err) {}

    setIsSubmitting(false);
    setSubmittedLead(newLead);
  };

  const handleReset = () => {
    setSubmittedLead(null);
    onClose();
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1500 }}>
      <div className="modal-content" style={{ maxWidth: '620px', borderRadius: '24px' }}>
        <button className="modal-close-btn" onClick={handleReset} aria-label="Close modal">
          <X size={20} />
        </button>

        {submittedLead ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D1FAE5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <span className="badge-status" style={{ backgroundColor: '#D1FAE5', color: '#059669', marginBottom: '12px' }}>
              Booking Reference: {submittedLead.id}
            </span>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0E0E10', marginBottom: '8px' }}>
              Appointment Request Sent!
            </h2>

            <p style={{ color: '#6B7280', fontSize: '0.938rem', marginBottom: '24px' }}>
              Thank you, <strong>{submittedLead.patientName}</strong>. Our clinical team at MANODAYA will review your booking for <strong>{submittedLead.service}</strong> and confirm shortly.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/917328834045?text=Hello%20MANODAYA,%20I%20just%20booked%20an%20appointment%20(Ref:%20${submittedLead.id}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black"
                style={{ backgroundColor: '#25D366', color: '#FFF', border: '2px solid #25D366' }}
              >
                <MessageSquare size={18} /> Confirm via WhatsApp
              </a>

              <button className="btn-outline-theme" onClick={handleReset}>
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
                <Calendar size={13} /> Schedule Consultation
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0E0E10', margin: '6px 0 4px 0' }}>
                Book Your Appointment
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                Fill out the details below. Strict clinical confidentiality guaranteed.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Patient Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    placeholder="e.g. Priyadarshini Das" 
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    required 
                    className="form-input"
                    placeholder="+91 73288 34045" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Age / Category</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="e.g. 9 yrs / Child" 
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
              </div>

              {/* Service Selection with 1-Line Description Box */}
              <div className="form-group">
                <label className="form-label">Service / Assessment Required *</label>
                <select 
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ fontWeight: 600 }}
                >
                  <option value="ADHD & Attention Assessment">ADHD & Attention Assessment</option>
                  <option value="Autism Spectrum Assessment / Screening">Autism Spectrum Assessment / Screening</option>
                  <option value="IQ & Developmental (DQ) Assessment">IQ & Developmental (DQ) Assessment</option>
                  <option value="Specific Learning Disability Assessment">Specific Learning Disability Assessment</option>
                  <option value="Comprehensive Neuropsychological Assessment">Comprehensive Neuropsychological Assessment</option>
                  <option value="Cognitive Behaviour Therapy (CBT)">Cognitive Behaviour Therapy (CBT)</option>
                  <option value="Dialectical Behaviour Therapy (DBT)">Dialectical Behaviour Therapy (DBT)</option>
                  <option value="Post-Stroke Cognitive Rehabilitation">Post-Stroke Cognitive Rehabilitation</option>
                  <option value="Dementia & MCI Screening">Dementia & MCI Screening</option>
                  <option value="Support Group Registration">Support Group Registration</option>
                  <option value="Psychology Internship Application">Psychology Internship Application</option>
                  <option value="General Consultation & Guidance">General Consultation & Guidance</option>
                </select>

                <div 
                  style={{
                    marginTop: '8px',
                    backgroundColor: '#FAFAFD',
                    border: '1px solid #EDE9FE',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    fontSize: '0.813rem',
                    color: '#8A4FFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Info size={16} style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: '#0E0E10' }}>{currentDescription}</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Type</label>
                  <select 
                    className="form-select"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="In-Person Consultation">In-Person (Bhubaneswar)</option>
                    <option value="Online Tele-Health">Online Video Call</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input 
                    type="date" 
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Time Slot (1 Patient per Slot)</label>
                  <select 
                    className="form-select"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    {CLINIC_TIME_SLOTS.map((slot) => {
                      const isLunch = slot.includes('Lunch Break');
                      let label = slot;
                      if (isLunch) label = "01:00 PM - 02:00 PM 🔒 (Lunch Break)";

                      return (
                        <option key={slot} value={slot} disabled={isLunch}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>


              <button 
                className="btn-black" 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  width: '100%', 
                  marginTop: '8px', 
                  border: '2px solid #0E0E10',
                  opacity: isSubmitting ? 0.8 : 1,
                  cursor: isSubmitting ? 'wait' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending Appointment Request...</span>
                  </>
                ) : (
                  <span>Submit Appointment Request</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
