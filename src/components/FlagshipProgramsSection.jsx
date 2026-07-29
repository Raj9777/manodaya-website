import React, { useState } from 'react';
import { Sparkles, Compass, Brain, CheckCircle2, ArrowRight, Calendar, UserCheck, Eye, X, BookOpen, Award } from 'lucide-react';

export const FlagshipProgramsSection = ({ onOpenBooking }) => {
  const [activeImageModal, setActiveImageModal] = useState(null);

  const FLAGSHIP_PROGRAMS = [
    {
      id: 'mcmf-career',
      title: 'MY CHOICE MY FUTURE (MCMF)',
      subtitle: 'Career Aptitude & Personality Assessment Programme',
      badge: 'Academic & Stream Guidance',
      themeColor: '#D97706',
      bgColor: '#FFFBEB',
      borderColor: '#FDE68A',
      accentColor: '#B45309',
      posterImage: '/images/section/career_aptitude_assessment.jpeg',
      description: 'MANODAYA presents My Choice My Future (MCMF) — a structured career aptitude and personality assessment programme designed to help students make informed academic and career decisions.',
      whatItCovers: [
        'Aptitude & cognitive strengths',
        'Personality traits & learning styles',
        'Career interests & suitability',
        'Strengths, abilities & potential',
        'Stream and career guidance',
        'Decision-making & future planning'
      ],
      suitableFor: [
        'Middle School, High School & Senior Secondary Students',
        'Subject / Stream Selection (Class 10th & 12th)',
        'Resolving Career Confusion & Academic Planning',
        'Building Confidence & Goal Orientation'
      ],
      deliverables: [
        'Detailed assessment report',
        'Career cluster mapping',
        'Personality insights',
        'Guidance for suitable career pathways',
        'One-to-one feedback session'
      ],
      conductedBy: [
        { name: 'Dr. Sayali Mishra', role: 'RCI Licensed Senior Clinical Psychologist' },
        { name: 'Ashwini Rajmohan', role: 'Therapist & Consultant' }
      ]
    },
    {
      id: 'cogmed-training',
      title: 'MANODAYA COGMED WORKING MEMORY TRAINING',
      subtitle: 'Evidence-Based Cognitive Remediation & Attention Training',
      badge: 'Neuro-Cognitive Rehabilitation',
      themeColor: '#15803D',
      bgColor: '#F0FDF4',
      borderColor: '#BBF7D0',
      accentColor: '#166534',
      posterImage: '/images/section/cogmed_working_memory.jpeg',
      description: 'A scientifically validated, individualized cognitive training protocol focused on enhancing working memory capacity, processing speed, and executive control across children and adults.',
      whatItCovers: [
        'Working memory capacity expansion',
        'Sustained attention & focus retention',
        'Processing efficiency & speed',
        'Cognitive flexibility & task switching',
        'Impulse control & self-regulation',
        'Learning & academic performance enhancement'
      ],
      suitableFor: [
        'ADHD & attention difficulties',
        'Learning difficulties & academic struggles',
        'Poor concentration & memory retention',
        'Executive functioning challenges',
        'Neurological & cognitive rehabilitation support'
      ],
      deliverables: [
        'Individualised cognitive training protocol',
        'Guided clinical sessions & continuous monitoring',
        'Quantitative progress tracking',
        'Parent & caregiver guidance & support'
      ],
      conductedBy: [
        { name: 'Dr. Sayali Mishra', role: 'RCI Licensed Senior Clinical Psychologist' },
        { name: 'Ashwini Rajmohan', role: 'Consultant & Therapist' }
      ]
    }
  ];

  return (
    <section id="flagship-programs" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-element is-visible">
          <span className="section-badge" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
            <Sparkles size={14} /> Flagship Clinical Initiatives
          </span>
          <h2 className="section-title">
            Specialized Featured Programs
          </h2>
          <p className="section-subtitle">
            Structured career aptitude assessments and evidence-based Cogmed working memory training led by senior clinical psychologists.
          </p>
        </div>

        {/* Full-Width Landscape Mode Rows Stack */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px'
          }}
        >
          {FLAGSHIP_PROGRAMS.map((prog) => (
            <div 
              key={prog.id}
              className="reference-card reveal-element is-visible"
              style={{
                backgroundColor: prog.bgColor,
                borderRadius: '32px',
                padding: '36px',
                border: `2px solid ${prog.borderColor}`,
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.05)',
                position: 'relative'
              }}
            >
              {/* Landscape Layout Grid: Left Poster Image | Right Program Details */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                  gap: '36px',
                  alignItems: 'center'
                }}
              >
                {/* Left Landscape Column: Poster Image Preview */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span 
                      className="badge-status" 
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        color: prog.themeColor,
                        border: `1px solid ${prog.borderColor}`,
                        fontSize: '0.813rem'
                      }}
                    >
                      {prog.badge}
                    </span>

                    <button
                      onClick={() => setActiveImageModal(prog)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        backgroundColor: '#FFFFFF',
                        color: prog.themeColor,
                        border: `1px solid ${prog.borderColor}`,
                        padding: '5px 12px',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                      }}
                    >
                      <Eye size={13} /> Enlarge Poster
                    </button>
                  </div>

                  <div 
                    onClick={() => setActiveImageModal(prog)}
                    style={{
                      borderRadius: '24px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      position: 'relative',
                      border: '3px solid #FFFFFF',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                      maxHeight: '440px'
                    }}
                    className="vector-container"
                  >
                    <img 
                      src={prog.posterImage} 
                      alt={prog.title}
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        gap: '6px',
                        opacity: 0,
                        transition: 'opacity 0.25s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                    >
                      <Eye size={20} /> Click to View Full Resolution Poster
                    </div>
                  </div>
                </div>

                {/* Right Landscape Column: Program Breakdown & Details */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0E0E10', lineHeight: 1.2, marginBottom: '6px' }}>
                      {prog.title}
                    </h3>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: prog.accentColor, marginBottom: '16px' }}>
                      {prog.subtitle}
                    </div>

                    <p style={{ fontSize: '0.969rem', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
                      {prog.description}
                    </p>

                    {/* Highlights breakdown side-by-side in right column */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px', marginBottom: '24px' }}>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '18px', border: `1px solid ${prog.borderColor}` }}>
                        <div style={{ fontSize: '0.781rem', fontWeight: 800, color: prog.accentColor, textTransform: 'uppercase', marginBottom: '8px' }}>
                          ✨ What the Program Covers:
                        </div>
                        <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.844rem', color: '#475569', lineHeight: 1.6 }}>
                          {prog.whatItCovers.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '18px', border: `1px solid ${prog.borderColor}` }}>
                        <div style={{ fontSize: '0.781rem', fontWeight: 800, color: prog.accentColor, textTransform: 'uppercase', marginBottom: '8px' }}>
                          🎯 Suitable For:
                        </div>
                        <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.844rem', color: '#475569', lineHeight: 1.6 }}>
                          {prog.suitableFor.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Faculty Conducting */}
                    <div style={{ marginBottom: '24px', paddingTop: '16px', borderTop: `1px solid ${prog.borderColor}` }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
                        👨‍⚕️ Conducted By Senior Specialists:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {prog.conductedBy.map((fac, idx) => (
                          <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '8px 14px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '0.813rem' }}>
                            <strong style={{ color: '#0E0E10' }}>{fac.name}</strong>
                            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{fac.role}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Register Action Button */}
                  <button 
                    className="btn-black"
                    onClick={() => onOpenBooking(`Enquiry for ${prog.title}`)}
                    style={{ width: '100%', padding: '14px', fontSize: '0.938rem', backgroundColor: '#0E0E10', borderColor: '#0E0E10' }}
                  >
                    <Calendar size={18} />
                    <span>Register / Enroll in Program</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Official Poster Modal */}
      {activeImageModal && (
        <div className="modal-overlay" onClick={() => setActiveImageModal(null)} style={{ zIndex: 9999 }}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ maxWidth: '780px', padding: '24px', borderRadius: '24px', backgroundColor: '#FFFFFF' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF', marginBottom: '4px' }}>
                  {activeImageModal.badge}
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0E0E10' }}>
                  {activeImageModal.title}
                </h3>
              </div>
              <button className="modal-close-btn" onClick={() => setActiveImageModal(null)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', maxHeight: '75vh', overflowY: 'auto' }}>
              <img 
                src={activeImageModal.posterImage} 
                alt={activeImageModal.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <button 
                className="btn-black"
                onClick={() => {
                  onOpenBooking(`Enquiry for ${activeImageModal.title}`);
                  setActiveImageModal(null);
                }}
                style={{ flex: 1 }}
              >
                <Calendar size={18} />
                <span>Enroll in This Program</span>
              </button>

              <button className="btn-outline-theme" onClick={() => setActiveImageModal(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
