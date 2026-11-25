import React from 'react';
import { FlowerSvg, TinyStarFlower } from './Decor';

export default function Title({ children, color, variant = 'pink' }) {
  const isGold = variant === 'gold';
  return (
    <div className="ttl">
      <span className="ttl-flowers">
        <FlowerSvg
          color={isGold ? '#ffcf26' : '#ff6aa2'}
          center={isGold ? '#ff7a29' : '#ffd82e'}
          size={24}
        />
        <TinyStarFlower
          color={isGold ? '#ff9d2e' : '#ffd13b'}
          center={isGold ? '#ff5e7e' : '#ff6aa2'}
          size={14}
        />
      </span>
      <h2 style={{ color }}>{children}</h2>
      <span className="ttl-flowers">
        <FlowerSvg
          color={isGold ? '#ffcf26' : '#ff6aa2'}
          center={isGold ? '#ff7a29' : '#ffd82e'}
          size={22}
        />
      </span>
    </div>
  );
}
