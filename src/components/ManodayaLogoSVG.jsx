import React from 'react';

/**
 * MANODAYA Official Vector Logo
 * Exact vector reproduction of the client reference image:
 * Side-profile head silhouette, inner rising sun with rays & wave, and botanical branch with leaves.
 * Completely transparent background (outline only).
 */
export const ManodayaLogoSVG = ({ size = 48, color = '#4A5D23', sunColor = '#E0A353', className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 240 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'visible' }}
    >
      {/* 1. Rising Sun (Soft Warm Gold Semi-Circle) */}
      <path 
        d="M96 102 A25 25 0 0 1 146 102 Z" 
        fill={sunColor} 
        opacity="0.95" 
      />

      {/* 2. Gentle Flowing Wave beneath Sun */}
      <path 
        d="M84 104 Q116 88 148 108 T186 100" 
        stroke={color} 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* 3. Radiating Sunbeams (7 Sun Rays) */}
      <line x1="121" y1="72" x2="121" y2="52" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="106" y1="76" x2="96" y2="60" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="136" y1="76" x2="146" y2="60" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="92" y1="88" x2="78" y2="78" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="150" y1="88" x2="164" y2="78" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="86" y1="102" x2="72" y2="98" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="156" y1="102" x2="170" y2="98" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* 4. Top Circular Arch & Profile Head Silhouette */}
      {/* Top Head Circular Curve */}
      <path 
        d="M66 102 C64 45 110 24 152 48 C176 62 186 86 178 112" 
        stroke={color} 
        strokeWidth="3.8" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Face Contour Profile: Forehead, Nose, Lips, Chin, Jaw, Neck Arc */}
      <path 
        d="M178 112 C175 120 174 126 179 130 C185 134 180 142 174 145 C178 148 176 154 170 157 C164 160 162 168 148 174 C128 182 115 214 154 225 C118 225 94 206 75 184" 
        stroke={color} 
        strokeWidth="3.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />

      {/* 5. Left Botanical Branch (Stem + 4 Organic Leaf Shapes) */}
      {/* Main Curving Stem */}
      <path 
        d="M75 184 C62 162 50 132 66 102" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      
      {/* Top Leaf */}
      <path 
        d="M66 102 C60 84 76 72 82 90 C76 98 66 102 66 102 Z" 
        fill={color} 
        stroke={color}
        strokeWidth="1"
      />
      
      {/* Upper Left Leaf */}
      <path 
        d="M63 118 C40 108 38 128 54 133 C62 127 63 118 63 118 Z" 
        fill={color} 
        stroke={color}
        strokeWidth="1"
      />
      
      {/* Middle Right Leaf */}
      <path 
        d="M69 138 C87 126 91 146 76 150 C71 144 69 138 69 138 Z" 
        fill={color} 
        stroke={color}
        strokeWidth="1"
      />

      {/* Lower Left Leaf */}
      <path 
        d="M72 156 C48 150 45 170 65 173 C70 166 72 156 72 156 Z" 
        fill={color} 
        stroke={color}
        strokeWidth="1"
      />

      {/* Bottom Sweep Base Accent Curve */}
      <path 
        d="M72 188 Q118 228 170 212" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.8"
      />
    </svg>
  );
};

export default ManodayaLogoSVG;
