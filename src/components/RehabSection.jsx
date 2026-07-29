import React from 'react';
import { ArrowRight, Sparkles, Activity } from 'lucide-react';
import { 
  LiveVideoToolkitIllustration, 
  MoodTrackingToolkitIllustration, 
  YogaToolkitIllustration 
} from './EditorialIllustrations';

export const RehabSection = ({ onSelectRehab }) => {
  return (
    <section id="rehab" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <Activity size={14} /> Cognitive Restorative Care
          </span>
          <h2 className="section-title">
            Your Mental Wellness Toolkit, Always Within Reach
          </h2>
          <p className="section-subtitle">
            Neuro-cognitive remediation and therapy protocols giving you everything you need to keep moving forward.
          </p>
        </div>

        {/* 3 Toolkit Cards matching Reference Section 3 */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {/* Toolkit 1: Live Video & In-Person Sessions */}
          <div 
            className="reference-card reveal-element"
            style={{
              textAlign: 'center',
              padding: '36px 28px',
              backgroundColor: '#FAFAFD',
              borderColor: '#F1F1F5'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <LiveVideoToolkitIllustration />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#0E0E10' }}>
              Live Consultation & Video Sessions
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '24px', minHeight: '48px' }}>
              Connect with experienced specialists anywhere, anytime for clinical assessment or therapy.
            </p>

            <button 
              onClick={() => onSelectRehab('Live Consultation & Sessions')}
              style={{
                color: '#0E0E10',
                fontWeight: 700,
                fontSize: '0.938rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Learn More</span>
              <ArrowRight size={16} color="#FF497C" />
            </button>
          </div>

          {/* Toolkit 2: Mood & Progress Tracking */}
          <div 
            className="reference-card reveal-element"
            style={{
              textAlign: 'center',
              padding: '36px 28px',
              backgroundColor: '#FAFAFD',
              borderColor: '#F1F1F5'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <MoodTrackingToolkitIllustration />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#0E0E10' }}>
              Mood & Cognitive Progress Tracking
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '24px', minHeight: '48px' }}>
              See how far you've come with continuous evaluation of memory, focus, and resilience.
            </p>

            <button 
              onClick={() => onSelectRehab('Cognitive Progress Tracking')}
              style={{
                color: '#0E0E10',
                fontWeight: 700,
                fontSize: '0.938rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Learn More</span>
              <ArrowRight size={16} color="#8A4FFF" />
            </button>
          </div>

          {/* Toolkit 3: Exercises & Cognitive Retraining */}
          <div 
            className="reference-card reveal-element"
            style={{
              textAlign: 'center',
              padding: '36px 28px',
              backgroundColor: '#FAFAFD',
              borderColor: '#F1F1F5'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <YogaToolkitIllustration />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#0E0E10' }}>
              Cognitive Exercises & Retraining
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '24px', minHeight: '48px' }}>
              Targeted attention, working memory, and emotional regulation modules for post-stroke, ADHD, or stress care.
            </p>

            <button 
              onClick={() => onSelectRehab('Cognitive Retraining Exercises')}
              style={{
                color: '#0E0E10',
                fontWeight: 700,
                fontSize: '0.938rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Learn More</span>
              <ArrowRight size={16} color="#10B981" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
