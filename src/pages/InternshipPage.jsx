import React, { useState } from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Calendar, Award, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { InternshipWorkshopModal } from '../components/InternshipWorkshopModal';
import { UpcomingWorkshopsSection } from '../components/UpcomingWorkshopsSection';

export const InternshipPage = ({ onOpenBooking }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Clinical Internship');
  const [selectedTrack, setSelectedTrack] = useState('');

  const handleOpenModal = (type = 'Clinical Internship', track = '') => {
    setSelectedType(type);
    setSelectedTrack(track);
    setModalOpen(true);
  };

  return (
    <div className="internship-page" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingBottom: '72px' }}>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#FAF5FF', padding: '64px 0 56px 0', borderBottom: '1px solid #F3E8FF' }}>
        <div className="container text-center" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <GraduationCap size={14} /> Psychology Education & Clinical Training
          </span>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 900, color: '#0E0E10', margin: '16px 0 16px 0', letterSpacing: '-0.04em' }}>
            Clinical Internships & Professional Workshops
          </h1>

          <p style={{ fontSize: '1.063rem', color: '#64748B', lineHeight: 1.6, marginBottom: '28px' }}>
            MANODAYA provides structured clinical observerships, psychometric battery training, case formulations, and hands-on workshops for psychology undergraduate, postgraduate, and M.Phil students.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-purple" onClick={() => handleOpenModal('Clinical Internship')}>
              <GraduationCap size={18} />
              <span>Apply for Internship</span>
            </button>

            <button className="btn-pink" onClick={() => handleOpenModal('Specialized Workshop')}>
              <Sparkles size={18} />
              <span>Register for Workshop</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Live Upcoming Workshops Feed with Flyers (Posted by Staff in CRM) */}
      <UpcomingWorkshopsSection />

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '56px' }}>

        {/* Section 2: Clinical Internship Programs */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-badge">Structured Learning Wings</span>
          <h2 className="section-title">Psychology Internship Tracks</h2>
          <p className="section-subtitle">
            Curriculum-backed exposure designed for B.A., M.A., and M.Phil psychology students.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          <div className="reference-card">
            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#EDE9FE', color: '#8A4FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <BookOpen size={24} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>1-Month Clinical Observership</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>
              Introduction to case history taking, mental status examination (MSE), and live clinical exposure under supervisor guidance.
            </p>
            <button className="btn-outline-theme" onClick={() => handleOpenModal('Clinical Internship', '1-Month Clinical Observership')}>
              Apply for 1-Month Track
            </button>
          </div>

          <div className="reference-card">
            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#FFE4EC', color: '#FF497C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>3-Month Advanced Practicum</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>
              Supervised training in administering IQ, ADHD, ADOS-2, SLD, and neuropsychological test batteries with report writing.
            </p>
            <button className="btn-outline-theme" onClick={() => handleOpenModal('Clinical Internship', '3-Month Advanced Practicum')}>
              Apply for 3-Month Track
            </button>
          </div>
        </div>
      </div>

      {/* Standalone Application Modal */}
      <InternshipWorkshopModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={selectedType}
        initialWorkshopTitle={selectedTrack}
      />
    </div>
  );
};
