import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { ManodayaLogoSVG } from './ManodayaLogoSVG';

export const LoadingEntryPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Preparing safe clinical space...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 300);
          return 100;
        }

        const next = prev + 5;
        if (next === 30) setLoadingText('Loading standardized test batteries...');
        if (next === 65) setLoadingText('Initializing evidence-based care modules...');
        if (next === 90) setLoadingText('Welcome to MANODAYA Care.');
        return next;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FAFAFD',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      <div 
        style={{
          maxWidth: '460px',
          width: '100%',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          padding: '44px 36px',
          borderRadius: '32px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 20px 50px rgba(138, 79, 255, 0.08)'
        }}
      >
        {/* Official Manodaya Brand Logo & Floating Element Graphic */}
        <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <ManodayaLogoSVG size={140} className="float-element" />
          <img 
            src="/images/elements/Home.png" 
            alt="Loading Care" 
            className="interactive-element-graphic"
            style={{ maxWidth: '240px', width: '100%', height: 'auto' }}
          />
        </div>

        {/* Brand Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#EDE9FE', color: '#8A4FFF', padding: '4px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px' }}>
          <Sparkles size={12} /> Clinical Center Bhubaneswar
        </div>

        <p style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 600, marginBottom: '28px' }}>
          Advanced Neuropsychological & Cognitive Care
        </p>

        {/* Progress Bar */}
        <div style={{ marginBottom: '16px' }}>
          <div 
            style={{
              height: '10px',
              width: '100%',
              backgroundColor: '#EDE9FE',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div 
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #6B8E4E 0%, #8A4FFF 100%)',
                borderRadius: '9999px',
                transition: 'width 0.1s linear'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', fontSize: '0.813rem' }}>
            <span style={{ color: '#8A4FFF', fontWeight: 700 }}>{loadingText}</span>
            <span style={{ color: '#0E0E10', fontWeight: 900 }}>{progress}%</span>
          </div>
        </div>

        {/* Floating Heart Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', opacity: 0.8, marginTop: '16px' }}>
          <Heart size={16} fill="#FF497C" color="#FF497C" className="pulse-heart" />
          <Heart size={14} fill="#8A4FFF" color="#8A4FFF" className="pulse-heart" />
        </div>
      </div>
    </div>
  );
};
