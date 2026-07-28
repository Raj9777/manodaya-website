import React, { useState } from 'react';
import { UserCheck, Award, GraduationCap, Calendar, Sparkles, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';

export const ClinicalTeamSection = ({ mode = 'short', onOpenBooking }) => {
  const [activeModalMember, setActiveModalMember] = useState(null);

  return (
    <section id="clinical-team" className="section-padding" style={{ backgroundColor: mode === 'full' ? '#FFFFFF' : '#FAFAFD' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-element is-visible">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <UserCheck size={14} /> Clinical Leadership & Specialists
          </span>
          <h2 className="section-title">
            Meet Our Clinical Specialists
          </h2>
          <p className="section-subtitle">
            Experienced clinical psychologists and doctoral scholars dedicated to evidence-based assessment, therapy, and neurocognitive care.
          </p>
        </div>

        {/* Specialists Cards Grid with Large Square Doctor Pictures */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '36px',
            alignItems: 'stretch'
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id}
              className="reference-card reveal-element is-visible"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderRadius: '32px',
                padding: '28px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
                position: 'relative'
              }}
            >
              <div>
                {/* 1:1 Square View Doctor Picture */}
                <div 
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    position: 'relative',
                    boxShadow: '0 12px 30px rgba(255, 73, 124, 0.18)',
                    backgroundColor: '#FFA6DF',
                    border: '3px solid #FF497C'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'center 15%'
                    }}
                  />

                  {/* Overlay Experience Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(15, 23, 42, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.781rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    🏅 {member.experience}
                  </div>
                </div>

                {/* Name, Role & Qualifications */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                    <span 
                      className="badge-status" 
                      style={{ 
                        backgroundColor: member.id === 'dr-sayali-mishra' ? '#EDE9FE' : '#FFE4EC', 
                        color: member.id === 'dr-sayali-mishra' ? '#8A4FFF' : '#FF497C',
                        fontSize: '0.781rem'
                      }}
                    >
                      {member.qualifications}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0E0E10', lineHeight: 1.2, marginBottom: '4px' }}>
                    {member.name}
                  </h3>

                  <div style={{ fontSize: '0.938rem', fontWeight: 800, color: '#8A4FFF' }}>
                    {member.role}
                  </div>
                </div>

                {/* Biography Text (Short for Home, Full for About) */}
                <div style={{ marginBottom: '24px' }}>
                  {mode === 'full' ? (
                    <div style={{ fontSize: '0.938rem', color: '#475569', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <p>{member.fullBioPara1}</p>
                      <p>{member.fullBioPara2}</p>
                    </div>
                  ) : (
                    <p style={{ fontSize: '0.938rem', color: '#475569', lineHeight: 1.6 }}>
                      {member.shortBio}
                    </p>
                  )}
                </div>

                {/* Special Interests Pills */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>
                    Special Interests & Clinical Expertise
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {member.specialInterests.map((interest, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          backgroundColor: '#FAFAFD',
                          color: '#0E0E10',
                          padding: '5px 14px',
                          borderRadius: '9999px',
                          border: '1px solid #E2E8F0'
                        }}
                      >
                        • {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', paddingTop: '18px', borderTop: '1px solid #F1F1F5' }}>
                <button 
                  className="btn-black"
                  onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                  style={{ flex: 1, padding: '12px 18px', fontSize: '0.875rem' }}
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>

                {mode === 'short' && (
                  <button 
                    className="btn-outline-theme"
                    onClick={() => setActiveModalMember(member)}
                    style={{ padding: '12px 18px', fontSize: '0.875rem' }}
                  >
                    <span>Full Profile</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Bio Modal with Square View Picture */}
      {activeModalMember && (
        <div className="modal-overlay" onClick={() => setActiveModalMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px', borderRadius: '28px', padding: '36px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
              <img 
                src={activeModalMember.image} 
                alt={activeModalMember.name} 
                style={{ 
                  width: '130px', 
                  height: '130px', 
                  borderRadius: '24px', 
                  objectFit: 'cover', 
                  border: '3px solid #FF497C',
                  boxShadow: '0 8px 24px rgba(255, 73, 124, 0.2)'
                }}
              />
              <div>
                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF', marginBottom: '6px' }}>
                  {activeModalMember.qualifications}
                </span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0E0E10', marginBottom: '4px' }}>
                  {activeModalMember.name}
                </h3>
                <div style={{ fontSize: '0.938rem', fontWeight: 800, color: '#FF497C' }}>
                  {activeModalMember.role} • {activeModalMember.experience}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.938rem', color: '#475569', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <p>{activeModalMember.fullBioPara1}</p>
              <p>{activeModalMember.fullBioPara2}</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '10px' }}>
                Special Interests
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeModalMember.specialInterests.map((interest, idx) => (
                  <span key={idx} style={{ fontSize: '0.781rem', fontWeight: 700, backgroundColor: '#FAFAFD', color: '#0E0E10', padding: '5px 14px', borderRadius: '9999px', border: '1px solid #E2E8F0' }}>
                    • {interest}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn-black"
                onClick={() => {
                  onOpenBooking(`Consultation with ${activeModalMember.name}`);
                  setActiveModalMember(null);
                }}
                style={{ flex: 1, padding: '12px' }}
              >
                <span>Book Consultation</span>
              </button>

              <button className="btn-outline-theme" onClick={() => setActiveModalMember(null)} style={{ padding: '12px 20px' }}>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
