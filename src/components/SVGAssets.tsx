import React from "react";

// Helper type for SVG components
export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// 1. The Tree with Falling Sheets ("De la feuille d'arbre à la feuille de papier")
export function TreeIllustration({ size = 200, color = "#c84330", strokeWidth = 2, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Trunk and master branches */}
      <path d="M100,190 C100,160 92,130 95,110 C98,90 110,80 120,70" />
      <path d="M100,190 C101,165 108,140 105,115 C102,95 88,85 80,75" />
      <path d="M98,140 C85,130 75,120 78,105 C80,95 90,92 92,85" />
      <path d="M102,135 C115,125 125,115 122,100 C120,90 110,88 108,82" />
      
      {/* Foliage outline - organic cloud-like hand-drawn strokes in red */}
      <path d="M60,110 C45,100 40,80 50,65 C40,50 55,40 68,45 C75,30 95,25 105,38 C115,25 135,30 142,45 C155,40 170,50 160,65 C170,80 165,100 150,110 C155,125 140,135 125,130 C115,142 95,142 85,130 C70,135 55,125 60,110 Z" strokeWidth={strokeWidth + 0.5} />
      
      {/* Falling sheets of paper */}
      {/* Sheet 1 */}
      <path d="M115,45 Q125,48 130,42 T140,46" fill="none" strokeWidth={strokeWidth} />
      <path d="M115,45 L118,35 L133,32 L130,42 Z" fill="none" />
      {/* Sheet 2 */}
      <path d="M70,60 Q80,58 85,63 T92,61" strokeWidth={strokeWidth} />
      <path d="M70,60 L73,50 L88,47 L85,58 Z" />
      {/* Sheet 3 */}
      <path d="M135,80 Q145,83 150,78 T158,82" strokeWidth={strokeWidth} />
      <path d="M135,80 L138,70 L153,67 L150,78 Z" />
      {/* Sheet 4 (low left) */}
      <path d="M50,120 Q58,118 63,123 T70,121" strokeWidth={strokeWidth} />
      <path d="M50,120 L53,110 L68,107 L65,118 Z" />
      {/* Sheet 5 (falling into stack) */}
      <path d="M140,125 Q148,131 155,127 T162,133" strokeWidth={strokeWidth} />
      <path d="M140,125 L143,115 L158,112 L155,123 Z" />

      {/* Stack of sheets at bottom left */}
      <path d="M40,165 L70,158 L85,168 L55,175 Z" />
      <path d="M42,168 L72,161 L87,171 L57,178 Z" />
      <path d="M44,171 L74,164 L89,174 L59,181 Z" strokeWidth={strokeWidth + 0.5} />
    </svg>
  );
}

// 2. The Château de Mariemont / Museum Building
export function MuseumIllustration({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 250 200" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Ground lines */}
      <path d="M10,180 L240,180" strokeWidth={strokeWidth + 0.5} />
      
      {/* Main Classical / Neo-Classical wing (middle right) */}
      <rect x="110" y="80" width="110" height="70" />
      {/* Roof of the main block */}
      <path d="M110,80 L130,50 L200,50 L220,80 Z" />
      {/* Chimneys */}
      <rect x="135" y="38" width="10" height="12" />
      <rect x="185" y="38" width="10" height="12" />
      <path d="M130,38 L150,38" />
      <path d="M180,38 L200,38" />
      
      {/* Left arched bridge / arcade */}
      <path d="M10,140 L110,140" />
      <path d="M10,140 L10,180" />
      <path d="M30,140 Q30,160 40,160 T50,140 L50,180" />
      <path d="M50,140 Q50,160 60,160 T70,140 L70,180" />
      <path d="M70,140 Q70,160 80,160 T90,140 L90,180" />
      <path d="M90,140 Q90,160 100,160 T110,140 L110,180" />
      
      {/* Main wing details, windows, doors (red sketch grid) */}
      <rect x="120" y="95" width="15" height="20" />
      <rect x="150" y="95" width="15" height="20" />
      <rect x="180" y="95" width="15" height="20" />
      
      <rect x="120" y="125" width="15" height="25" />
      <rect x="150" y="125" width="15" height="25" />
      <rect x="180" y="125" width="15" height="25" />

      {/* Middle tower with clock / triangular pediment */}
      <polygon points="145,80 165,55 185,80" />
      <circle cx="165" cy="70" r="6" />

      {/* Left pavilion (behind bridge) */}
      <rect x="85" y="70" width="30" height="70" />
      <path d="M85,70 L100,45 L115,70" />
      <rect x="93" y="85" width="14" height="20" />
      <rect x="93" y="115" width="14" height="20" />
    </svg>
  );
}

// 3. Portrait of Marie de Hongrie
export function MariePortrait({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 160 220" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Ornate Renaissance Frame in Red Lines */}
      <rect x="10" y="10" width="140" height="200" strokeWidth={strokeWidth + 1} />
      <rect x="14" y="14" width="132" height="192" strokeWidth={strokeWidth} strokeDasharray="3,3" />
      
      {/* Corner Ornaments */}
      <path d="M10,25 C25,25 25,10 25,10" />
      <path d="M150,25 C135,25 135,10 135,10" />
      <path d="M10,195 C25,195 25,210 25,210" />
      <path d="M150,195 C135,195 135,210 135,210" />
      
      {/* Queen Portrait Head Outline */}
      {/* Headgear/Hood typical of 16th century (Marie de Hongrie) */}
      <path d="M80,50 C62,50 55,65 52,85 L52,105 C55,120 62,122 80,122 C98,122 105,120 108,105 L108,85 C105,65 98,50 80,50 Z" strokeWidth={strokeWidth + 0.5} />
      {/* Inner veil line */}
      <path d="M58,70 C58,60 65,56 80,56 C95,56 102,60 102,70 L102,110 C80,120 80,120 58,110 Z" />
      
      {/* Face profile/details - elegant sketch */}
      <path d="M78,75 C78,78 79,79 83,79" /> {/* Eyes */}
      <path d="M80,82 C82,82 82,88 80,90 L77,90" /> {/* Nose */}
      <path d="M78,96 Q83,97 81,100" /> {/* Lips */}
      <path d="M70,105 C75,110 85,110 90,105" /> {/* Chin */}

      {/* Dress shoulders */}
      <path d="M52,112 C40,125 30,150 28,190" strokeWidth={strokeWidth + 0.5} />
      <path d="M108,112 C120,125 130,150 132,190" strokeWidth={strokeWidth + 0.5} />
      
      {/* Necklace and corset line */}
      <path d="M55,130 C65,145 95,145 105,130" />
      <path d="M80,143 L80,185" />
      
      {/* Hands crossed at chest/waist */}
      <path d="M60,180 C65,175 72,175 80,182 C88,175 95,175 100,180" />
      <path d="M65,185 C70,180 75,180 80,187 C85,180 90,180 95,185" />
    </svg>
  );
}

// 4. Portrait of Tim Lombet (glasses, beard, curly hair sketch)
export function TimPortrait({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Outer hand-sketched square frame */}
      <path d="M22,25 L138,21 L134,138 L25,135 Z" strokeWidth={strokeWidth - 0.2} />
      
      {/* Curly hair outline */}
      <path d="M55,52 C50,45 55,30 70,32 C75,28 90,28 95,34 C105,30 112,45 108,55 C115,62 110,75 105,78" strokeWidth={strokeWidth + 0.5} />
      
      {/* Head shape */}
      <path d="M48,65 C48,85 52,105 80,110 C108,105 112,85 112,65" />
      
      {/* Glasses (very expressive) */}
      <circle cx="68" cy="62" r="10" strokeWidth={strokeWidth + 0.5} />
      <circle cx="92" cy="62" r="10" strokeWidth={strokeWidth + 0.5} />
      <path d="M78,62 L82,62" strokeWidth={strokeWidth + 1} />
      <path d="M58,62 L51,60" />
      <path d="M102,62 L109,60" />

      {/* Nose & Mouth smiling */}
      <path d="M80,68 C80,72 82,75 80,78 C79,78 77,78 76,78" />
      <path d="M70,86 Q80,94 90,86" strokeWidth={strokeWidth + 1} />
      <path d="M72,85 L88,85" />
      
      {/* Beard & Mustache signature red sketch */}
      <path d="M62,80 C62,88 66,98 80,98 C94,98 98,88 98,80" fill="none" />
      <path d="M72,100 C74,106 86,106 88,100" fill="none" />
      <path d="M74,90 C80,94 80,94 86,90" /> {/* soulignée */}

      {/* Shoulders / Shirt */}
      <path d="M42,105 L25,120 L25,135" />
      <path d="M118,105 L135,120 L135,135" />
      <path d="M60,110 C70,118 90,118 100,110" />
      <path d="M68,115 L68,135" />
      <path d="M92,115 L92,135" />
    </svg>
  );
}

// 5. Justine Periaux (earrings, smiling, long hair)
export function JustinePortrait({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21,24 L139,22 L135,139 L24,134 Z" strokeWidth={strokeWidth - 0.2} />
      
      {/* Long hair */}
      <path d="M45,70 C40,40 50,30 80,30 C110,30 120,40 115,70 C112,85 125,115 118,130" strokeWidth={strokeWidth + 0.5} />
      <path d="M45,70 C48,85 35,115 42,130" strokeWidth={strokeWidth + 0.5} />
      
      {/* Face oval */}
      <path d="M52,62 C52,90 55,108 80,108 C105,108 108,90 108,62" />

      {/* Eye lines & eyebrows */}
      <path d="M60,56 C65,54 70,55 70,58" />
      <path d="M90,56 C95,54 100,55 100,58" />
      <circle cx="65" cy="62" r="2" fill={color} />
      <circle cx="95" cy="62" r="2" fill={color} />

      {/* Nose and tiny mouth whistling/smiling (whistling is mentioned in intro!) */}
      <path d="M80,65 L80,78 Q80,80 83,80" />
      {/* Whistling/cute round dynamic mouth */}
      <circle cx="80" cy="88" r="4" strokeWidth={strokeWidth + 0.5} />

      {/* Giant Round Earrings (Justine's signature!) */}
      <circle cx="48" cy="80" r="7" strokeWidth={strokeWidth + 0.5} />
      <circle cx="112" cy="80" r="7" strokeWidth={strokeWidth + 0.5} />

      {/* Neck & Shoulders */}
      <path d="M65,108 L65,125" />
      <path d="M95,108 L95,125" />
      <path d="M52,120 C40,125 32,135 30,140" />
      <path d="M108,120 C120,125 128,135 130,140" />
    </svg>
  );
}

// 6. Jean-Sébastien Balzat (collared shirt, smiling, short hair)
export function JSPortrait({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23,22 L137,25 L133,137 L25,135 Z" strokeWidth={strokeWidth - 0.2} />
      
      {/* Short clean hair */}
      <path d="M52,48 C48,42 60,30 80,32 C100,30 112,42 108,48 C108,52 105,52 105,55" strokeWidth={strokeWidth + 0.5} />
      
      {/* Face profile */}
      <path d="M52,50 C52,75 56,102 80,102 C104,102 108,75 108,50" />
      
      {/* Eyes and Eyebrows */}
      <path d="M60,50 L70,48" />
      <path d="M90,50 L100,48" />
      <path d="M62,56 C65,58 68,58 70,56" />
      <path d="M90,56 C92,58 95,58 98,56" />
      
      {/* Nose and a warm, satisfied smile */}
      <path d="M80,58 L80,72 L83,72" strokeWidth={strokeWidth} />
      <path d="M66,80 Q80,90 94,80" strokeWidth={strokeWidth + 1} />
      
      {/* Neck and shirt collar */}
      <path d="M65,102 L65,115" />
      <path d="M95,102 L95,115" />
      {/* V-Neck Sweater or Collar code */}
      <path d="M50,118 L80,132 L110,118" strokeWidth={strokeWidth + 0.5} />
      <path d="M80,132 L80,145" />
      <path d="M50,118 L30,135 L30,145" />
      <path d="M110,118 L130,135 L130,145" />
    </svg>
  );
}

// 7. Fantine Lequeux (long hair, signature high scarf)
export function FantinePortrait({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22,23 L138,25 L134,136 L26,134 Z" strokeWidth={strokeWidth - 0.2} />
      
      {/* Smooth medium weight hair */}
      <path d="M48,70 C40,45 52,32 80,32 C108,32 120,45 112,70 C108,82 118,105 115,120" strokeWidth={strokeWidth + 0.5} />
      <path d="M48,70 C48,82 40,105 42,120" strokeWidth={strokeWidth + 0.5} />
      
      {/* Face outline */}
      <path d="M54,65 C54,88 58,100 80,100 C102,100 106,88 106,65" />
      
      {/* Expressive gentle eyes and straight small nose */}
      <path d="M62,58 Q70,56 70,60" />
      <path d="M90,58 Q98,56 90,60" />
      <circle cx="68" cy="64" r="2" fill={color} />
      <circle cx="92" cy="64" r="2" fill={color} />
      <path d="M80,66 L80,78 L83,78" />

      {/* Shy gentle smile */}
      <path d="M72,85 Q80,90 88,85" strokeWidth={strokeWidth} />

      {/* Signature Thick Scarf enveloping the neck */}
      {/* Loops of the scarf */}
      <path d="M58,100 C50,110 55,125 80,125 C105,125 110,110 102,100 Z" strokeWidth={strokeWidth + 0.5} />
      <path d="M55,108 C65,116 95,116 105,108" />
      <path d="M60,115 C70,122 90,122 100,115" strokeWidth={strokeWidth - 0.2} />
      
      {/* Coat shoulders */}
      <path d="M48,122 C38,128 32,136 30,140" />
      <path d="M112,122 C122,128 128,136 130,140" />
    </svg>
  );
}

// 8. Andy Simon (full beard, no glasses, short hair)
export function AndyPortrait({ size = 200, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M24,24 L136,21 L138,137 L22,135 Z" strokeWidth={strokeWidth - 0.2} />
      
      {/* Stylized hair */}
      <path d="M58,45 C55,40 65,30 80,32 C95,30 105,40 102,45" strokeWidth={strokeWidth + 0.5} />
      
      {/* Face with full dark beard outline */}
      <path d="M54,55 C54,80 58,102 80,102 C102,102 106,80 106,55" />
      
      {/* Intense photographer eyes (focusing/looking slightly sideways) */}
      <path d="M62,54 Q70,52 70,56" />
      <path d="M90,54 Q98,52 90,56" />
      <path d="M63,58 C66,58 68,56 68,58" strokeWidth={strokeWidth + 0.5} />
      <path d="M91,58 C94,58 96,56 96,58" strokeWidth={strokeWidth + 0.5} />
      
      {/* Prominent nose & serious elegant moustache */}
      <path d="M80,56 L80,72 L84,72" />
      <path d="M66,74 Q80,76 94,74" strokeWidth={strokeWidth + 0.5} />
      
      {/* Full Beard sketch block structure */}
      <path d="M54,65 C54,82 58,98 80,98 C102,98 106,82 106,65 L102,65 Q98,82 80,82 Q62,82 58,65 Z" fill={color} opacity="0.15" />
      <path d="M54,65 C54,82 58,98 80,98 C102,98 106,82 106,65" strokeWidth={strokeWidth + 0.5} />

      {/* High-neck shirt resembling photographers style */}
      <path d="M62,102 C62,110 68,112 80,112 C92,112 98,110 98,102" />
      <path d="M66,108 L94,108" />
      
      {/* Shoulders */}
      <path d="M50,110 L35,125 L35,138" />
      <path d="M110,110 L125,125 L125,138" />
    </svg>
  );
}

// 9. The Wild Cat ("Bonjour" resting cat drawing)
export function WildCatIllustration({ size = 180, color = "#c84330", strokeWidth = 1.8, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 200 130" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Nested Sleeping/rested positions */}
      {/* Body Curve */}
      <path d="M95,33 C145,33 175,50 175,75 C175,95 145,108 95,108 C65,108 30,100 30,85 C30,75 55,55 95,33 Z" strokeWidth={strokeWidth + 0.5} />
      
      {/* Cat Head shape */}
      <path d="M85,45 C70,45 55,42 50,55 C48,60 55,75 70,78 C85,81 90,75 92,68 C94,60 95,45 85,45 Z" />
      
      {/* Ears */}
      <polygon points="52,50 35,45 42,56" />
      <polygon points="85,48 95,36 88,52" />
      
      {/* Little eyes, nose, and whiskers */}
      <circle cx="58" cy="65" r="2.2" fill={color} />
      <circle cx="76" cy="65" r="2.2" fill={color} />
      <path d="M66,70 L68,72 L70,70" /> {/* Nose */}
      <path d="M68,72 Q68,76 65,76" /> {/* Mouth L */}
      <path d="M68,72 Q68,76 71,76" /> {/* Mouth R */}
      
      {/* Whiskers */}
      <path d="M48,68 L30,68" />
      <path d="M48,72 L32,74" />
      <path d="M82,68 L100,60" />
      <path d="M82,72 L96,66" />
      
      {/* Tail wrapping around the body in red */}
      <path d="M30,85 C30,75 45,72 65,74 C115,78 135,100 150,100 C155,100 162,94 162,88 L162,80" />
    </svg>
  );
}

// 10. Watering can with Flowers and Birds on Branch
export function FlowersIllustration({ size = 200, color = "#c84330", strokeWidth = 1.6, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Watering Can (Bottom Left) */}
      <path d="M35,160 L45,123 L18,135 L12,152 Z" strokeWidth={strokeWidth + 0.5} />
      <rect x="35" y="125" width="22" height="38" rx="2" />
      <path d="M57,135 C68,138 72,135 78,130" /> {/* Spout */}
      <path d="M45,125 C45,115 52,115 52,125" strokeWidth={strokeWidth - 0.2} /> {/* Handle */}
      
      {/* Main vine/branch growing out of the watering can */}
      <path d="M46,128 Q75,120 90,80 T150,55 C165,55 174,75 168,90" strokeWidth={strokeWidth + 0.5} />
      <path d="M90,80 Q110,95 130,92 T155,110" />
      
      {/* Leaves */}
      <path d="M65,115 Q55,100 60,95 T70,110 Z" />
      <path d="M100,75 Q115,70 120,75 T105,82 Z" />
      <path d="M140,58 Q145,45 152,48 T145,62 Z" />
      
      {/* Wildflowers */}
      {/* Flower 1 */}
      <circle cx="100" cy="40" r="5" fill={color} />
      <path d="M100,30 Q105,32 100,35 Q95,32 100,30" />
      <path d="M100,45 Q105,48 100,45 Q95,48 100,45" />
      <path d="M90,40 Q85,45 92,40 Q85,35 90,40" />
      <path d="M110,40 Q115,45 108,40 Q115,35 110,40" />
      <path d="M100,40 L115,45" strokeWidth={strokeWidth - 0.5} /> {/* Stem */}

      {/* Cute Bird on Branch (Top Right) */}
      {/* Bird Body */}
      <path d="M138,50 C138,36 150,28 162,28 C174,28 180,38 180,50 C180,62 170,72 155,72 C145,72 138,62 138,50 Z" strokeWidth={strokeWidth + 0.5} fill="none" />
      <path d="M180,38 L190,36 L182,42 Z" fill={color} /> {/* Beak */}
      <path d="M152,72 C158,82 165,85 174,85" strokeWidth={strokeWidth + 0.5} /> {/* Tail feathers */}
      <circle cx="166" cy="38" r="2" fill={color} /> {/* Eye */}
      <path d="M145,52 Q155,56 160,50" /> {/* Wing outline */}
    </svg>
  );
}

// 11. 3D Cube signalétique (MRM Cube project)
export function CubeIllustration({ size = 150, color = "#c84330", strokeWidth = 1.8, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Center coordinate projection */}
      {/* Top Face */}
      <polygon points="60,20 95,35 60,50 25,35" strokeWidth={strokeWidth + 0.5} />
      
      {/* Bottom and sides */}
      <line x1="25" y1="35" x2="25" y2="85" strokeWidth={strokeWidth + 0.5} />
      <line x1="60" y1="50" x2="60" y2="100" strokeWidth={strokeWidth + 0.5} />
      <line x1="95" y1="35" x2="95" y2="85" strokeWidth={strokeWidth + 0.5} />
      
      {/* Bottom connection strokes */}
      <polygon points="25,85 60,100 95,85 60,70" strokeWidth={strokeWidth} />
      
      {/* Decorative text lines or layout on cube faces like drawings in screenshot */}
      <line x1="33" y1="50" x2="52" y2="58" strokeWidth={strokeWidth - 0.5} strokeDasharray="2,2" />
      <line x1="33" y1="58" x2="52" y2="66" strokeWidth={strokeWidth - 0.5} strokeDasharray="2,2" />
      <line x1="33" y1="66" x2="52" y2="74" strokeWidth={strokeWidth - 0.5} strokeDasharray="2,2" />

      <line x1="68" y1="58" x2="87" y2="50" strokeWidth={strokeWidth - 0.5} strokeDasharray="2,2" />
      <line x1="68" y1="66" x2="87" y2="58" strokeWidth={strokeWidth - 0.5} strokeDasharray="2,2" />
      <line x1="68" y1="74" x2="87" y2="66" strokeWidth={strokeWidth - 0.5} strokeDasharray="2,2" />
    </svg>
  );
}

// 12. Ticket, Booklet, Map, Sign (Journée Renaissance layout)
export function MapIllustration({ size = 180, color = "#c84330", strokeWidth = 1.5, ...props }: SVGProps) {
  return (
    <svg viewBox="0 0 200 160" width={size} height={size} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Background organic shape of domain map */}
      <path d="M25,60 C25,40 50,22 90,25 C130,28 175,20 180,55 C185,90 165,115 145,112 C125,110 110,128 85,125 C60,122 25,110 25,85 Z" strokeWidth={strokeWidth + 0.5} />
      
      {/* Walkways/pathways details of domain of Mariemont */}
      <path d="M25,75 Q60,78 85,65 T145,78" />
      <path d="M70,30 Q72,55 85,65 T110,123" />
      <path d="M125,28 Q135,55 110,75 C95,90 125,108 135,112" />
      
      {/* Little structures sketch on the map */}
      <rect x="52" y="85" width="12" height="12" />
      <polygon points="52,85 58,78 64,85" />
      
      {/* Entry Tickets flying */}
      <g transform="translate(68,15) rotate(-15)">
        <rect x="0" y="0" width="35" height="18" rx="2" strokeWidth={strokeWidth + 0.2} fill="white" />
        <circle cx="0" cy="9" r="3" fill="none" stroke={color} />
        <circle cx="35" cy="9" r="3" fill="none" stroke={color} />
        <line x1="6" y1="0" x2="6" y2="18" strokeDasharray="2,2" />
      </g>
      <g transform="translate(85,30) rotate(-5)">
        <rect x="0" y="0" width="35" height="18" rx="2" strokeWidth={strokeWidth + 0.2} fill="white" />
        <circle cx="0" cy="9" r="3" fill="none" stroke={color} />
        <circle cx="35" cy="9" r="3" fill="none" stroke={color} />
        <line x1="6" y1="0" x2="6" y2="18" strokeDasharray="2,2" />
      </g>
      
      {/* Booklet (Left) */}
      <g transform="translate(15,35) rotate(-10)">
        <rect x="0" y="0" width="22" height="32" rx="1" strokeWidth={strokeWidth + 0.5} fill="white" />
        <line x1="4" y1="8" x2="18" y2="8" strokeWidth={strokeWidth - 0.5} />
        <line x1="4" y1="16" x2="18" y2="16" strokeWidth={strokeWidth - 0.5} />
        <line x1="4" y1="24" x2="14" y2="24" strokeWidth={strokeWidth - 0.5} />
      </g>

      {/* Flag Signpost (Right) */}
      <g transform="translate(152,38)">
        <line x1="10" y1="0" x2="10" y2="50" strokeWidth={strokeWidth + 0.5} />
        <rect x="2" y="5" width="22" height="28" fill="white" strokeWidth={strokeWidth} />
        <line x1="6" y1="12" x2="20" y2="24" />
        <line x1="6" y1="24" x2="20" y2="12" strokeWidth={strokeWidth - 0.5} />
      </g>
    </svg>
  );
}

// 13. "1000 MERCIS" text title
export function ThankYouText({ color = "#c84330" }) {
  return (
    <div className="flex flex-col items-center justify-center font-brush text-5xl uppercase tracking-wider text-center bichromie-red space-y-2 select-none">
      <div className="text-7xl leading-none">1000</div>
      <div className="text-6xl leading-none">Mercis</div>
    </div>
  );
}

// Simple separator SVG line
export function DecorativeLine({ color = "#c84330", size = "100%", ...props }) {
  return (
    <svg viewBox="0 0 100 4" width={size} height={8} fill="none" {...props}>
      <path d="M0,2 L48,2 M52,2 L100,2" stroke={color} strokeWidth={1} />
      <circle cx="50" cy="2" r="1.5" fill={color} />
    </svg>
  );
}

// Arrow component for paging index transitions (hand-drawn style)
export function HandArrow({ color = "#c84330", size = 28, rotation = 0, className = "" }) {
  return (
    <svg viewBox="0 0 30 15" width={size} height={size / 2} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rotation}deg)` }} className={`${className} transition-transform duration-300`}>
      <path d="M2,7.5 L26,7.5" />
      <path d="M19,2 C19,2 25,6 27,7.5 C25,9 19,13 19,13" />
    </svg>
  );
}
