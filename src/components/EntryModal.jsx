import React from 'react';
import { Baby, UserCheck, Sparkles, Heart, ArrowRight, X } from 'lucide-react';
import { AUDIENCE_CONFIG } from '../data/content';

export const EntryModal = ({ isOpen, onClose, onSelectMode }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ zIndex: 2000 }}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '840px', 
          padding: '48px 36px', 
          textAlign: 'center',
          border: '2px solid rgba(15, 56, 50, 0.12)',
          background: 'linear-gradient(180deg, #FFFDF9 0%, #FBF9F4 100%)'
        }}
      >
        {/* Top Close Button (for revisiting) */}
        {onClose && (
          <button className="modal-close-btn" onClick={onClose} aria-label="Close portal modal">
            <X size={20} />
          </button>
        )}

        {/* Header Branding */}
        <div style={{ marginBottom: '32px' }}>
          <span className="section-badge" style={{ backgroundColor: '#E2EBE4' }}>
            <Sparkles size={16} className="pulse-element" /> Welcome to MANODAYA
          </span>
          <h2 style={{ fontSize: '2.25rem', color: '#0F3832', marginBottom: '12px' }}>
            Select Your Specialized Care Path
          </h2>
          <p style={{ color: '#4B635E', fontSize: '1.063rem', maxWidth: '600px', margin: '0 auto' }}>
            MANODAYA provides evidence-based neuropsychological care across the lifespan. Please select your care category to personalize your experience.
          </p>
        </div>

        {/* Dual Choice Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* Child & Adolescent Card */}
          <div 
            className="editorial-card"
            onClick={() => onSelectMode('child')}
            style={{
              padding: '32px 24px',
              textAlign: 'left',
              cursor: 'pointer',
              borderColor: '#A78BFA',
              background: 'linear-gradient(135deg, #FFFDF9 0%, #F3E8FF 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: '#A78BFA', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#FFF'
                }}
              >
                <Baby size={32} />
              </div>
              <span className="badge-status" style={{ backgroundColor: '#FFF', color: '#7C3AED' }}>
                {AUDIENCE_CONFIG.child.ageRange}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#0F3832' }}>
              Child & Adolescent Care
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#4B635E', marginBottom: '20px', minHeight: '60px' }}>
              ADHD Screening, Autism Assessments, Learning Disabilities (SLD), IQ Testing, Behavior Therapy & Parent Guidance.
            </p>

            <button 
              className="btn-primary" 
              style={{ width: '100%', backgroundColor: '#8B5CF6', justifyContent: 'space-between' }}
            >
              <span>Explore Child Care</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Adult & Geriatric Card */}
          <div 
            className="editorial-card"
            onClick={() => onSelectMode('adult')}
            style={{
              padding: '32px 24px',
              textAlign: 'left',
              cursor: 'pointer',
              borderColor: '#0F3832',
              background: 'linear-gradient(135deg, #FFFDF9 0%, #E2EBE4 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  backgroundColor: '#0F3832', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#F2C94C'
                }}
              >
                <UserCheck size={32} />
              </div>
              <span className="badge-status" style={{ backgroundColor: '#FFF', color: '#0F3832' }}>
                {AUDIENCE_CONFIG.adult.ageRange}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#0F3832' }}>
              Adult & Geriatric Care
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#4B635E', marginBottom: '20px', minHeight: '60px' }}>
              Psychotherapy (CBT/DBT), Neuropsychological Testing, Post-Stroke & Epilepsy Rehab, Dementia & Memory Screening.
            </p>

            <button 
              className="btn-primary" 
              style={{ width: '100%', backgroundColor: '#0F3832', justifyContent: 'space-between' }}
            >
              <span>Explore Adult Care</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Unified Option */}
        <button 
          onClick={() => onSelectMode('all')}
          style={{
            background: 'none',
            border: 'none',
            color: '#0F3832',
            fontWeight: '600',
            fontSize: '0.938rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'underline',
            cursor: 'pointer'
          }}
        >
          <Heart size={16} fill="#FF8A8A" color="#FF8A8A" /> View All Comprehensive Lifespan Services
        </button>
      </div>
    </div>
  );
};
