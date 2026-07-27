import React from 'react';
import { HeartPulse, CheckCircle, ArrowRight } from 'lucide-react';
import { THERAPIES } from '../data/content';
import { HeadphonesListeningIllustration } from '../components/EditorialIllustrations';

export const TherapiesPage = ({ onOpenBooking }) => {
  return (
    <div className="page-wrapper section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <HeartPulse size={14} /> Evidence-Based Interventions
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            Psychotherapy & Therapeutic Care
          </h1>
          <p className="section-subtitle">
            Structured, empathetic psychotherapies tailored to cognitive, emotional, and relational needs across every stage of life.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {THERAPIES.map((t) => (
            <div key={t.id} className="reference-card reveal-element" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-status" style={{ backgroundColor: t.category === 'child' ? '#FFE4EC' : '#EDE9FE', color: t.category === 'child' ? '#FF5E8E' : '#7C3AED', marginBottom: '12px' }}>
                  {t.category === 'child' ? 'Pediatric & Parent' : 'Adult & Individual'}
                </span>
                <h3 style={{ fontSize: '1.35rem', margin: '8px 0 10px 0', color: '#0E0E10' }}>{t.title}</h3>
                <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>{t.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {t.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#0E0E10' }}>
                      <CheckCircle size={15} color="#8A4FFF" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-black" onClick={() => onOpenBooking(t.title)} style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>Consult For {t.title}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
