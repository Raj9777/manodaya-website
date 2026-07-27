import React from 'react';
import { GraduationCap, BookOpen, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { INTERNSHIPS_WORKSHOPS } from '../data/content';

export const InternshipPage = ({ onOpenBooking }) => {
  return (
    <div className="page-wrapper section-padding" style={{ backgroundColor: '#FAFAFD' }}>
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <GraduationCap size={14} /> Clinical Education
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            Internship for Psychology Students & Workshops
          </h1>
          <p className="section-subtitle">
            Structured clinical observerships, case formulations, psychometric battery training, and skill-building workshops.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {/* Internship Card */}
          <div className="reference-card reveal-element" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#8A4FFF', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#0E0E10', margin: 0 }}>
                  {INTERNSHIPS_WORKSHOPS.internships.title}
                </h3>
                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED', marginTop: '4px' }}>
                  {INTERNSHIPS_WORKSHOPS.internships.eligibility}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {INTERNSHIPS_WORKSHOPS.internships.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.938rem', color: '#0E0E10' }}>
                  <CheckCircle size={18} color="#8A4FFF" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <button className="btn-black" onClick={() => onOpenBooking('Psychology Clinical Internship')} style={{ width: '100%' }}>
              <span>Apply For Internship</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Workshops List Card */}
          <div className="reference-card reveal-element" style={{ backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#0E0E10', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0E0E10', margin: 0 }}>Upcoming Workshops</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {INTERNSHIPS_WORKSHOPS.workshops.map((ws, index) => (
                <div key={index} style={{ backgroundColor: '#FAFAFD', padding: '16px', borderRadius: '16px', border: '1px solid #F1F1F5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.813rem', color: '#8A4FFF', fontWeight: 700, marginBottom: '6px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {ws.date}
                    </span>
                    <span>{ws.duration}</span>
                  </div>
                  <h4 style={{ fontSize: '1.063rem', color: '#0E0E10', marginBottom: '6px' }}>{ws.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.813rem', color: '#6B7280' }}>Target: {ws.target}</span>
                    <button onClick={() => onOpenBooking(`Workshop: ${ws.title}`)} style={{ color: '#FF497C', fontWeight: 700, fontSize: '0.813rem', textDecoration: 'underline' }}>
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
