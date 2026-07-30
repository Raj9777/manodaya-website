import React from 'react';
import { Activity, ArrowRight, Zap } from 'lucide-react';
import { REHABILITATION } from '../data/content';

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

        {/* Featured Cognitive Rehabilitation Graphic (cognitive rehabilitation.png) - 100% Transparent & Interactive */}
        <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/images/elements/cognitive rehabilitation.png" 
            alt="MANODAYA Senior Cognitive Remediation & Memory Training" 
            className="interactive-element-graphic"
            style={{ maxWidth: '640px', width: '100%', height: 'auto' }}
          />
        </div>

        {/* 3 Toolkit Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '64px' }}>
          <div className="reference-card reveal-element" style={{ textAlign: 'center' }}>
            <img 
              src="/images/elements/Live Video & Tele-Rehab.png" 
              alt="Live Video & Tele-Rehab" 
              className="interactive-element-graphic"
              style={{ maxHeight: '200px', width: '100%', objectFit: 'contain' }}
            />
            <h3 style={{ fontSize: '1.35rem', margin: '16px 0 8px 0' }}>Live Video & Tele-Rehab</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280' }}>Encrypted online tele-health cognitive exercises guided by specialists.</p>
          </div>

          <div className="reference-card reveal-element" style={{ textAlign: 'center' }}>
            <img 
              src="/images/elements/Progress Tracking.png" 
              alt="Progress Tracking" 
              className="interactive-element-graphic"
              style={{ maxHeight: '200px', width: '100%', objectFit: 'contain' }}
            />
            <h3 style={{ fontSize: '1.35rem', margin: '16px 0 8px 0' }}>Progress Tracking</h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280' }}>Objective quantitative tracking of cognitive recovery milestones.</p>
          </div>

          <div className="reference-card reveal-element" style={{ textAlign: 'center' }}>
            <img 
              src="/images/elements/Cognitive Exercises.png" 
              alt="Cognitive Exercises" 
              className="interactive-element-graphic"
              style={{ maxHeight: '200px', width: '100%', objectFit: 'contain' }}
            />
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
                <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: item.extendedDescription ? '16px' : '20px' }}>{item.description}</p>
                {item.extendedDescription && (
                  <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '14px', padding: '14px 16px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#15803D', textTransform: 'uppercase', marginBottom: '6px' }}>
                      ✦ Evidence-Based Cognitive Remediation & Attention Training
                    </div>
                    <p style={{ fontSize: '0.844rem', color: '#166534', lineHeight: 1.6, margin: 0 }}>{item.extendedDescription}</p>
                  </div>
                )}
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
