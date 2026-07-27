import React from 'react';
import { SafeSpaceIllustration } from '../components/EditorialIllustrations';
import { Compass, HeartHandshake, ShieldCheck, Award, Check } from 'lucide-react';

export const AboutPage = ({ onOpenBooking }) => {
  return (
    <div className="page-wrapper section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header reveal-element">
          <span className="section-badge" style={{ backgroundColor: '#EDE9FE', color: '#8A4FFF' }}>
            About MANODAYA
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>
            More Than Therapy, A Safe Space.
          </h1>
          <p className="section-subtitle">
            MANODAYA is a multidisciplinary psychological care centre in Bhubaneswar focused on assessment, psychotherapy, cognitive care and rehabilitation across different stages of life.
          </p>
        </div>

        {/* Hero Section Split */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
            marginBottom: '72px'
          }}
        >
          <div className="reveal-element">
            <SafeSpaceIllustration />
          </div>

          <div className="reveal-element">
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '20px', color: '#0E0E10' }}>
              Human, Professional & Scientific Care
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1.063rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Our center in Old Town, Bhubaneswar was founded on the principle that clinical assessment and therapy should feel like an empowering, collaborative conversation rather than a rigid medical procedure.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0E0E10', margin: 0 }}>98%</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Client & Family Satisfaction</p>
              </div>

              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#8A4FFF', margin: 0 }}>15+</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Standardized Test Batteries</p>
              </div>
            </div>

            <button className="btn-black" onClick={onOpenBooking}>
              Book a Consultation
            </button>
          </div>
        </div>

        {/* 3 Pillar Cards: Vision, Approach, Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          <div className="reference-card reveal-element">
            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#EDE9FE', color: '#8A4FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Compass size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ color: '#6B7280', fontSize: '0.938rem', lineHeight: 1.6 }}>
              To establish a compassionate, scientifically rigorous center of excellence for neuropsychological assessment and cognitive rehabilitation in Eastern India.
            </p>
          </div>

          <div className="reference-card reveal-element">
            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#FFD2DF', color: '#FF497C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <HeartHandshake size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>Our Approach</h3>
            <p style={{ color: '#6B7280', fontSize: '0.938rem', lineHeight: 1.6 }}>
              We integrate internationally recognized psychometric batteries (WISC, ADOS, MoCA, NIMHANS) with evidence-based psychotherapy tailored to each person.
            </p>
          </div>

          <div className="reference-card reveal-element">
            <div style={{ width: '48px', height: '48px', borderRadius: '16px', backgroundColor: '#D1FAE5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>Core Values</h3>
            <p style={{ color: '#6B7280', fontSize: '0.938rem', lineHeight: 1.6 }}>
              Strict ethical confidentiality, non-judgmental dignity, caregiver empowerment, and continuous clinical progress monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
