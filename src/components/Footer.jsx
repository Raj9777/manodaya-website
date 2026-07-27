import React from 'react';
import { Calendar, Send, ShieldCheck, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { HoldingHandsBannerIllustration } from './EditorialIllustrations';
import { ManodayaLogoSVG } from './ManodayaLogoSVG';
import { CLINIC_INFO } from '../data/content';

export const Footer = ({ currentMode, onOpenBooking, onOpenCrm }) => {
  return (
    <>
      {/* Pre-Footer Holding Hands Banner */}
      <section 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: '56px',
          paddingBottom: 0,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ marginBottom: '32px' }}>
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              color: 'var(--text-main)',
              marginBottom: '16px',
              letterSpacing: '-0.03em'
            }}
          >
            Your Mind Matters. Let's Heal, Together.
          </h2>

          <button className="btn-black" onClick={onOpenBooking} style={{ padding: '16px 36px', border: '2px solid #0E0E10' }}>
            <Calendar size={18} />
            <span>Book an Appointment</span>
          </button>
        </div>

        {/* 5 Characters Holding Hands Banner */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <HoldingHandsBannerIllustration />
        </div>
      </section>

      {/* Dark Footer (Deep Slate / Emerald Theme) */}
      <footer style={{ backgroundColor: '#0B201C', color: '#FFFFFF', paddingTop: '64px', paddingBottom: '36px' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '48px',
              marginBottom: '56px'
            }}
          >
            {/* Left: Brand Header & Newsletter CTA */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <ManodayaLogoSVG size={58} color="#FFD166" sunColor="#FFA6DF" />
                <span 
                  style={{ 
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
                    fontWeight: 950, 
                    color: '#FFFFFF', 
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD166 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  MANODAYA
                </span>
              </div>
              <h3 style={{ fontSize: '1.125rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 800 }}>
                Wellness tips, straight to your inbox
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '18px' }}>
                Practical advice and uplifting mental wellness guidance to help you keep moving forward.
              </p>

              <div style={{ display: 'flex', gap: '8px', maxWidth: '360px' }}>
                <input 
                  type="email"
                  placeholder="Enter your email address..."
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '9999px',
                    border: '1px solid #1E293B',
                    backgroundColor: '#1E293B',
                    color: '#FFFFFF',
                    fontSize: '0.875rem'
                  }}
                />
                <button 
                  className="btn-pink"
                  style={{ padding: '12px 20px', minWidth: 'auto' }}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            {/* Middle: Links */}
            <div>
              <h4 style={{ color: '#FFD166', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Navigation
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#CBD5E1' }}>
                <a href="#about">About Us</a>
                <a href="#assessments">Assessments</a>
                <a href="#therapies">Therapies</a>
                <a href="#rehab">Cognitive Rehabilitation</a>
                <a href="#support-groups">Support Groups</a>
                <a href="#internships">Internships & Workshops</a>
              </div>
            </div>

            {/* Right: Contact & Clinic Info */}
            <div>
              <h4 style={{ color: '#FFD166', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                MANODAYA Centre Info
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', color: '#CBD5E1' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={16} color="#FFD166" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Clinic Address: Old Town, Bhubaneswar, Odisha 751002</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color="#FFD166" />
                  <a href={`tel:${CLINIC_INFO.phone}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    Phone / WhatsApp: {CLINIC_INFO.phone}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color="#FFD166" />
                  <span>Email: {CLINIC_INFO.email}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Clock size={16} color="#FFD166" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{CLINIC_INFO.timings}</span>
                </div>
              </div>
            </div>

            {/* Staff Portal Link */}
            <div>
              <h4 style={{ color: '#FFD166', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Staff Portal
              </h4>
              <button 
                onClick={onOpenCrm}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFD166',
                  padding: '10px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.813rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255,209,102,0.3)',
                  cursor: 'pointer'
                }}
              >
                <ShieldCheck size={16} /> Staff CRM Portal Access
              </button>
            </div>
          </div>

          {/* ULTRA BOLD & MASSIVE BRAND TYPOGRAPHY FOR ALL SCREEN SIZES */}
          <div 
            style={{
              fontSize: 'clamp(4.5rem, 16vw, 13.5rem)',
              fontWeight: 950,
              color: 'rgba(255, 255, 255, 0.09)',
              lineHeight: 0.82,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              marginBottom: '36px',
              userSelect: 'none',
              textAlign: 'center',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            MANODAYA
          </div>

          {/* Bottom Copyright */}
          <div 
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '0.813rem',
              color: '#64748B'
            }}
          >
            <div>
              © {new Date().getFullYear()} MANODAYA – Advanced Neuropsychological Care. All rights reserved.
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>

        {/* Persistent Mobile CTAs */}
        <div 
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderTop: '2px solid #E2E8F0',
            padding: '10px 16px',
            display: 'none',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 90
          }}
          className="mobile-action-bar"
        >
          <a 
            href={`tel:${CLINIC_INFO.phone}`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#0F3832', fontSize: '0.75rem', fontWeight: 700 }}
          >
            <Phone size={20} color="#0F3832" />
            <span>Call</span>
          </a>

          <a 
            href="https://wa.me/919876543210?text=Hello%20MANODAYA,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#25D366', fontSize: '0.75rem', fontWeight: 700 }}
          >
            <MessageSquare size={20} color="#25D366" />
            <span>WhatsApp</span>
          </a>

          <button 
            onClick={onOpenBooking}
            style={{ 
              backgroundColor: '#0F3832', 
              color: '#FFFFFF', 
              padding: '8px 18px', 
              borderRadius: '9999px',
              fontSize: '0.813rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Calendar size={16} /> Book Appointment
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .mobile-action-bar { display: flex !important; }
          }
        `}</style>
      </footer>
    </>
  );
};
