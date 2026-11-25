import React from 'react';
import { IMG, BG } from '../../data/imageManifest';

export default function Img({ name, alt = '', className, style = {}, ...props }) {
  const src = IMG[name] || '';
  const bg = BG[name];
  const combinedStyle = bg ? { background: bg, ...style } : style;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={combinedStyle}
      {...props}
    />
  );
}
