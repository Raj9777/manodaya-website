import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, MessageSquare, Info, Calendar, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export const InternshipWorkshopModal = ({ isOpen, onClose, initialType = 'Clinical Internship', initialWorkshopTitle = '' }) => {
  const [formData, setFormData] = useState({
    applicantName: '',
    phone: '',
    email: '',
    institution: '',
    qualification: 'B.A. / B.Sc. Psychology',
    applicationType: initialType,
    workshopTrack: initialWorkshopTitle || 'Clinical Neuropsychology & Battery Administration',
    notes: ''
  });

  const [submittedApp, setSubmittedApp] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const appId = `INT-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApp = {
      id: appId,
      applicantName: formData.applicantName,
      phone: formData.phone,
      email: formData.email,
      institution: formData.institution || 'N/A',
      qualification: formData.qualification,
      applicationType: formData.applicationType,
      workshopTrack: formData.workshopTrack,
      status: 'Pending Review',
      notes: formData.notes || 'Submitted via internship/workshop application form.',
      createdAt: new Date().toLocaleString('en-IN')
    };

    // Write to Firestore (primary) + localStorage (fallback)
    try {
      await addDoc(collection(db, 'internships'), newApp);
    } catch (err) {
      const existingApps = JSON.parse(localStorage.getItem('manodaya_crm_internships') || '[]');
      localStorage.setItem('manodaya_crm_internships', JSON.stringify([newApp, ...existingApps]));
    }

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}

    setIsSubmitting(false);
    setSubmittedApp(newApp);
  };

  const handleReset = () => {
    setSubmittedApp(null);
    onClose();
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1500 }}>
      <div className="modal-content" style={{ maxWidth: '640px', borderRadius: '24px' }}>
        <button className="modal-close-btn" onClick={handleReset} aria-label="Close modal">
          <X size={20} />
        </button>

        {submittedApp ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#EDE9FE',
                color: '#8A4FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF', marginBottom: '12px' }}>
              Application Reference: {submittedApp.id}
            </span>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0E0E10', marginBottom: '8px' }}>
              Application Received!
            </h2>

            <p style={{ color: '#6B7280', fontSize: '0.938rem', marginBottom: '24px' }}>
              Thank you, <strong>{submittedApp.applicantName}</strong>. Our clinical education team will review your application for <strong>{submittedApp.workshopTrack}</strong> and contact you via WhatsApp / Email.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/917328834045?text=Hello%20MANODAYA,%20I%20just%20submitted%20my%20${submittedApp.applicationType}%20application%20(Ref:%20${submittedApp.id}).`}
                target="_blank"
                rel="noreferrer"
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
              <span className="section-badge" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
                <GraduationCap size={14} /> Psychology Training Portal
              </span>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0E0E10', margin: '6px 0 4px 0' }}>
                Workshop & Internship Application Form
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                Apply for clinical observerships, skill workshops, and psychometric battery training.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Applicant Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    placeholder="e.g. Soumya Ranjan Mohanty" 
                    value={formData.applicantName}
                    onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
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
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    className="form-input"
                    placeholder="student@university.edu" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">College / University / Institute *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    placeholder="e.g. Utkal University / Ravenshaw" 
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Current Qualification</label>
                  <select 
                    className="form-select"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  >
                    <option value="B.A. / B.Sc. Psychology">B.A. / B.Sc. Psychology</option>
                    <option value="M.A. / M.Sc. Clinical Psychology">M.A. / M.Sc. Clinical Psychology</option>
                    <option value="M.Phil Clinical Psychology">M.Phil Clinical Psychology</option>
                    <option value="Ph.D. / Research Scholar">Ph.D. / Research Scholar</option>
                    <option value="Practicing Counselor / Allied Professional">Practicing Counselor / Allied Professional</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Application Type *</label>
                  <select 
                    className="form-select"
                    value={formData.applicationType}
                    onChange={(e) => setFormData({ ...formData, applicationType: e.target.value })}
                    style={{ fontWeight: 700 }}
                  >
                    <option value="Clinical Internship">Clinical Internship (1 Month / 3 Month)</option>
                    <option value="Specialized Workshop">Specialized Clinical Workshop</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Workshop Track / Specialization *</label>
                <select 
                  className="form-select"
                  value={formData.workshopTrack}
                  onChange={(e) => setFormData({ ...formData, workshopTrack: e.target.value })}
                >
                  <option value="Clinical Neuropsychology & Battery Administration">Clinical Neuropsychology & Battery Administration</option>
                  <option value="Child Developmental Screening & ADOS-2 Workshop">Child Developmental Screening & ADOS-2 Workshop</option>
                  <option value="CBT & Cognitive Rehabilitation Clinical Practicum">CBT & Cognitive Rehabilitation Clinical Practicum</option>
                  <option value="Psychodiagnostic & MMPI-3 Assessment Masterclass">Psychodiagnostic & MMPI-3 Assessment Masterclass</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Statement of Interest / Academic Notes</label>
                <textarea 
                  className="form-textarea"
                  rows={3}
                  placeholder="Mention your learning objectives, preferred batch dates, or prior background..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button 
                className="btn-purple" 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  width: '100%', 
                  marginTop: '8px', 
                  border: '2px solid #8A4FFF',
                  opacity: isSubmitting ? 0.8 : 1,
                  cursor: isSubmitting ? 'wait' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
