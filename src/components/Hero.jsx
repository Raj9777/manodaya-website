import React from 'react';
import { Calendar, Video, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SafeSpaceIllustration } from './EditorialIllustrations';

export const Hero = ({ currentMode, onOpenBooking }) => {
  const isChild = currentMode === 'child';
  const isAdult = currentMode === 'adult';

  return (
    <section 
      style={{
        paddingTop: '48px',
        paddingBottom: '72px',
        backgroundColor: isChild ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        transition: 'background-color 0.4s ease'
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
          {/* Left Column: Required Headlines & Pills */}
          <div className="reveal-element is-visible">
            <span 
              className="section-badge"
              style={{
                backgroundColor: isChild ? '#FFE4EC' : isAdult ? '#E2E8F0' : 'var(--bg-secondary)',
                color: isChild ? '#FF5E8E' : isAdult ? '#0F3832' : 'var(--color-primary)'
              }}
            >
              <Sparkles size={14} /> Lifespan Psychological Care
            </span>

            <h1 
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '20px',
                letterSpacing: '-0.03em',
                color: 'var(--text-main)'
              }}
            >
              Advanced Neuropsychological & Cognitive Care
            </h1>

            <p 
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-muted)',
                marginBottom: '28px',
                lineHeight: 1.6,
                maxWidth: '580px'
              }}
            >
              MANODAYA offers psychological and neuropsychological assessments, evidence-based psychotherapy, cognitive rehabilitation and support across the lifespan.
            </p>

            {/* Bullets styled as small pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--text-main)'
                }}
              >
                <CheckCircle2 size={16} color="#10B981" />
                <span>Child, Adolescent, Adult & Geriatric Services</span>
              </div>

              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--text-main)'
                }}
              >
                <CheckCircle2 size={16} color="#8A4FFF" />
                <span>Online & In-Person Consultations</span>
              </div>
            </div>

            {/* Buttons: Book In-Person & Book Online */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                className="btn-primary-theme" 
                onClick={() => onOpenBooking('In-Person Consultation')}
              >
                <Calendar size={18} />
                <span>Book In-Person Consultation</span>
              </button>

              <button 
                className="btn-outline-theme" 
                onClick={() => onOpenBooking('Online Tele-Health')}
              >
                <Video size={18} />
                <span>Book Online Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Vector SVG Graphic */}
          <div className="reveal-element is-visible" style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <SafeSpaceIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
