import React, { useState, useRef, useEffect } from 'react';
import { Brain, Phone, Calendar, Menu, X, ShieldCheck, ChevronDown, ClipboardCheck, HeartPulse, Activity, Users, GraduationCap } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

export const Navbar = ({ activePage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const moreSections = [
    { key: 'assessments', label: 'Assessments', desc: 'Diagnostic & psychometric batteries', icon: <ClipboardCheck size={16} color="#FF497C" /> },
    { key: 'therapies', label: 'Therapies', desc: 'CBT, DBT, ERP & family care', icon: <HeartPulse size={16} color="#8A4FFF" /> },
    { key: 'rehab', label: 'Cognitive Rehabilitation', desc: 'Attention, memory & stroke rehab', icon: <Activity size={16} color="#10B981" /> },
    { key: 'support', label: 'Support Groups', desc: 'Facilitated peer circles', icon: <Users size={16} color="#FFB800" /> },
    { key: 'internship', label: 'Workshops & Internship', desc: 'Psychology student clinical training', icon: <GraduationCap size={16} color="#38BDF8" /> },
  ];

  const handleSelectSection = (key) => {
    onNavigate(key);
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1.5px solid #F1F1F5'
      }}
    >
      {/* Top Bar */}
      <div 
        style={{
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          fontSize: '0.781rem',
          padding: '6px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontWeight: 500, opacity: 0.9 }}>📍 Old Town, Bhubaneswar, Odisha</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <a href={`tel:${CLINIC_INFO.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#FF75A0', fontWeight: 700 }}>
            <Phone size={12} /> {CLINIC_INFO.phone}
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button 
            onClick={() => onNavigate('dashboard')} 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              backgroundColor: 'rgba(255,255,255,0.12)', 
              color: '#FFFFFF',
              padding: '3px 12px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}
          >
            <ShieldCheck size={12} /> Staff CRM Portal Access
          </button>
        </div>
      </div>

      {/* Main Modern Minimal Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', padding: '0 24px' }}>
        {/* Brand Logo */}
        <button onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              backgroundColor: '#FF497C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <Brain size={22} />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.04em', color: '#0E0E10' }}>
            MANODAYA
          </span>
        </button>

        {/* Minimal Desktop Links: Home | About Us | Contact Us | More ▾ */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', position: 'relative' }} className="desktop-only">
          <button
            onClick={() => onNavigate('home')}
            style={{
              fontWeight: activePage === 'home' ? 800 : 600,
              fontSize: '0.906rem',
              color: activePage === 'home' ? '#FF497C' : '#0E0E10',
              padding: '6px 2px',
              borderBottom: activePage === 'home' ? '2.5px solid #FF497C' : '2.5px solid transparent',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('about')}
            style={{
              fontWeight: activePage === 'about' ? 800 : 600,
              fontSize: '0.906rem',
              color: activePage === 'about' ? '#FF497C' : '#0E0E10',
              padding: '6px 2px',
              borderBottom: activePage === 'about' ? '2.5px solid #FF497C' : '2.5px solid transparent',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            About Us
          </button>

          <button
            onClick={() => onNavigate('contact')}
            style={{
              fontWeight: activePage === 'contact' ? 800 : 600,
              fontSize: '0.906rem',
              color: activePage === 'contact' ? '#FF497C' : '#0E0E10',
              padding: '6px 2px',
              borderBottom: activePage === 'contact' ? '2.5px solid #FF497C' : '2.5px solid transparent',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Contact Us
          </button>

          {/* Aesthetic "More" Dropdown Menu */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              onMouseEnter={() => setMoreDropdownOpen(true)}
              style={{
                fontWeight: ['assessments', 'therapies', 'rehab', 'support', 'internship'].includes(activePage) ? 800 : 600,
                fontSize: '0.906rem',
                color: ['assessments', 'therapies', 'rehab', 'support', 'internship'].includes(activePage) ? '#FF497C' : '#0E0E10',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span>More Services</span>
              <ChevronDown size={15} style={{ transform: moreDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
            </button>

            {/* Dropdown Card */}
            {moreDropdownOpen && (
              <div 
                onMouseLeave={() => setMoreDropdownOpen(false)}
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '-20px',
                  width: '290px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                  border: '1.5px solid #F1F1F5',
                  padding: '12px',
                  zIndex: 200,
                  animation: 'modalEnter 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', padding: '6px 12px 8px 12px', letterSpacing: '0.04em' }}>
                  Remaining Services
                </div>
                {moreSections.map((sec) => (
                  <button
                    key={sec.key}
                    onClick={() => handleSelectSection(sec.key)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      textAlign: 'left',
                      background: activePage === sec.key ? '#FAFAFD' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAFAFD'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePage === sec.key ? '#FAFAFD' : 'transparent'}
                  >
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', backgroundColor: '#FAFAFD', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E2E8F0', flexShrink: 0 }}>
                      {sec.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: activePage === sec.key ? '#FF497C' : '#0E0E10' }}>
                        {sec.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        {sec.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Button: "Book Now" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="btn-black" 
            onClick={() => onOpenBooking()}
            style={{
              fontSize: '0.875rem',
              fontWeight: 800,
              padding: '11px 24px',
              border: '1.5px solid #0E0E10',
              borderRadius: '9999px'
            }}
          >
            <Calendar size={16} />
            <span>Book Now</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} color="#0E0E10" /> : <Menu size={26} color="#0E0E10" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '2px solid #EDE9FE',
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} style={{ fontWeight: activePage === 'home' ? 800 : 600, color: activePage === 'home' ? '#FF497C' : '#0E0E10', textAlign: 'left', padding: '6px 0', background: 'none', border: 'none', fontSize: '0.938rem' }}>
            Home
          </button>
          <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} style={{ fontWeight: activePage === 'about' ? 800 : 600, color: activePage === 'about' ? '#FF497C' : '#0E0E10', textAlign: 'left', padding: '6px 0', background: 'none', border: 'none', fontSize: '0.938rem' }}>
            About Us
          </button>
          <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} style={{ fontWeight: activePage === 'contact' ? 800 : 600, color: activePage === 'contact' ? '#FF497C' : '#0E0E10', textAlign: 'left', padding: '6px 0', background: 'none', border: 'none', fontSize: '0.938rem' }}>
            Contact Us
          </button>

          <div style={{ borderTop: '1px solid #F1F1F5', paddingTop: '10px', marginTop: '4px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>
              More Sections
            </div>
            {moreSections.map((sec) => (
              <button
                key={sec.key}
                onClick={() => handleSelectSection(sec.key)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 0',
                  fontWeight: activePage === sec.key ? 800 : 600,
                  color: activePage === sec.key ? '#FF497C' : '#0E0E10',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'none',
                  border: 'none'
                }}
              >
                {sec.icon}
                <span>{sec.label}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }}
            style={{
              fontWeight: 800,
              color: '#8A4FFF',
              textAlign: 'left',
              padding: '10px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              borderTop: '1px solid #F1F1F5',
              marginTop: '6px',
              background: 'none',
              border: 'none',
              fontSize: '0.875rem'
            }}
          >
            <ShieldCheck size={16} /> Staff CRM Portal Access
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
