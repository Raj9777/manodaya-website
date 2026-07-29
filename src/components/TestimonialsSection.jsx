import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Star, Pause, Play } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection = ({ currentMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentTestimonial = TESTIMONIALS[currentIndex] || TESTIMONIALS[0];

  // Auto-advance testimonials every 5 seconds unless paused on hover/interaction
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Duplicate testimonials array for seamless continuous infinite marquee scrolling
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section 
      className="section-padding" 
      style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal-element is-visible" style={{ maxWidth: '640px', margin: '0 auto 28px auto' }}>
          <span className="section-badge" style={{ backgroundColor: '#FFE4EC', color: '#FF497C' }}>
            <Heart size={14} fill="#FF497C" /> Patient & Family Experiences
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0E0E10', marginBottom: '8px' }}>
            What Our Clients Say
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.063rem' }}>
            Real stories from people who found support, healing, and hope with MANODAYA.
          </p>
        </div>

        {/* Continuous Animated Scrolling Marquee for Testimonial Avatar Images */}
        <div className="testimonial-marquee-wrapper">
          <div className="testimonial-marquee-track">
            {marqueeItems.map((item, idx) => {
              const realIdx = idx % TESTIMONIALS.length;
              const isSelected = realIdx === currentIndex;
              return (
                <button
                  key={`${item.id}-${idx}`}
                  onClick={() => setCurrentIndex(realIdx)}
                  style={{
                    width: isSelected ? '84px' : '64px',
                    height: isSelected ? '84px' : '64px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: isSelected ? '3.5px solid #FF497C' : '2px solid #E2E8F0',
                    boxShadow: isSelected ? '0 8px 24px rgba(255, 73, 124, 0.35)' : '0 4px 12px rgba(0,0,0,0.04)',
                    transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    backgroundColor: '#FFF8FC',
                    padding: 0,
                    flexShrink: 0
                  }}
                  title={`${item.name} - Click to view review`}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div 
          className="reveal-element is-visible"
          style={{
            maxWidth: '740px',
            margin: '0 auto',
            position: 'relative',
            backgroundColor: '#FAFAFD',
            borderRadius: '32px',
            padding: '40px 36px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Avatar & Stars */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <div 
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#FFF8FC',
                border: '3px solid #FF497C',
                boxShadow: '0 8px 20px rgba(255, 73, 124, 0.2)',
                marginBottom: '14px'
              }}
              className="interactive-element-graphic"
            >
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '4px', color: '#FFB800' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
              ))}
            </div>
          </div>

          <p 
            style={{
              fontSize: '1.188rem',
              fontWeight: 600,
              color: '#0E0E10',
              lineHeight: 1.6,
              marginBottom: '24px',
              fontStyle: 'italic'
            }}
          >
            "{currentTestimonial.quote}"
          </p>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0E0E10', marginBottom: '2px' }}>
              {currentTestimonial.name}
            </h4>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#8A4FFF' }}>
              {currentTestimonial.role}
            </div>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
            <button 
              onClick={handlePrev}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0E0E10',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              onClick={handleNext}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0E0E10',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
