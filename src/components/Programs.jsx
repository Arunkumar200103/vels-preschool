import React from 'react';
import Img from './common/Img';
import Title from './common/Title';
import { BG } from '../data/imageManifest';

const PROGS = [
  ['teddy', 'Play Group', '(2+ Years)', '#f7c547'],
  ['flower', 'Nursery', '(3+ Years)', '#8dd25f'],
  ['house', 'Day Care', '(2–6 Years)', '#b6a0ec'],
];

export default function Programs({ onEnq }) {
  return (
    <div className="progs" id="programs">
      <Title color="#f0207f" variant="pink">Our Little Programs</Title>
      <div className="cards">
        {PROGS.map(([key, title, age, border]) => (
          <div
            key={title}
            className="card"
            role="button"
            tabIndex={0}
            onClick={() => onEnq(title)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onEnq(title)}
            style={{ backgroundColor: BG[key], '--card-bd': border }}
          >
            <div className="card-inner-frame">
              <div className="card-art">
                <Img name={key} alt={title} style={{ background: 'transparent' }} />
              </div>
              <div className="card-txt">
                <h3>{title}</h3>
                <small>{age}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
