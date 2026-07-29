import React from 'react';
import { HeartPulse, CheckCircle, ArrowRight } from 'lucide-react';
import { THERAPIES } from '../data/content';
import { TherapyIllustration } from './EditorialIllustrations';

export const TherapiesSection = ({ currentMode, onSelectTherapy }) => {
  const filteredTherapies = THERAPIES.filter(item => {
    if (currentMode === 'child') return item.category === 'child';
    if (currentMode === 'adult') return item.category === 'adult';
    return true;
  });

  return (
    <section id="therapies" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '56px'
          }}
        >
          <div className="reveal-element">
            <span className="section-badge" style={{ backgroundColor: '#FFD2DF', color: '#FF497C' }}>
              <HeartPulse size={14} /> Evidence-Based Interventions
            </span>
            <h2 className="section-title">
              Psychotherapy & Therapeutic Care
            </h2>
            <p className="section-subtitle">
              Goal-directed, empathetic psychotherapies tailored to cognitive, emotional, and relational needs using proven clinical frameworks.
            </p>
          </div>

          {/* Psychotherapy Graphic (For therapy.png) - 100% Transparent & Interactive */}
          <div className="reveal-element is-visible" style={{ textAlign: 'center' }}>
            <img 
              src="/images/elements/For therapy.png" 
              alt="MANODAYA Psychotherapy & Counseling Care" 
              className="interactive-element-graphic"
              style={{ maxWidth: '560px', width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Therapy Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredTherapies.map((therapy) => (
            <div 
              key={therapy.id}
              className="reference-card reveal-element"
              style={{
                backgroundColor: '#FAFAFD',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: '#F1F1F5'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span 
                    className="badge-status" 
                    style={{ 
                      backgroundColor: therapy.category === 'child' ? '#EDE9FE' : '#FFD2DF',
                      color: therapy.category === 'child' ? '#7C3AED' : '#FF497C'
                    }}
                  >
                    {therapy.category === 'child' ? 'Pediatric & Parent' : 'Adult & Individual'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#0E0E10' }}>
                  {therapy.title}
                </h3>

                <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
                  {therapy.description}
                </p>

                {/* Highlights checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {therapy.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#0E0E10' }}>
                      <CheckCircle size={15} color="#8A4FFF" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="btn-black"
                onClick={() => onSelectTherapy(therapy.title)}
                style={{ width: '100%', justifyContent: 'space-between' }}
              >
                <span>Consult For {therapy.title}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
