import React, { useState } from 'react';
import { ArchTestimonialGraphic } from './EditorialIllustrations';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection = ({ currentMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
      <div className="container">
        {/* Curved Arch Graphic with Cute Brain & Heart Icons (Prompt Requirement 5) */}
        <div className="reveal-element" style={{ maxWidth: '640px', margin: '0 auto -20px auto' }}>
          <ArchTestimonialGraphic />
        </div>

        {/* Section Header with Prompt Exact Text */}
        <div className="reveal-element" style={{ maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>
            What Our Clients Say
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.063rem' }}>
            Real stories from people who found support, healing, and hope with MANODAYA.
          </p>
        </div>

        {/* Anonymized Client Feedback Quote */}
        <div 
          className="reveal-element"
          style={{
            maxWidth: '720px',
            margin: '0 auto 32px auto',
            position: 'relative',
            padding: '0 20px'
          }}
        >
          <p 
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--text-main)',
              lineHeight: 1.6,
              marginBottom: '20px',
              fontStyle: 'italic'
            }}
          >
            "{currentTestimonial.quote}"
          </p>

          <p style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '0.938rem' }}>
            {currentTestimonial.name} — <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{currentTestimonial.role}</span>
          </p>

          {/* Carousel Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            <button 
              onClick={handlePrev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)'
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)'
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cute Floating Hearts below quote */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', opacity: 0.8 }}>
          <Heart size={20} fill="#10B981" color="#10B981" />
          <Heart size={24} fill="#FF5E8E" color="#FF5E8E" />
          <Heart size={18} fill="#8A4FFF" color="#8A4FFF" />
        </div>
      </div>
    </section>
  );
};
