import React from 'react';
import { Users, Calendar, ArrowRight } from 'lucide-react';
import { SUPPORT_GROUPS } from '../data/content';
import { SupportIllustration } from './EditorialIllustrations';

export const SupportGroupsSection = ({ onRegisterSupportGroup }) => {
  return (
    <section id="support-groups" className="section-padding" style={{ backgroundColor: '#FAFAFD' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '56px'
          }}
        >
          <div className="reveal-element">
            <span className="section-badge" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>
              <Users size={14} /> Community & Growth
            </span>
            <h2 className="section-title">
              Facilitated Support Groups
            </h2>
            <p className="section-subtitle">
              Structured, empathetic group circles led by clinical experts to foster peer connection, unmasking, and shared strategies.
            </p>
          </div>

          <div className="reveal-element">
            <SupportIllustration />
          </div>
        </div>

        {/* Support Group Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {SUPPORT_GROUPS.map((group) => (
            <div 
              key={group.id}
              className="reference-card reveal-element"
              style={{
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: '#F1F1F5'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.813rem', color: '#8A4FFF', fontWeight: 700, marginBottom: '8px' }}>
                  <Calendar size={14} /> {group.schedule}
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#0E0E10' }}>
                  {group.title}
                </h3>

                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED', marginBottom: '14px' }}>
                  Target: {group.audience}
                </span>

                <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
                  {group.description}
                </p>
              </div>

              <button 
                className="btn-pink"
                onClick={() => onRegisterSupportGroup(group.title)}
                style={{ width: '100%', fontSize: '0.875rem' }}
              >
                <span>Register / Enquire</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
