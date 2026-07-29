import React from 'react';
import { Calendar, Heart } from 'lucide-react';

export const ConsultationSection = ({ onOpenBooking }) => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FAFAFD' }}>
      <div className="container">
        <div 
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          {/* Copy & CTA */}
          <div className="reveal-element">
            <span className="section-badge" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>
              <Heart size={14} fill="#059669" /> Empathetic Listening
            </span>

            <h2 
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 900,
                color: '#0E0E10',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '24px'
              }}
            >
              Therapy That Feels Like You, Where Understanding Begins with Listening
            </h2>

            <p style={{ color: '#6B7280', fontSize: '1.063rem', lineHeight: 1.6, marginBottom: '20px' }}>
              No two journeys to healing are the same — that's why MANODAYA tailors every session to your story. Whether you're navigating daily stress, child development, or deep neuro-cognitive challenges, we match you with a specialist who fits your needs.
            </p>

            <p style={{ color: '#0E0E10', fontWeight: 700, fontSize: '0.938rem', marginBottom: '32px' }}>
              Because therapy works best when it feels genuine, not clinical.
            </p>

            <button className="btn-black" onClick={() => onOpenBooking()} style={{ padding: '16px 32px' }}>
              <Calendar size={18} />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
