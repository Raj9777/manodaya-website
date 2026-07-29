import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Calendar, Award, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { InternshipWorkshopModal } from '../components/InternshipWorkshopModal';
import { INITIAL_WORKSHOPS } from './FullCrmDashboard';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export const InternshipPage = ({ onOpenBooking }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Clinical Internship');
  const [selectedTrack, setSelectedTrack] = useState('');
  const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);

  useEffect(() => {
    let unsub;
    try {
      const wsRef = collection(db, 'workshops');
      unsub = onSnapshot(
        query(wsRef, orderBy('createdAt', 'desc')),
        (snap) => {
          if (!snap.empty) {
            const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            setUpcomingWorkshops(list);
            localStorage.setItem('manodaya_workshops', JSON.stringify(list));
          } else {
            const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
            setUpcomingWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
          }
        },
        (err) => {
          console.warn('Firestore offline/error in InternshipPage:', err);
          const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
          setUpcomingWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
        }
      );
    } catch {
      const savedWorkshops = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
      setUpcomingWorkshops(savedWorkshops || INITIAL_WORKSHOPS);
    }

    return () => unsub?.();
  }, []);

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

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '56px' }}>
        {/* Section 1: Live Upcoming Workshops Feed (Posted by Staff in CRM) */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-header" style={{ marginBottom: '36px', textAlign: 'left', maxWidth: '100%' }}>
            <span className="section-badge" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
              <Calendar size={14} /> Staff Announcements
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0E0E10' }}>
              Upcoming Clinical Workshops & Masterclasses
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.938rem' }}>
              Intensive hands-on training sessions conducted by certified clinical neuropsychologists.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {upcomingWorkshops.map((ws) => (
              <div 
                key={ws.id} 
                className="reference-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '4px solid #8A4FFF',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
                      {ws.mode}
                    </span>
                    <span style={{ fontSize: '0.813rem', fontWeight: 800, color: '#D97706' }}>
                      {ws.seats}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0E0E10', marginBottom: '10px' }}>
                    {ws.title}
                  </h3>

                  <div style={{ backgroundColor: '#FAFAFD', padding: '10px 14px', borderRadius: '12px', marginBottom: '16px', fontSize: '0.813rem', color: '#475569', border: '1px solid #F1F1F5' }}>
                    <div style={{ fontWeight: 700, color: '#0E0E10' }}>📅 Date: {ws.date}</div>
                    <div>⏰ Time: {ws.time}</div>
                    <div style={{ color: '#8A4FFF', fontWeight: 800, marginTop: '2px' }}>🏷️ Fee: {ws.fee}</div>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                    {ws.description}
                  </p>
                </div>

                <button 
                  className="btn-purple"
                  onClick={() => handleOpenModal('Specialized Workshop', ws.title)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Register for Workshop</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

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
