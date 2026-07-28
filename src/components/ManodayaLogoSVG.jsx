import React from 'react';

/**
 * MANODAYA Official Brand Logo Component
 * Renders the high-resolution transparent background brand logo PNG at scalable dimensions.
 */
export const ManodayaLogoSVG = ({ size = 84, className = '', style = {} }) => {
  return (
    <img 
      src="/images/manodaya_official_logo.png" 
      alt="MANODAYA Official Logo"
      style={{
        height: typeof size === 'number' ? `${size}px` : size,
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
        transition: 'transform 0.2s ease',
        ...style
      }}
      className={className}
    />
  );
};

export default ManodayaLogoSVG;
