import React from 'react';

/**
 * MANODAYA Official Vector Logo
 * Recreated from client reference image:
 * Minimal side-profile head outline, inner rising sun with rays & wave, and botanical leaf branch on left.
 * Transparent background (outline only).
 */
export const ManodayaLogoSVG = ({ size = 42, color = '#6B8E4E', sunColor = '#E0A96D', className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* 1. Rising Sun & Sunbeams inside Mind */}
      <g>
        {/* Soft Golden Sun Semi-Circle */}
        <path d="M78 85 A22 22 0 0 1 122 85 Z" fill={sunColor} opacity="0.9" />
        
        {/* Wave Line beneath Sun */}
        <path d="M68 86 Q95 72 125 90 T158 84" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Radiating Sunbeam Rays */}
        <line x1="100" y1="58" x2="100" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="86" y1="62" x2="78" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="114" y1="62" x2="122" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="74" y1="72" x2="63" y2="64" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="126" y1="72" x2="137" y2="64" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="68" y1="84" x2="56" y2="80" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="132" y1="84" x2="144" y2="80" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 2. Side Profile Head Silhouette Outline */}
      <path 
        d="M58 85 C58 35 100 24 135 45 C154 57 165 76 157 95 C154 102 153 107 157 110 C162 113 158 119 154 122 C157 124 156 128 152 130 C148 132 146 138 135 142 C120 148 108 175 138 185 M138 185 C108 185 88 170 72 152" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />

      {/* 3. Left Botanical Leaf Branch with Stem & 4 Leaves */}
      <g>
        {/* Curving Stem */}
        <path d="M72 152 C60 135 50 110 58 85" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
        
        {/* Top Leaf */}
        <path d="M58 85 C52 70 65 60 70 75 C65 82 58 85 58 85 Z" fill={color} />
        
        {/* Upper Left Leaf */}
        <path d="M55 98 C36 90 35 106 48 110 C54 105 55 98 55 98 Z" fill={color} />
        
        {/* Middle Right Leaf */}
        <path d="M60 115 C75 105 78 122 66 125 C62 120 60 115 60 115 Z" fill={color} />

        {/* Lower Left Leaf */}
        <path d="M64 130 C45 125 42 142 58 144 C62 138 64 130 64 130 Z" fill={color} />
      </g>
    </svg>
  );
};

export default ManodayaLogoSVG;
