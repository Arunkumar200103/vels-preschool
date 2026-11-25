import React from 'react';

export function FlowerSvg({ color = '#ff6aa2', center = '#ffd426', size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="7" r="5" fill={color} />
      <circle cx="24.5" cy="13" r="5" fill={color} />
      <circle cx="21.5" cy="23" r="5" fill={color} />
      <circle cx="10.5" cy="23" r="5" fill={color} />
      <circle cx="7.5" cy="13" r="5" fill={color} />
      <circle cx="16" cy="15.5" r="4.5" fill={center} />
    </svg>
  );
}

export function TinyStarFlower({ color = '#ffc82b', center = '#ff7b29', size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="5.5" r="3.6" fill={color} />
      <circle cx="18" cy="9.8" r="3.6" fill={color} />
      <circle cx="15.8" cy="17" r="3.6" fill={color} />
      <circle cx="8.2" cy="17" r="3.6" fill={color} />
      <circle cx="6" cy="9.8" r="3.6" fill={color} />
      <circle cx="12" cy="11.8" r="3.2" fill={center} />
    </svg>
  );
}

export function ButterflySvg({ size = 40, variant = 'orange', className = '' }) {
  const wingOuter = variant === 'orange' ? '#ff6f00' : '#f4b400';
  const wingInner = variant === 'orange' ? '#ffca1a' : '#ffe45e';
  const body = '#183f96';
  const accent = variant === 'orange' ? '#9c4dff' : '#4a88ff';
  return (
    <svg width={size} height={size} viewBox="0 0 64 58" fill="none" className={className} aria-hidden="true">
      {/* Upper wings */}
      <path d="M30 27C23 11 7 6 5 17C3 26 17 32 30 30Z" fill={wingOuter} stroke={accent} strokeWidth="2.2" />
      <path d="M27 27C22 16 11 12 10 18C9 24 19 28 27 28Z" fill={wingInner} />
      <path d="M34 27C41 11 57 6 59 17C61 26 47 32 34 30Z" fill={wingOuter} stroke={accent} strokeWidth="2.2" />
      <path d="M37 27C42 16 53 12 54 18C55 24 45 28 37 28Z" fill={wingInner} />
      {/* Lower wings */}
      <path d="M30 31C20 33 11 40 15 47C19 53 28 45 31 33Z" fill={wingOuter} stroke={accent} strokeWidth="2" />
      <path d="M29 33C22 35 16 40 19 44C22 47 27 42 29 34Z" fill={wingInner} />
      <path d="M34 31C44 33 53 40 49 47C45 53 36 45 33 33Z" fill={wingOuter} stroke={accent} strokeWidth="2" />
      <path d="M35 33C42 35 48 40 45 44C42 47 37 42 35 34Z" fill={wingInner} />
      {/* Body & antennae */}
      <ellipse cx="32" cy="31" rx="2.8" ry="12" fill={body} />
      <circle cx="32" cy="18" r="3" fill={body} />
      <path d="M30 16C27 10 24 9 23 10" stroke={body} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M34 16C37 10 40 9 41 10" stroke={body} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HandUnderlineSvg() {
  return (
    <svg
      className="hero-underline-svg"
      viewBox="0 0 380 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 22C95 8 205 6 292 22C312 26 322 14 313 9C305 5 299 13 306 20C313 13 324 8 331 14C338 20 326 29 312 31C302 33 330 28 368 18"
        stroke="#f0207f"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeaderCloudWaveSvg() {
  return (
    <svg
      className="header-cloud-wave"
      viewBox="0 0 1440 46"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,18 C120,42 260,44 410,16 C560,-10 740,30 920,18 C1100,6 1280,36 1440,14 L1440,0 L0,0 Z"
        fill="#d7effe"
      />
      <path
        d="M0,20 C130,44 265,45 415,17 C565,-8 745,32 925,20 C1105,8 1285,38 1440,16"
        stroke="#ffffff"
        strokeWidth="5"
        fill="none"
      />
    </svg>
  );
}

export function HeroHillSvg() {
  return (
    <svg
      className="hero-hill-svg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Light lime background hill */}
      <path
        d="M0,48 Q260,8 560,52 T1120,38 T1440,26 L1440,120 L0,120 Z"
        fill="#a8e238"
      />
      {/* Rich foreground grass wave */}
      <path
        d="M0,66 Q320,32 690,72 T1440,42 L1440,120 L0,120 Z"
        fill="#82cf21"
      />
      {/* Bottom cloud-white organic edge separating Hero from About section */}
      <path
        d="M0,98 Q180,84 370,104 T760,96 T1150,106 T1440,92 L1440,120 L0,120 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function FooterTopWaveSvg() {
  return (
    <svg
      className="footer-top-wave"
      viewBox="0 0 1440 44"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,24 Q240,2 480,22 T960,18 T1440,12 L1440,44 L0,44 Z"
        fill="#0b4f96"
      />
    </svg>
  );
}

export function GardenTreeSvg({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 160 220" fill="none" aria-hidden="true">
      <path d="M74 130 L68 215 L92 215 L85 130 Z" fill="#8b5324" />
      <path d="M78 155 L50 125" stroke="#8b5324" strokeWidth="8" strokeLinecap="round" />
      <path d="M82 145 L112 118" stroke="#8b5324" strokeWidth="7" strokeLinecap="round" />
      <circle cx="80" cy="68" r="46" fill="#63bf21" />
      <circle cx="44" cy="96" r="34" fill="#77d12c" />
      <circle cx="116" cy="94" r="34" fill="#59b21a" />
      <circle cx="80" cy="108" r="38" fill="#84dc34" />
      <circle cx="56" cy="62" r="24" fill="#92e63f" />
      <circle cx="62" cy="88" r="5" fill="#ffd62b" />
      <circle cx="102" cy="76" r="5" fill="#ffd62b" />
      <circle cx="84" cy="48" r="4.5" fill="#ffd62b" />
    </svg>
  );
}

export function SmilingSunSvg({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 140 140" fill="none" aria-hidden="true">
      {/* 12 warm yellow sun rays */}
      {Array.from({ length: 12 }).map((_, i) => (
        <polygon
          key={i}
          points="70,6 79,28 61,28"
          fill="#ffd61a"
          transform={`rotate(${i * 30} 70 70)`}
        />
      ))}
      <circle cx="70" cy="70" r="42" fill="#ffe438" stroke="#ffd000" strokeWidth="3" />
      <circle cx="70" cy="70" r="36" fill="#ffeb56" />
      {/* Happy crescent eyes */}
      <path d="M51 64 Q56 54 61 64" stroke="#1c1f2e" strokeWidth="4.2" strokeLinecap="round" fill="none" />
      <path d="M79 64 Q84 54 89 64" stroke="#1c1f2e" strokeWidth="4.2" strokeLinecap="round" fill="none" />
      {/* Rosy cheeks */}
      <ellipse cx="47" cy="74" rx="7" ry="4.5" fill="#ff8f52" opacity="0.85" />
      <ellipse cx="93" cy="74" rx="7" ry="4.5" fill="#ff8f52" opacity="0.85" />
      {/* Big cheerful smile */}
      <path d="M57 76 Q70 93 83 76 Z" fill="#1c1f2e" />
      <path d="M62 82 Q70 89 78 82 Q70 79 62 82 Z" fill="#ff4d6d" />
    </svg>
  );
}
