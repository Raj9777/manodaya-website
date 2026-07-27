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

// SPREAD & SEPARATED: Mindhaven Client Feedback Speech Arc & Avatars
export const ArchTestimonialGraphic = () => (
  <svg viewBox="0 0 820 210" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', maxWidth: '720px' }}>
    {/* Rainbow Gradient Arc */}
    <path d="M50 160 Q410 15 770 160" stroke="url(#archGradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" fill="none" />
    
    <defs>
      <linearGradient id="archGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FF497C" />
        <stop offset="50%" stopColor="#8A4FFF" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>

    {/* Avatar 1: Left Speech Bubble character (Spread to X: 40) */}
    <g transform="translate(40, 100)" className="float-element">
      <rect width="64" height="52" rx="18" fill="#8A4FFF" stroke="#111111" strokeWidth="3" />
      <path d="M22 28 Q32 38 42 28" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />
      <circle cx="44" cy="20" r="3.5" fill="#FFFFFF" />
      <path d="M12 50 L20 62 V50 Z" fill="#8A4FFF" />
    </g>

    {/* Avatar 2: Cute Brain with Headphones (Spread to X: 210) */}
    <g transform="translate(210, 30)" className="float-element-slow">
      <path d="M24 35 C6 18 30 0 48 18 C66 0 90 18 72 35 C90 52 66 70 48 58 C30 70 6 52 24 35 Z" fill="#FF785A" stroke="#111111" strokeWidth="3" />
      <circle cx="38" cy="34" r="3.5" fill="#111111" />
      <circle cx="58" cy="34" r="3.5" fill="#111111" />
      <ellipse cx="28" cy="40" rx="4" ry="3" fill="#FFC107" />
      <ellipse cx="68" cy="40" rx="4" ry="3" fill="#FFC107" />
      <path d="M42 42 Q48 48 54 42" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 30 C26 12 70 12 70 30" stroke="#8A4FFF" strokeWidth="4" fill="none" />
      <rect x="22" y="26" width="8" height="14" rx="4" fill="#8A4FFF" />
      <rect x="66" y="26" width="8" height="14" rx="4" fill="#8A4FFF" />
    </g>

    {/* Avatar 3: Center Glowing Heart Block (Apex Center X: 380) */}
    <g transform="translate(380, 10)" className="pulse-heart">
      <rect width="60" height="54" rx="16" fill="#FF497C" stroke="#111111" strokeWidth="3" />
      <path d="M30 20 C23 10 10 20 10 32 C10 44 30 52 30 52 C30 52 50 44 50 32 C50 20 37 10 30 20 Z" fill="#FFFFFF" />
    </g>

    {/* Avatar 4: Smiling Star (Spread to X: 550) */}
    <g transform="translate(550, 30)" className="float-element">
      <path d="M40 10 L50 28 L70 30 L55 45 L60 65 L40 54 L20 65 L25 45 L10 30 L30 28 Z" fill="#FFC107" stroke="#111111" strokeWidth="3" />
      <circle cx="33" cy="33" r="3" fill="#111111" />
      <circle cx="47" cy="33" r="3" fill="#111111" />
      <path d="M36 40 Q40 44 44 40" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Avatar 5: Right Green Eyelash Blob (Spread to X: 710) */}
    <g transform="translate(710, 100)" className="float-element-slow">
      <rect width="64" height="52" rx="18" fill="#10B981" stroke="#111111" strokeWidth="3" />
      <path d="M18 25 Q24 32 30 25" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M34 25 Q40 32 46 25" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M52 50 L44 62 V50 Z" fill="#10B981" />
    </g>
  </svg>
);

// SPREAD & SEPARATED: Mindhaven Connected Healing Ribbon & Community Hug Banner
export const HoldingHandsBannerIllustration = () => (
  <svg viewBox="0 0 960 200" className="section-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', maxWidth: '880px' }}>
    {/* Background Sparkles */}
    <path d="M130 35 L134 45 L144 49 L134 53 L130 63 L126 53 L116 49 L126 45 Z" fill="#FFB800" className="pulse-heart" />
    <path d="M480 25 L484 35 L494 39 L484 43 L480 53 L476 43 L466 39 L476 35 Z" fill="#FF497C" className="pulse-heart" />
    <path d="M830 35 L834 45 L844 49 L834 53 L830 63 L826 53 L816 49 L826 45 Z" fill="#8A4FFF" className="pulse-heart" />

    {/* 5 Distinct Vector Characters Spread Across 960px Width */}
    {/* Person 1: Deep Teal (X: 50) */}
    <g transform="translate(50, 45)" className="float-element">
      <circle cx="45" cy="30" r="20" fill="#FFC4B8" stroke="#111111" strokeWidth="3" />
      <path d="M25 15 C25 0 65 0 65 15 Z" fill="#111111" />
      <path d="M25 50 H65 V105 H25 Z" fill="#0F3832" stroke="#111111" strokeWidth="3" />
      <path d="M15 105 H75 V145 H15 Z" fill="#8A4FFF" stroke="#111111" strokeWidth="3" />
    </g>

    {/* Person 2: Mustard Yellow (X: 240) */}
    <g transform="translate(240, 55)" className="float-element-slow">
      <circle cx="45" cy="30" r="20" fill="#FFC4B8" stroke="#111111" strokeWidth="3" />
      <path d="M25 50 H65 V110 H25 Z" fill="#FFB800" stroke="#111111" strokeWidth="3" />
      <path d="M15 110 H75 V150 H15 Z" fill="#111111" stroke="#111111" strokeWidth="3" />
    </g>

    {/* Person 3: Coral Pink (Center X: 435) */}
    <g transform="translate(435, 65)" className="float-element">
      <circle cx="45" cy="25" r="20" fill="#FFC4B8" stroke="#111111" strokeWidth="3" />
      <path d="M25 8 C25 -8 65 -8 65 8 Z" fill="#FF497C" />
      <path d="M25 45 H65 V95 H25 Z" fill="#FF785A" stroke="#111111" strokeWidth="3" />
      <path d="M15 95 L5 135 H85 L75 95 Z" fill="#FFB800" stroke="#111111" strokeWidth="3" />
    </g>

    {/* Person 4: Lavender Purple (X: 630) */}
    <g transform="translate(630, 55)" className="float-element-slow">
      <circle cx="45" cy="30" r="20" fill="#FFC4B8" stroke="#111111" strokeWidth="3" />
      <path d="M25 50 H65 V110 H25 Z" fill="#EDE9FE" stroke="#111111" strokeWidth="3" />
      <path d="M25 75 H65 V150 H25 Z" fill="#10B981" stroke="#111111" strokeWidth="3" />
    </g>

    {/* Person 5: Mint Green (X: 820) */}
    <g transform="translate(820, 45)" className="float-element">
      <circle cx="45" cy="30" r="20" fill="#FFC4B8" stroke="#111111" strokeWidth="3" />
      <path d="M25 15 C25 0 65 0 65 15 Z" fill="#111111" />
      <path d="M25 50 H65 V105 H25 Z" fill="#FFA6DF" stroke="#111111" strokeWidth="3" />
      <path d="M15 105 L5 145 H85 L75 105 Z" fill="#10B981" stroke="#111111" strokeWidth="3" />
    </g>

    {/* Connected Ribbon Spanning Gracefully Across All 5 Characters */}
    <path d="M95 100 Q480 150 865 100" stroke="#FF497C" strokeWidth="18" strokeLinecap="round" fill="none" />
    <path d="M95 100 Q480 150 865 100" stroke="#FFB800" strokeWidth="6" strokeLinecap="round" fill="none" strokeDasharray="12 12" />
  </svg>
);

export const HeroIllustration = () => (
  <SafeSpaceIllustration />
);
