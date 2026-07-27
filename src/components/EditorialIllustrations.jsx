import React from 'react';

// Image 5: Safe Space Illustration (3 Characters embracing a giant pink heart)
export const SafeSpaceIllustration = () => (
  <svg viewBox="0 0 500 400" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M250 110 C180 30 80 85 80 185 C80 285 250 365 250 365 C250 365 420 285 420 185 C420 85 320 30 250 110 Z" fill="#FFA6DF" className="pulse-heart" />
    <path d="M250 135 C195 65 110 110 110 195 C110 275 250 345 250 345 C250 345 390 275 390 195 C390 110 305 65 250 135 Z" fill="#FF84D4" />
    <g className="float-element-slow">
      <circle cx="250" cy="70" r="26" fill="#111111" />
      <circle cx="244" cy="70" r="13" fill="#FFC4B8" />
      <path d="M210 95 C210 95 240 85 290 95 V140 H210 Z" fill="#FF785A" />
      <path d="M190 100 C150 80 350 80 310 100" stroke="#FFC4B8" strokeWidth="20" strokeLinecap="round" />
    </g>
    <g className="float-element">
      <circle cx="120" cy="180" r="24" fill="#FFC4B8" />
      <path d="M90 155 C90 110 145 110 145 155 Z" fill="#703600" />
      <path d="M85 200 H145 V270 H85 Z" fill="#70E000" />
      <path d="M85 270 L75 320 H155 L145 270 Z" fill="#8A4FFF" />
      <path d="M130 220 C180 220 210 270 235 290" stroke="#FFC4B8" strokeWidth="20" strokeLinecap="round" />
      <rect x="95" y="320" width="20" height="50" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="3" />
      <rect x="90" y="360" width="36" height="18" rx="9" fill="#111111" />
    </g>
    <g className="float-element-slow">
      <circle cx="380" cy="190" r="24" fill="#FFC4B8" />
      <path d="M350 170 C350 120 410 120 410 170 Z" fill="#111111" />
      <path d="M350 210 H410 V270 H350 Z" fill="#8A4FFF" />
      <path d="M340 270 L300 360 H370 L380 270 Z" fill="#FFC107" />
      <path d="M360 230 C300 230 270 280 240 290" stroke="#FFC4B8" strokeWidth="20" strokeLinecap="round" />
      <rect x="290" y="340" width="45" height="40" rx="10" fill="#5D4037" stroke="#111111" strokeWidth="3" />
      <circle cx="320" cy="355" r="7" fill="#111111" />
    </g>
  </svg>
);

// Cute Smiling Brain Reading a Book
export const CuteSmilingBrainCard = () => (
  <svg viewBox="0 0 320 220" className="section-svg-graphic float-element" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="220" rx="24" fill="#FAFAFD" />
    <path d="M160 30 C120 30 90 50 90 90 C70 100 70 130 90 145 C100 170 130 175 160 175 C190 175 220 170 230 145 C250 130 250 100 230 90 C230 50 200 30 160 30 Z" fill="#FFA6DF" stroke="#111111" strokeWidth="4" />
    <circle cx="135" cy="95" r="16" fill="#FFFFFF" stroke="#111111" strokeWidth="3.5" />
    <circle cx="185" cy="95" r="16" fill="#FFFFFF" stroke="#111111" strokeWidth="3.5" />
    <line x1="151" y1="95" x2="169" y2="95" stroke="#111111" strokeWidth="3.5" />
    <circle cx="135" cy="95" r="5" fill="#111111" />
    <circle cx="185" cy="95" r="5" fill="#111111" />
    <path d="M148 122 Q160 132 172 122" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
    <ellipse cx="120" cy="115" rx="6" ry="4" fill="#FF497C" />
    <ellipse cx="200" cy="115" rx="6" ry="4" fill="#FF497C" />
    <path d="M110 155 Q160 145 160 175 Q160 145 210 155 V185 Q160 175 160 195 Q160 175 110 185 Z" fill="#8A4FFF" stroke="#111111" strokeWidth="3" />
  </svg>
);

// Floating Cute Clouds
export const FloatingCloudsDoodle = () => (
  <svg viewBox="0 0 300 120" className="section-svg-graphic float-element-slow" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 80 C30 80 20 65 30 50 C25 35 40 20 55 25 C65 10 90 10 100 25 C115 15 135 30 130 45 C145 55 135 80 115 80 Z" fill="#EDE9FE" stroke="#8A4FFF" strokeWidth="3" />
    <circle cx="65" cy="45" r="3" fill="#111111" />
    <circle cx="95" cy="45" r="3" fill="#111111" />
    <path d="M74 52 Q80 57 86 52" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M220 30 L226 42 L238 48 L226 54 L220 66 L214 54 L202 48 L214 42 Z" fill="#FFB800" className="pulse-heart" />
  </svg>
);

export const TherapyIllustration = () => (
  <HeadphonesListeningIllustration />
);

export const SupportIllustration = () => (
  <HoldingHandsBannerIllustration />
);

export const LiveVideoToolkitIllustration = () => (
  <svg viewBox="0 0 320 240" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" rx="24" fill="#FFFFFF" />
    <rect x="40" y="170" width="240" height="12" rx="6" fill="#703600" />
    <rect x="150" y="182" width="16" height="45" fill="#111111" />
    <path d="M50 140 C30 140 30 200 50 200 H75 V140 Z" fill="#FF75A0" />
    <path d="M270 140 C290 140 290 200 270 200 H245 V140 Z" fill="#00C853" />
    <g className="float-element">
      <circle cx="105" cy="100" r="22" fill="#111111" />
      <circle cx="100" cy="100" r="14" fill="#FFC4B8" />
      <path d="M85 125 H125 V170 H85 Z" fill="#00C853" />
    </g>
    <rect x="135" y="115" width="55" height="42" rx="6" fill="#8A4FFF" />
    <rect x="140" y="120" width="45" height="32" rx="4" fill="#FFD166" />
    <path d="M152 136 L170 128 V144 Z" fill="#111111" />
    <path d="M160 90 C155 85 150 88 150 93 C150 98 160 104 160 104 C160 104 170 98 170 93 C170 88 165 85 160 90 Z" fill="#FF497C" className="pulse-heart" />
    <g className="float-element-slow">
      <circle cx="215" cy="100" r="22" fill="#703600" />
      <circle cx="210" cy="100" r="14" fill="#FFC4B8" />
      <path d="M195 125 H235 V170 H195 Z" fill="#FF785A" />
      <path d="M205 170 H245 V200 H205 Z" fill="#FFC107" />
    </g>
  </svg>
);

export const MoodTrackingToolkitIllustration = () => (
  <svg viewBox="0 0 320 240" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" rx="24" fill="#FFFFFF" />
    <rect x="50" y="160" width="65" height="60" rx="8" fill="#FF785A" />
    <rect x="120" y="115" width="65" height="105" rx="8" fill="#FFC107" />
    <rect x="190" y="70" width="65" height="150" rx="8" fill="#FFA6DF" />
    <g className="float-element">
      <circle cx="140" cy="65" r="16" fill="#FFC4B8" />
      <path d="M125 50 C125 35 155 35 155 50 Z" fill="#703600" />
      <path d="M125 80 H160 V115 H125 Z" fill="#70E000" />
      <path d="M115 115 H155 V145 H115 Z" fill="#8A4FFF" />
      <rect x="85" y="145" width="35" height="16" rx="8" fill="#111111" />
      <rect x="125" y="125" width="35" height="16" rx="8" fill="#111111" />
    </g>
    <line x1="225" y1="70" x2="225" y2="25" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
    <path d="M225 25 L260 38 L225 51 Z" fill="#FFC107" />
    <circle cx="238" cy="38" r="2.5" fill="#111111" />
    <path d="M234 42 Q238 45 242 42" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const YogaToolkitIllustration = () => (
  <svg viewBox="0 0 320 240" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" rx="24" fill="#FFFFFF" />
    <ellipse cx="160" cy="190" rx="100" ry="14" fill="#8A4FFF" />
    <rect x="235" y="120" width="30" height="40" rx="4" fill="#703600" />
    <path d="M250 85 C230 95 230 120 250 120 C270 120 270 95 250 85 Z" fill="#00C853" />
    <path d="M230 100 C215 105 215 125 230 125 Z" fill="#70E000" />
    <g className="float-element-slow">
      <circle cx="160" cy="85" r="18" fill="#FFC4B8" />
      <path d="M140 70 C140 45 180 45 180 70 V90 H140 Z" fill="#111111" />
      <path d="M145 103 H175 V130 H145 Z" fill="#FFA6DF" />
      <path d="M130 130 C100 130 100 180 145 180 H215 C235 180 235 145 215 145 Z" fill="#70E000" stroke="#111111" strokeWidth="2" />
    </g>
  </svg>
);

export const HeadphonesListeningIllustration = () => (
  <svg viewBox="0 0 500 360" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="float-element">
      <circle cx="90" cy="80" r="36" fill="#FFC107" />
      <circle cx="90" cy="70" r="12" fill="#FFC4B8" />
      <path d="M70 70 C70 52 110 52 110 70 Z" fill="#111111" />
      <path d="M75 92 H105 V110 H75 Z" fill="#FF785A" />
    </g>
    <g className="float-element-slow">
      <circle cx="410" cy="80" r="36" fill="#8A4FFF" />
      <circle cx="410" cy="70" r="12" fill="#FFC4B8" />
      <path d="M390 70 C390 52 430 52 430 70 Z" fill="#111111" />
      <path d="M395 92 H425 V110 H395 Z" fill="#70E000" />
      <path d="M410 40 C405 35 400 38 400 43 C400 48 410 54 410 54 C410 54 420 48 420 43 C420 38 415 35 410 40 Z" fill="#FFA6DF" className="pulse-heart" />
    </g>
    <path d="M250 45 C242 36 230 42 230 50 C230 60 250 72 250 72 C250 72 270 60 270 50 C270 42 258 36 250 45 Z" fill="#FFA6DF" className="pulse-heart" />
    <path d="M170 210 C170 175 200 165 250 165 C300 165 330 175 330 210 V320 H170 Z" fill="#5D4037" />
    <g className="float-element">
      <circle cx="250" cy="115" r="28" fill="#FFC4B8" />
      <path d="M222 92 C222 62 278 62 278 92 Z" fill="#111111" />
      <path d="M212 115 A38 38 0 0 1 288 115" fill="none" stroke="#FF75A0" strokeWidth="7" strokeLinecap="round" />
      <rect x="206" y="105" width="12" height="24" rx="6" fill="#70E000" />
      <rect x="282" y="105" width="12" height="24" rx="6" fill="#70E000" />
      <path d="M200 150 H300 V240 H200 Z" fill="#8A4FFF" />
      <rect x="210" y="240" width="34" height="65" rx="12" fill="#FFC107" />
      <rect x="256" y="240" width="34" height="65" rx="12" fill="#FFC107" />
      <rect x="180" y="300" width="55" height="22" rx="10" fill="#5D4037" />
      <rect x="260" y="300" width="55" height="22" rx="10" fill="#5D4037" />
    </g>
  </svg>
);

// FIX: Curved Arch Testimonial Graphic (Balanced ViewBox & Centered Scaling)
export const ArchTestimonialGraphic = () => (
  <svg viewBox="0 0 700 180" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', maxWidth: '620px' }}>
    <path d="M70 150 A270 130 0 0 1 630 150" stroke="#FF75A0" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
    
    {/* Left Eyelash Blob */}
    <g transform="translate(45, 110)" className="float-element">
      <rect width="50" height="42" rx="16" fill="#8A4FFF" />
      <path d="M13 21 Q19 28 25 21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 21 Q33 28 39 21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Smiling Orange Brain */}
    <g transform="translate(145, 25)" className="float-element-slow">
      <path d="M24 35 C6 18 30 0 48 18 C66 0 90 18 72 35 C90 52 66 70 48 58 C30 70 6 52 24 35 Z" fill="#FF785A" />
      <circle cx="38" cy="34" r="3" fill="#111111" />
      <circle cx="58" cy="34" r="3" fill="#111111" />
      <circle cx="30" cy="40" r="3.5" fill="#FFC107" />
      <circle cx="66" cy="40" r="3.5" fill="#FFC107" />
      <path d="M42 41 Q48 46 54 41" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Center Handshake Thumbs Block */}
    <g transform="translate(310, 5)" className="pulse-heart">
      <rect width="36" height="40" rx="10" fill="#8A4FFF" />
      <rect x="40" y="0" width="36" height="40" rx="10" fill="#70E000" />
      <path d="M17 20 H29" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M48 20 H60" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
    </g>

    {/* Right Smiling Pink Heart */}
    <g transform="translate(480, 25)" className="float-element">
      <path d="M40 18 C23 0 0 18 0 40 C0 62 40 85 40 85 C40 85 80 62 80 40 C80 18 57 0 40 18 Z" fill="#FFA6DF" />
      <circle cx="30" cy="38" r="3" fill="#111111" />
      <circle cx="50" cy="38" r="3" fill="#111111" />
      <path d="M34 44 Q40 50 46 44" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Right Green Eyelash Blob */}
    <g transform="translate(600, 110)" className="float-element-slow">
      <rect width="50" height="42" rx="16" fill="#70E000" />
      <path d="M13 21 Q19 28 25 21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 21 Q33 28 39 21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// FIX: Holding Hands Banner (Proportional ViewBox & Smooth Alignment)
export const HoldingHandsBannerIllustration = () => (
  <svg viewBox="0 0 900 180" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', maxWidth: '800px' }}>
    <g transform="translate(70, 20)" className="float-element">
      <circle cx="45" cy="35" r="18" fill="#FFC4B8" />
      <path d="M25 20 C25 5 65 5 65 20 Z" fill="#111111" />
      <path d="M25 55 H65 V105 H25 Z" fill="#70E000" />
      <path d="M20 105 H70 V140 H20 Z" fill="#8A4FFF" />
    </g>

    <g transform="translate(230, 35)" className="float-element-slow">
      <circle cx="45" cy="35" r="18" fill="#FFC4B8" />
      <path d="M25 55 H65 V110 H25 Z" fill="#FFC107" />
      <path d="M20 110 H70 V150 H20 Z" fill="#111111" />
    </g>

    <g transform="translate(400, 45)" className="float-element">
      <circle cx="45" cy="30" r="18" fill="#FFC4B8" />
      <path d="M25 10 C25 -5 65 -5 65 10 Z" fill="#FF75A0" />
      <path d="M25 50 H65 V95 H25 Z" fill="#FF785A" />
      <path d="M20 95 L10 135 H80 L70 95 Z" fill="#FFC107" />
    </g>

    <g transform="translate(570, 35)" className="float-element-slow">
      <circle cx="45" cy="35" r="18" fill="#FFC4B8" />
      <path d="M25 55 H65 V110 H25 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
      <path d="M25 80 H65 V150 H25 Z" fill="#00C853" />
    </g>

    <g transform="translate(730, 20)" className="float-element">
      <circle cx="45" cy="35" r="18" fill="#FFC4B8" />
      <path d="M25 20 C25 5 65 5 65 20 Z" fill="#111111" />
      <path d="M25 55 H65 V105 H25 Z" fill="#FFA6DF" />
      <path d="M20 105 L10 140 H80 L70 105 Z" fill="#70E000" />
    </g>

    <path d="M125 90 Q275 130 445 130 T775 90" stroke="#FFC4B8" strokeWidth="16" strokeLinecap="round" fill="none" />
  </svg>
);

export const HeroIllustration = () => (
  <SafeSpaceIllustration />
);
