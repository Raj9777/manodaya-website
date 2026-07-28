import React from 'react';
import { Activity, ArrowRight, Zap } from 'lucide-react';
import { REHABILITATION } from '../data/content';
import { YogaToolkitIllustration, MoodTrackingToolkitIllustration, LiveVideoToolkitIllustration } from '../components/EditorialIllustrations';

export const RehabPage = ({ onOpenBooking }) => {
  return (
    <div className="page-wrapper section-padding" style={{ backgroundColor: '#FAFAFD' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-element is-visible">
          <span className="section-badge" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>
            <Activity size={14} /> Neuro Restorative Care
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            Cognitive Remediation & Rehabilitation
          </h1>
          <p className="section-subtitle">
            Restorative training targeting attention, working memory, executive planning, spatial orientation, and processing speed following stroke, dementia, epilepsy, or ADHD.
          </p>
        </div>

        {/* Featured Cognitive Rehabilitation Illustration Banner (cognitive rehabilitation.png) */}
        <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{
              maxWidth: '680px',
              width: '100%',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(16, 185, 129, 0.12)',
              border: '3px solid #D1FAE5',
              backgroundColor: '#F0FDF4'
            }}
            className="vector-container"
          >
            <img 
              src="/images/elements/cognitive rehabilitation.png" 
              alt="MANODAYA Senior Cognitive Remediation & Memory Training" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* 3 Toolkit Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '64px' }}>
          <div className="reference-card reveal-element" style={{ textAlign: 'center' }}>
            <LiveVideoToolkitIllustration />
            <h3 style={{ fontSize: '1.35rem', margin: '16px 0 8px 0' }}>Live Video & Tele-Rehab</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280' }}>Encrypted online tele-health cognitive exercises guided by specialists.</p>
          </div>

          <div className="reference-card reveal-element" style={{ textAlign: 'center' }}>
            <MoodTrackingToolkitIllustration />
            <h3 style={{ fontSize: '1.35rem', margin: '16px 0 8px 0' }}>Progress Tracking</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280' }}>Objective quantitative tracking of cognitive recovery milestones.</p>
          </div>

          <div className="reference-card reveal-element" style={{ textAlign: 'center' }}>
            <YogaToolkitIllustration />
            <h3 style={{ fontSize: '1.35rem', margin: '16px 0 8px 0' }}>Cognitive Exercises</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280' }}>Targeted dual-task N-back, executive function, and motor planning drills.</p>
          </div>
        </div>

        {/* Program Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {REHABILITATION.map((item) => (
            <div key={item.id} className="reference-card reveal-element" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge-status" style={{ backgroundColor: '#FEF3C7', color: '#D97706', marginBottom: '12px' }}>
                  {item.audience}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#0E0E10' }}>{item.title}</h3>
                <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>{item.description}</p>
              </div>

              <button className="btn-black" onClick={() => onOpenBooking(item.title)} style={{ width: '100%' }}>
                <span>Enquire For Rehabilitation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
