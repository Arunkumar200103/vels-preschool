import React from 'react';
import Img from './common/Img';
import { go } from './Header';
import {
  ButterflySvg,
  GardenTreeSvg,
  HandUnderlineSvg,
  HeroHillSvg,
  SmilingSunSvg,
} from './common/Decor';

export default function Hero() {
  return (
    <section id="home" className="hero-wrap">
      {/* Subtle sky cloud backdrops matching screenshot */}
      <div className="hero-clouds" aria-hidden="true">
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
      </div>

      <div className="hero">
        <div className="hero-txt">
          <span className="hero-mini-bfly" aria-hidden="true">
            <ButterflySvg size={32} variant="yellow" />
          </span>

          <h1>
            <span>Little Steps,</span>
            <em>Beautiful Beginnings!</em>
          </h1>

          <p className="hero-script">Where little minds grow and dreams blossom.</p>

          <HandUnderlineSvg />

          <div className="hero-btn-wrap">
            <button type="button" className="btn hero-explore-btn" onClick={() => go('about')}>
              <span>Explore Our School</span>
              <span className="btn-arrow-circle" aria-hidden="true">➜</span>
            </button>
          </div>
        </div>

        <div className="hero-art-col">
          <SmilingSunSvg className="hero-sun-svg" />
          <GardenTreeSvg className="hero-right-tree-svg" />
          <Img
            name="hero"
            className="hero-children-img"
            alt="Four happy children smiling under a rainbow"
          />
        </div>
      </div>

      {/* Left corner colorful tree and garden flowers + rolling green hill transition */}
      <div className="hero-bottom-garden">
        <Img
          name="heroLeft"
          className="hero-left-flowers-img"
          alt=""
        />
        <HeroHillSvg />
      </div>
    </section>
  );
}
