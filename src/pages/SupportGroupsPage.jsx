import React from 'react';
import { Users, Calendar, ArrowRight } from 'lucide-react';
import { SUPPORT_GROUPS } from '../data/content';
import { HoldingHandsBannerIllustration } from '../components/EditorialIllustrations';

export const SupportGroupsPage = ({ onOpenBooking }) => {
  return (
    <div className="page-wrapper section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#D1FAE5', color: '#059669' }}>
            <Users size={14} /> Peer Community Circles
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            Facilitated Support Groups
          </h1>
          <p className="section-subtitle">
            Empathetic, clinician-led peer group circles to foster unmasking, shared coping strategies, and community solidarity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px', marginBottom: '64px' }}>
          {SUPPORT_GROUPS.map((group) => (
            <div key={group.id} className="reference-card reveal-element" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.813rem', color: '#8A4FFF', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} /> {group.schedule}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#0E0E10' }}>{group.title}</h3>
                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED', marginBottom: '14px' }}>
                  {group.audience}
                </span>
                <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>{group.description}</p>
              </div>

              <button className="btn-pink" onClick={() => onOpenBooking(`Support Group: ${group.title}`)} style={{ width: '100%' }}>
                <span>Register For Circle</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <HoldingHandsBannerIllustration />
        </div>
      </div>
    </div>
  );
};
