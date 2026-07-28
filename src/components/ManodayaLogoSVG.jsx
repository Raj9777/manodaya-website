import React from 'react';

/**
 * MANODAYA Official Brand Logo Component
 * Uses the official transparent background brand PNG provided by client.
 */
export const ManodayaLogoSVG = ({ size = 48, className = '', style = {} }) => {
  return (
    <img 
      src="/images/manodaya_official_logo.png" 
      alt="MANODAYA Official Logo"
      style={{
        height: typeof size === 'number' ? `${size}px` : size,
        width: 'auto',
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: 'drop-shadow(0 2px 8px rgba(74, 93, 35, 0.12))',
        ...style
      }}
      className={className}
    />
  );
};

export default ManodayaLogoSVG;
