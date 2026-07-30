import React from 'react';
import { SafeSpaceIllustration, HeadphonesListeningIllustration } from '../components/EditorialIllustrations';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ClinicalTeamSection } from '../components/ClinicalTeamSection';
import { FlagshipProgramsSection } from '../components/FlagshipProgramsSection';
import { UpcomingWorkshopsSection } from '../components/UpcomingWorkshopsSection';
import { Calendar, Video, ArrowRight, CheckCircle2, Sparkles, Baby, HeartPulse, ClipboardCheck, Activity, GraduationCap } from 'lucide-react';

export const HomePage = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="home-page-container">
      {/* 1. Hero Section - Clean & Minimal */}
      <section style={{ paddingTop: '56px', paddingBottom: '72px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Headline */}
            <div>
              <div className="hero-animate-badge">
                <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
                  <Sparkles size={14} /> Lifespan Psychological Care
                </span>
              </div>

              <h1 
                className="hero-animate-title"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.08,
                  marginBottom: '20px',
                  letterSpacing: '-0.04em',
                  color: '#0E0E10'
                }}
              >
                Healing Mind – Empowering Lives
              </h1>

              <p 
                className="hero-animate-subtext"
                style={{
                  fontSize: '1.125rem',
                  color: '#6B7280',
                  marginBottom: '28px',
                  lineHeight: 1.6,
                  maxWidth: '560px'
                }}
              >
                MANODAYA offers psychological and neuropsychological assessments, evidence-based psychotherapy, cognitive rehabilitation and support across the lifespan.
              </p>

              {/* Bullets */}
              <div className="hero-animate-bullets" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <span className="badge-status" style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '8px 16px', fontSize: '0.875rem' }}>
                  ✓ Child, Adolescent, Adult & Geriatric Services
                </span>
                <span className="badge-status" style={{ backgroundColor: '#EDE9FE', color: '#7C3AED', padding: '8px 16px', fontSize: '0.875rem' }}>
                  ✓ Online & In-Person Consultations
                </span>
              </div>

              {/* Action Buttons */}
              <div className="hero-animate-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  className="btn-black" 
                  onClick={() => onOpenBooking('In-Person Consultation')} 
                  style={{ padding: '14px 28px', fontSize: '0.938rem', fontWeight: 800 }}
                >
                  <Calendar size={18} />
                  <span>Book In-Person Consultation</span>
                </button>

                <button 
                  className="btn-outline-theme" 
                  onClick={() => onOpenBooking('Online Tele-Health')} 
                  style={{ padding: '13px 26px', fontSize: '0.938rem', fontWeight: 800, border: '2px solid #0E0E10' }}
                >
                  <Video size={18} color="#FF497C" />
                  <span>Book Online Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Lifespan Progression Graphic (Home.png) - 100% Transparent & Interactive */}
            <div className="hero-animate-image" style={{ textAlign: 'center' }}>
              <img 
                src="/images/elements/Home.png" 
                alt="MANODAYA Lifespan Neuropsychological Care" 
                className="interactive-element-graphic"
                style={{ maxWidth: '580px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFD' }}>
        <div className="container">
          <div className="section-header reveal-element is-visible">
            <span className="section-badge">Our Clinical Offerings</span>
            <h2 className="section-title">Core Specialized Services</h2>
            <p className="section-subtitle">
              Comprehensive diagnostic assessments, evidence-based psychotherapy, neuro cognitive rehabilitation, and student training.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div className="reference-card reveal-element is-visible" style={{ textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#FFD2DF', color: '#FF497C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ClipboardCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>1. Assessments</h3>
              <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>
                ADHD, Autism, IQ, Learning Disability, Neuropsychological & Memory assessments.
              </p>
              <button onClick={() => onNavigate('assessments')} style={{ color: '#FF497C', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                <span>View All Assessments</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="reference-card reveal-element is-visible" style={{ textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#EDE9FE', color: '#8A4FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <HeartPulse size={26} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>2. Therapies</h3>
              <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>
                CBT, DBT, ACT, Mindfulness, Child & Adolescent Therapy, Couples & Family Therapy.
              </p>
              <button onClick={() => onNavigate('therapies')} style={{ color: '#8A4FFF', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                <span>Explore Therapies</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="reference-card reveal-element is-visible" style={{ textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#D1FAE5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Activity size={26} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>3. Cognitive Rehab</h3>
              <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>
                Attention, Memory, and Executive Function Training for ADHD, Stroke, and Dementia.
              </p>
              <button onClick={() => onNavigate('rehab')} style={{ color: '#10B981', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                <span>Explore Toolkit</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="reference-card reveal-element is-visible" style={{ textAlign: 'left' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <GraduationCap size={26} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>4. Support & Training</h3>
              <p style={{ fontSize: '0.938rem', color: '#6B7280', marginBottom: '20px' }}>
                Support Groups, Internships for Psychology Students, and Clinical Workshops.
              </p>
              <button onClick={() => onNavigate('internship')} style={{ color: '#D97706', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                <span>View Internships & Workshops</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW FEATURED FLAGSHIP PROGRAMS SECTION (MCMF Career & Cogmed Training) */}
      <FlagshipProgramsSection onOpenBooking={onOpenBooking} />

      {/* 4. Clinical Team Section */}
      <ClinicalTeamSection mode="short" onOpenBooking={onOpenBooking} />

      {/* 5. Child Care Spotlight */}
      <section className="section-padding" style={{ backgroundColor: '#FFF5F8', borderTop: '1px solid #FFE4EC', borderBottom: '1px solid #FFE4EC' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            <div className="reveal-element is-visible">
              <span className="section-badge" style={{ backgroundColor: '#FFD2DF', color: '#FF497C' }}>
                <Baby size={16} /> Pediatric & Adolescent Care Spotlight
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: '#0E0E10', marginBottom: '16px' }}>
                We Also Provide Specialized Care for Children & Adolescents
              </h2>
              <p style={{ fontSize: '1.063rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '28px' }}>
                In addition to adult care, MANODAYA features a dedicated pediatric neuro-developmental wing offering compassionate screening, learning disability interventions, and family guidance.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.938rem', fontWeight: 700, color: '#0E0E10' }}>
                  <CheckCircle2 size={18} color="#FF497C" /> ADHD & Attention Testing
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.938rem', fontWeight: 700, color: '#0E0E10' }}>
                  <CheckCircle2 size={18} color="#FF497C" /> Autism Screening (ADOS-2)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.938rem', fontWeight: 700, color: '#0E0E10' }}>
                  <CheckCircle2 size={18} color="#FF497C" /> Learning Disability (SLD)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.938rem', fontWeight: 700, color: '#0E0E10' }}>
                  <CheckCircle2 size={18} color="#FF497C" /> Parent Training (PMT)
                </div>
              </div>

              <button className="btn-pink" onClick={() => onNavigate('assessments')}>
                <span>Explore Child Services</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="reveal-element is-visible" style={{ textAlign: 'center' }}>
              <img 
                src="/images/elements/child_and_adolescents.png" 
                alt="MANODAYA Pediatric & Adolescent Care Spotlight" 
                className="interactive-element-graphic"
                style={{ maxWidth: '540px', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Full Interactive Client Feedback & Testimonials Section */}
      <TestimonialsSection currentMode="all" />

      {/* 7. Upcoming Clinical Workshops & Masterclasses (Live Sync from CRM Dashboard) */}
      <UpcomingWorkshopsSection onOpenBooking={onOpenBooking} />
    </div>
  );
};
