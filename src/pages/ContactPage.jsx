import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, MessageSquare, Info, Loader2 } from 'lucide-react';
import { CLINIC_INFO, CLINIC_TIME_SLOTS } from '../data/content';
import { SERVICE_DESCRIPTIONS } from '../components/BookingModal';
import confetti from 'canvas-confetti';
import { db } from '../firebase';
import { doc, setDoc, collection, onSnapshot } from 'firebase/firestore';

export const ContactPage = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    service: 'Comprehensive Neuropsychological Assessment',
    type: 'In-Person Consultation',
    date: todayStr,
    time: CLINIC_TIME_SLOTS[0],
    notes: ''
  });

  const [submittedLead, setSubmittedLead] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [allLeads, setAllLeads] = useState([]);

  // Subscribe to real-time leads to monitor booked time slots
  useEffect(() => {
    let unsub;
    try {
      unsub = onSnapshot(collection(db, 'leads'), (snap) => {
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setAllLeads(list);
      }, () => {
        const saved = JSON.parse(localStorage.getItem('manodaya_crm_leads') || '[]');
        setAllLeads(saved);
      });
    } catch {
      const saved = JSON.parse(localStorage.getItem('manodaya_crm_leads') || '[]');
      setAllLeads(saved);
    }
    return () => unsub?.();
  }, []);

  // Compute booked slots for selected date
  const selectedDate = formData.date || todayStr;
  const bookedSlots = allLeads
    .filter(l => l.date === selectedDate && l.status !== 'Cancelled')
    .map(l => l.time);

  // Auto-select first available slot if currently selected time is booked or is lunch
  useEffect(() => {
    const isCurrentLunch = formData.time.includes('Lunch Break');
    const isCurrentBooked = bookedSlots.includes(formData.time);

    if (isCurrentLunch || isCurrentBooked) {
      const firstAvail = CLINIC_TIME_SLOTS.find(s => !s.includes('Lunch Break') && !bookedSlots.includes(s));
      if (firstAvail) {
        setFormData(prev => ({ ...prev, time: firstAvail }));
      }
    }
  }, [selectedDate, allLeads]);

  const currentDescription = SERVICE_DESCRIPTIONS[formData.service] || 
    "Comprehensive evidence-based psychological consultation and clinical care.";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const bookingId = `MAN-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLead = {
      id: bookingId,
      patientName: formData.patientName,
      phone: formData.phone,
      email: formData.email || 'N/A',
      category: 'adult',
      age: 'N/A',
      service: formData.service,
      type: formData.type,
      date: formData.date || new Date().toISOString().split('T')[0],
      time: formData.time,
      status: 'New',
      notes: formData.notes || 'Submitted via contact page form.',
      createdAt: new Date().toLocaleString('en-IN')
    };

    try {
      await setDoc(doc(db, 'leads', bookingId), newLead);
    } catch {
      const existingLeads = JSON.parse(localStorage.getItem('manodaya_crm_leads') || '[]');
      localStorage.setItem('manodaya_crm_leads', JSON.stringify([newLead, ...existingLeads]));
    }

    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    } catch (err) {}

    setIsSubmitting(false);
    setSubmittedLead(newLead);
  };

  return (
    <div className="page-wrapper section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            Book Consultation & Contact
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            Contact MANODAYA
          </h1>
          <p className="section-subtitle">
            Schedule an in-person or online consultation, inquire about psychological services, or locate our center in Old Town, Bhubaneswar.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>
          {/* Left: Contact Info & Map */}
          <div className="reveal-element">
            {/* Featured Contact Photo - Full Size */}
            <div 
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                marginBottom: '28px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)'
              }}
            >
              <img 
                src="/images/section/contact.jpeg" 
                alt="MANODAYA Clinical Center & Reception" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#0E0E10', fontWeight: 900 }}>
              Centre Location & Timings
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px', fontSize: '1rem', color: '#0E0E10' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={22} color="#8A4FFF" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Address:</strong>
                  <div>{CLINIC_INFO.location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="#FF497C" />
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <div><a href={`tel:${CLINIC_INFO.phone}`}>{CLINIC_INFO.phone}</a></div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="#10B981" />
                <div>
                  <strong>Email Address:</strong>
                  <div>{CLINIC_INFO.email}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={20} color="#FFB800" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Clinic Hours:</strong>
                  <div>{CLINIC_INFO.timings}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Modern Minimal Appointment Booking Form */}
          <div className="minimal-card reveal-element" style={{ backgroundColor: '#FAFAFD' }}>
            {submittedLead ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <CheckCircle2 size={54} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <span className="badge-status" style={{ backgroundColor: '#D1FAE5', color: '#059669', marginBottom: '12px' }}>
                  Booking Reference: {submittedLead.id}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: 900 }}>Appointment Request Sent!</h3>
                <p style={{ color: '#6B7280', fontSize: '0.938rem', marginBottom: '24px' }}>
                  Thank you, <strong>{submittedLead.patientName}</strong>. Our clinical team will review your booking for <strong>{submittedLead.service}</strong> and confirm shortly.
                </p>
                <a 
                  href={`https://wa.me/917328834045?text=Hello%20MANODAYA,%20I%20booked%20appointment%20Ref:${submittedLead.id}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-black"
                  style={{ backgroundColor: '#25D366', border: '2px solid #25D366' }}
                >
                  <MessageSquare size={18} /> Confirm via WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 900 }}>Book Clinical Appointment</h3>

                <div className="form-group">
                  <label className="form-label">Patient Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="e.g. Ananya Mohanty"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
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

                  {/* 1-Line Description Card */}
                  <div 
                    style={{
                      marginTop: '8px',
                      backgroundColor: '#FFFFFF',
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Consultation Type</label>
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
                    <label className="form-label">Preferred Date</label>
                    <input 
                      type="date" 
                      className="form-input"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Time Slot (1 Patient per Slot)</label>
                    <select 
                      className="form-select"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      {CLINIC_TIME_SLOTS.map((slot) => {
                        const isLunch = slot.includes('Lunch Break');
                        const isTaken = bookedSlots.includes(slot);
                        const isDisabled = isLunch || isTaken;
                        let label = slot;
                        if (isLunch) label = "01:00 PM - 02:00 PM 🔒 (Lunch Break)";
                        else if (isTaken) label = `${slot} ❌ (Already Booked)`;

                        return (
                          <option key={slot} value={slot} disabled={isDisabled}>
                            {label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Clinical Notes / Presenting Concern</label>
                  <textarea 
                    rows="3" 
                    className="form-textarea"
                    placeholder="Briefly describe concern or query..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  className="btn-black" 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
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
            )}
          </div>
        </div>

        {/* Full-Width Google Map Section (100% Container Width) */}
        <div className="reveal-element" style={{ marginTop: '56px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0E0E10', margin: 0 }}>
                📍 Interactive Location Map
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.875rem', marginTop: '4px', margin: 0 }}>
                {CLINIC_INFO.location}
              </p>
            </div>
            <a 
              href="https://maps.app.goo.gl/fEXm6e8tnSZoybdV6" 
              target="_blank" 
              rel="noreferrer"
              className="btn-purple"
              style={{ padding: '8px 20px', fontSize: '0.844rem' }}
            >
              Get Directions in Google Maps ↗
            </a>
          </div>

          <div 
            style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              height: '460px', 
              minHeight: '460px',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
              width: '100%'
            }}
          >
            <iframe 
              src={CLINIC_INFO.mapEmbedUrl}
              className="map-iframe-embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '460px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="MANODAYA Interactive Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
