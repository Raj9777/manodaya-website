import React from 'react';
import { HeadphonesListeningIllustration } from './EditorialIllustrations';
import { ArrowRight, Heart, ShieldCheck } from 'lucide-react';

export const AboutSection = ({ currentMode, onOpenBooking }) => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headphones Listening Graphic */}
          <div className="reveal-element">
            <HeadphonesListeningIllustration />
          </div>

          {/* Right Column: Prompt Exact Text */}
          <div className="reveal-element">
            <span className="section-badge" style={{ backgroundColor: '#FFE4EC', color: '#FF5E8E' }}>
              <Heart size={14} fill="#FF5E8E" /> Compassionate Care
            </span>

            <h2 
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '20px'
              }}
            >
              More Than Therapy, A Safe Space.
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '32px' }}>
              MANODAYA is a multidisciplinary psychological care centre in Bhubaneswar focused on assessment, psychotherapy, cognitive care and rehabilitation across different stages of life.
            </p>

            {/* Quick Stat Pill Highlights */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '36px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', margin: 0, lineHeight: 1 }}>
                  98%
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '6px 0 0 0' }}>
                  Client & Parent Satisfaction
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', margin: 0, lineHeight: 1 }}>
                  15+
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '6px 0 0 0' }}>
                  Standardized Test Batteries
                </p>
              </div>
            </div>

            <button className="btn-primary-theme" onClick={() => onOpenBooking()}>
              <span>Book an Appointment</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
