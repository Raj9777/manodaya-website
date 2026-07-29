import React from 'react';
import { Calendar, Video, Sparkles } from 'lucide-react';
import { HeroIllustration } from './EditorialIllustrations';

export const Hero = ({ onOpenBooking, currentMode }) => {
  return (
    <section 
      style={{
        paddingTop: '56px',
        paddingBottom: '72px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Copy & CTAs */}
          <div className="reveal-element">
            <span className="section-badge">
              <Sparkles size={14} /> Lifespan Psychological Care
            </span>

            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                marginBottom: '20px',
                letterSpacing: '-0.04em',
                color: 'var(--text-main)'
              }}
            >
              Healing Mind – Empowering Lives
            </h1>

            <p 
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-muted)',
                marginBottom: '28px',
                lineHeight: 1.6,
                maxWidth: '560px'
              }}
            >
              MANODAYA offers psychological and neuropsychological assessments, evidence-based psychotherapy, cognitive rehabilitation and support across the lifespan.
            </p>

            {/* Bullets */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              <span className="badge-status" style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '8px 16px', fontSize: '0.875rem' }}>
                ✓ Child, Adolescent, Adult & Geriatric Services
              </span>
              <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED', padding: '8px 16px', fontSize: '0.875rem' }}>
                ✓ Online & In-Person Consultations
              </span>
            </div>

            {/* Two Aesthetic Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn-black" onClick={() => onOpenBooking('In-Person Consultation')} style={{ padding: '14px 28px', fontSize: '0.938rem', fontWeight: 800 }}>
                <Calendar size={18} />
                <span>Book In-Person Consultation</span>
              </button>

              <button className="btn-outline-theme" onClick={() => onOpenBooking('Online Tele-Health')} style={{ padding: '13px 26px', fontSize: '0.938rem', fontWeight: 800, border: '2px solid #0E0E10' }}>
                <Video size={18} color="#FF497C" />
                <span>Book Online Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="reveal-element" style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '480px', margin: '0 auto' }}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
