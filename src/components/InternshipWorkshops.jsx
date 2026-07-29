import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { INTERNSHIPS_WORKSHOPS } from '../data/content';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export const InternshipWorkshops = ({ onApplyInternship }) => {
  const [workshopsList, setWorkshopsList] = useState(INTERNSHIPS_WORKSHOPS.workshops);

  useEffect(() => {
    let unsub;
    try {
      const wsRef = collection(db, 'workshops');
      unsub = onSnapshot(
        query(wsRef, orderBy('createdAt', 'desc')),
        (snap) => {
          if (!snap.empty) {
            setWorkshopsList(snap.docs.map(d => ({ id: d.id, ...d.data() })));
          } else {
            const saved = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
            if (saved && saved.length > 0) setWorkshopsList(saved);
          }
        },
        () => {
          const saved = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
          if (saved && saved.length > 0) setWorkshopsList(saved);
        }
      );
    } catch {
      const saved = JSON.parse(localStorage.getItem('manodaya_workshops') || 'null');
      if (saved && saved.length > 0) setWorkshopsList(saved);
    }
    return () => unsub?.();
  }, []);
  return (
    <section id="internships" className="section-padding" style={{ backgroundColor: '#E2EBE4' }}>
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#FFFDF9' }}>
            <GraduationCap size={14} /> Clinical Education & Training
          </span>
          <h2 className="section-title">
            Psychology Internship & Professional Workshops
          </h2>
          <p className="section-subtitle">
            Advancing clinical competence through structured internship observerships, psychometric battery training, and skill-building workshops for students and practitioners.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {/* Left Column: Psychology Student Internship */}
          <div className="editorial-card reveal-element" style={{ backgroundColor: '#FFFDF9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: '#8B5CF6',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <GraduationCap size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#0F3832', margin: 0 }}>
                  {INTERNSHIPS_WORKSHOPS.internships.title}
                </h3>
                <span className="badge-status" style={{ backgroundColor: '#F3E8FF', color: '#7C3AED', marginTop: '4px' }}>
                  {INTERNSHIPS_WORKSHOPS.internships.eligibility}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {INTERNSHIPS_WORKSHOPS.internships.highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.938rem', color: '#0F3832' }}>
                  <CheckCircle size={18} color="#8B5CF6" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-accent"
              onClick={() => onApplyInternship('Psychology Clinical Internship')}
              style={{ width: '100%' }}
            >
              <span>Apply For Internship</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: Upcoming Workshops & Seminars */}
          <div className="editorial-card reveal-element" style={{ backgroundColor: '#FFFDF9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: '#0F3832',
                  color: '#F2C94C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <BookOpen size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0F3832', margin: 0 }}>
                Upcoming Skill Workshops
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {workshopsList.map((ws, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: '#FBF9F4',
                    padding: '16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(15, 56, 50, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.813rem', color: '#8B5CF6', fontWeight: 700, marginBottom: '6px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {ws.date}
                    </span>
                    <span>{ws.duration}</span>
                  </div>

                  <h4 style={{ fontSize: '1.063rem', color: '#0F3832', marginBottom: '6px' }}>
                    {ws.title}
                  </h4>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.813rem', color: '#4B635E' }}>Target: {ws.target}</span>
                    <button 
                      onClick={() => onApplyInternship(`Workshop: ${ws.title}`)}
                      style={{ color: '#0F3832', fontWeight: 700, fontSize: '0.813rem', textDecoration: 'underline' }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
