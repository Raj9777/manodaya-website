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

        {/* Specialists Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
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
                borderRadius: '28px',
                padding: '32px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.05)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Profile Photo & Badges */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                  <div 
                    style={{
                      width: '96px',
                      height: '96px',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '3px solid #FF497C',
                      boxShadow: '0 8px 20px rgba(255, 73, 124, 0.25)',
                      backgroundColor: '#FFA6DF'
                    }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div>
                    <span 
                      className="badge-status" 
                      style={{ 
                        backgroundColor: member.id === 'dr-sayali-mishra' ? '#EDE9FE' : '#FFE4EC', 
                        color: member.id === 'dr-sayali-mishra' ? '#8A4FFF' : '#FF497C',
                        marginBottom: '6px',
                        fontSize: '0.75rem'
                      }}
                    >
                      {member.qualifications.split('|')[1]?.trim() || member.qualifications}
                    </span>

                    <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0E0E10', lineHeight: 1.2, marginBottom: '4px' }}>
                      {member.name}
                    </h3>

                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#8A4FFF', marginBottom: '4px' }}>
                      {member.role}
                    </div>

                    <div style={{ fontSize: '0.781rem', color: '#64748B', fontWeight: 600 }}>
                      🏅 {member.experience}
                    </div>
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
                          padding: '4px 12px',
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
              <div style={{ display: 'flex', gap: '10px', paddingTop: '16px', borderTop: '1px solid #F1F1F5' }}>
                <button 
                  className="btn-black"
                  onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                  style={{ flex: 1, padding: '10px 18px', fontSize: '0.844rem' }}
                >
                  <Calendar size={15} />
                  <span>Book Consultation</span>
                </button>

                {mode === 'short' && (
                  <button 
                    className="btn-outline-theme"
                    onClick={() => setActiveModalMember(member)}
                    style={{ padding: '10px 16px', fontSize: '0.844rem' }}
                  >
                    <span>Full Profile</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Bio Modal (when clicked from Home Page) */}
      {activeModalMember && (
        <div className="modal-overlay" onClick={() => setActiveModalMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
              <img 
                src={activeModalMember.image} 
                alt={activeModalMember.name} 
                style={{ width: '80px', height: '80px', borderRadius: '20px', objectFit: 'cover', border: '2px solid #FF497C' }}
              />
              <div>
                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF', marginBottom: '4px' }}>
                  {activeModalMember.qualifications}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0E0E10' }}>
                  {activeModalMember.name}
                </h3>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF497C' }}>
                  {activeModalMember.role} • {activeModalMember.experience}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.938rem', color: '#475569', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <p>{activeModalMember.fullBioPara1}</p>
              <p>{activeModalMember.fullBioPara2}</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '10px' }}>
                Special Interests
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeModalMember.specialInterests.map((interest, idx) => (
                  <span key={idx} style={{ fontSize: '0.781rem', fontWeight: 700, backgroundColor: '#FAFAFD', color: '#0E0E10', padding: '4px 12px', borderRadius: '9999px', border: '1px solid #E2E8F0' }}>
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
                style={{ flex: 1 }}
              >
                <span>Book Consultation</span>
              </button>

              <button className="btn-outline-theme" onClick={() => setActiveModalMember(null)}>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
