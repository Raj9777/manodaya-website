import React, { useState } from 'react';
import { ClipboardCheck, HeartPulse, Activity, GraduationCap, ArrowRight, Clock, Wrench, X, CheckCircle2 } from 'lucide-react';
import { ASSESSMENTS } from '../data/content';

export const AssessmentsSection = ({ currentMode, onSelectAssessment }) => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // FIX 1: Filter logic - Explicitly honor filterCategory ('all', 'child', 'adult')
  const filteredList = ASSESSMENTS.filter(item => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'child') return item.category === 'child';
    if (filterCategory === 'adult') return item.category === 'adult';
    if (currentMode === 'child') return item.category === 'child';
    if (currentMode === 'adult') return item.category === 'adult';
    return true;
  });

  return (
    <section id="assessments" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-element is-visible">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            <ClipboardCheck size={14} /> Comprehensive Clinical Care
          </span>
          <h2 className="section-title">
            Our Core Clinical Services
          </h2>
          <p className="section-subtitle">
            Multidisciplinary psychological assessment, psychotherapy, cognitive rehabilitation, and professional student training.
          </p>
        </div>

        {/* 4 Core Services Grid Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          {/* Card 1: Assessments */}
          <div className="minimal-card reveal-element is-visible" style={{ borderTop: '4px solid #FF5E8E' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: '#FFE4EC',
                color: '#FF5E8E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <ClipboardCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#0E0E10' }}>
              1. Assessments
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
              ADHD, Autism, IQ, Learning Disability (SLD), Neuropsychological & Memory assessments.
            </p>
            <a href="#assessments-list" style={{ fontWeight: 700, fontSize: '0.875rem', color: '#FF5E8E', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span>View All Batteries</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: Therapies */}
          <div className="minimal-card reveal-element is-visible" style={{ borderTop: '4px solid #8A4FFF' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: '#EDE9FE',
                color: '#8A4FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <HeartPulse size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#0E0E10' }}>
              2. Therapies
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
              CBT, DBT, ACT, Mindfulness, Child & Adolescent Therapy, Couples & Family Therapy.
            </p>
            <a href="#therapies" style={{ fontWeight: 700, fontSize: '0.875rem', color: '#8A4FFF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span>Explore Therapies</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 3: Cognitive Remediation */}
          <div className="minimal-card reveal-element is-visible" style={{ borderTop: '4px solid #10B981' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: '#D1FAE5',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <Activity size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#0E0E10' }}>
              3. Cognitive Remediation
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
              Attention, Memory, and Executive Function Training for ADHD, Stroke, and Dementia.
            </p>
            <a href="#rehab" style={{ fontWeight: 700, fontSize: '0.875rem', color: '#10B981', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span>Explore Toolkit</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 4: Support & Training */}
          <div className="minimal-card reveal-element is-visible" style={{ borderTop: '4px solid #FFB800' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: '#FEF3C7',
                color: '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <GraduationCap size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#0E0E10' }}>
              4. Support & Training
            </h3>
            <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
              Support Groups, Internships for Psychology Students, and Clinical Workshops.
            </p>
            <a href="#support-groups" style={{ fontWeight: 700, fontSize: '0.875rem', color: '#D97706', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span>Join Groups & Internships</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Detailed Assessment Batteries Section */}
        <div id="assessments-list" style={{ paddingTop: '20px' }}>
          {/* Featured Clinical Assessment Graphic (Assessment.png) - 100% Transparent & Interactive */}
          <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/images/elements/Assessment.png" 
              alt="MANODAYA Clinical Assessment & Diagnostic Evaluation" 
              className="interactive-element-graphic"
              style={{ maxWidth: '640px', width: '100%', height: 'auto' }}
            />
          </div>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#0E0E10', marginBottom: '8px' }}>
              Standardized Psychometric & Diagnostic Batteries
            </h3>
            <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
              Standardized clinical evaluation tools administered by certified neuropsychologists.
            </p>

            {/* Filter Pills */}
            <div 
              style={{
                display: 'inline-flex',
                gap: '8px',
                marginTop: '20px',
                backgroundColor: '#FAFAFD',
                padding: '6px',
                borderRadius: '9999px',
                border: '1px solid #E2E8F0',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <button 
                onClick={() => setFilterCategory('all')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.813rem',
                  backgroundColor: filterCategory === 'all' ? '#0E0E10' : 'transparent',
                  color: filterCategory === 'all' ? '#FFFFFF' : '#0E0E10',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                All Batteries ({ASSESSMENTS.length})
              </button>

              <button 
                onClick={() => setFilterCategory('child')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.813rem',
                  backgroundColor: filterCategory === 'child' ? '#FF497C' : 'transparent',
                  color: filterCategory === 'child' ? '#FFFFFF' : '#0E0E10',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Child & Adolescent ({ASSESSMENTS.filter(a => a.category === 'child').length})
              </button>

              <button 
                onClick={() => setFilterCategory('adult')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.813rem',
                  backgroundColor: filterCategory === 'adult' ? '#0F3832' : 'transparent',
                  color: filterCategory === 'adult' ? '#FFFFFF' : '#0E0E10',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Adult & Geriatric ({ASSESSMENTS.filter(a => a.category === 'adult').length})
              </button>
            </div>
          </div>

          {/* Cards Grid - FIX 2: Guaranteed immediate visibility on tab click */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              alignItems: 'stretch'
            }}
          >
            {filteredList.map((item) => (
              <div 
                key={item.id}
                className="minimal-card reveal-element is-visible"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: item.category === 'child' ? '4px solid #FF497C' : '4px solid #0F3832',
                  minHeight: '280px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <span 
                      className="badge-status"
                      style={{
                        backgroundColor: item.category === 'child' ? '#FFE4EC' : '#D1FAE5',
                        color: item.category === 'child' ? '#FF497C' : '#0F3832',
                        fontSize: '0.75rem'
                      }}
                    >
                      {item.badge}
                    </span>

                    <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {item.duration}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0E0E10', marginBottom: '10px', lineHeight: 1.3 }}>
                    {item.title}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '16px', lineHeight: 1.5 }}>
                    {item.description}
                  </p>

                  <div style={{ backgroundColor: '#FAFAFD', padding: '10px 14px', borderRadius: '12px', marginBottom: '18px', border: '1px solid #F1F1F5' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Wrench size={12} /> Standardized Batteries Used:
                    </div>
                    <div style={{ fontSize: '0.813rem', color: '#0E0E10', fontWeight: 600, lineHeight: 1.4 }}>
                      {item.tools}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    className="btn-black"
                    onClick={() => onSelectAssessment(item.title)}
                    style={{ flex: 1, padding: '10px 16px', fontSize: '0.813rem' }}
                  >
                    <span>Book Battery</span>
                  </button>

                  <button 
                    className="btn-outline-theme"
                    onClick={() => setActiveModalItem(item)}
                    style={{ padding: '10px 14px', fontSize: '0.813rem' }}
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Item Details Modal */}
      {activeModalItem && (
        <div className="modal-overlay" onClick={() => setActiveModalItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <button className="modal-close-btn" onClick={() => setActiveModalItem(null)}>
              <X size={20} />
            </button>

            <span 
              className="badge-status"
              style={{
                backgroundColor: activeModalItem.category === 'child' ? '#FFE4EC' : '#D1FAE5',
                color: activeModalItem.category === 'child' ? '#FF497C' : '#0F3832',
                marginBottom: '12px'
              }}
            >
              {activeModalItem.badge}
            </span>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0E0E10', marginBottom: '12px' }}>
              {activeModalItem.title}
            </h3>

            <p style={{ color: '#475569', fontSize: '0.938rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {activeModalItem.description}
            </p>

            <div style={{ backgroundColor: '#FAFAFD', padding: '16px', borderRadius: '16px', marginBottom: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontWeight: 800, color: '#0E0E10', fontSize: '0.875rem', marginBottom: '6px' }}>
                Standardized Evaluation Tools:
              </div>
              <div style={{ color: '#8A4FFF', fontWeight: 700, fontSize: '0.938rem' }}>
                {activeModalItem.tools}
              </div>
              <div style={{ marginTop: '10px', fontSize: '0.813rem', color: '#64748B' }}>
                Expected Duration: <strong>{activeModalItem.duration}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn-black"
                onClick={() => {
                  onSelectAssessment(activeModalItem.title);
                  setActiveModalItem(null);
                }}
                style={{ flex: 1 }}
              >
                <span>Book This Assessment</span>
              </button>

              <button 
                className="btn-outline-theme"
                onClick={() => setActiveModalItem(null)}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
