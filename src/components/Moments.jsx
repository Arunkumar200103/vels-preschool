import React, { useState } from 'react';
import Img from './common/Img';
import Title from './common/Title';
import { ButterflySvg, FlowerSvg, GardenTreeSvg, TinyStarFlower } from './common/Decor';

const GALLERY_PHOTOS = [
  {
    key: 'gallery1',
    title: 'Building Blocks & Early Math',
    caption: 'Children collaborating with colorful interlocking blocks in our activity room.',
    tilt: '-3deg',
  },
  {
    key: 'gallery2',
    title: 'Cultural Music & Dance',
    caption: 'Joyful traditional & festive stage performances celebrating confidence.',
    tilt: '3.2deg',
  },
  {
    key: 'gallery3',
    title: 'Outdoor Garden Play',
    caption: 'Sunny outdoor playtime with friends under lush green shade.',
    tilt: '-2.2deg',
  },
  {
    key: 'gallery4',
    title: 'Classroom Celebrations',
    caption: 'Festive days and group circle celebrations filled with smiles.',
    tilt: '3deg',
  },
];

export default function Moments({ onEnq }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="moments-wrap" id="gallery">
      {/* Subtle meadow hill silhouettes rolling across the bottom of Moments & Admission */}
      <svg
        className="moments-hills-bg"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,78 Q240,22 540,76 T1120,44 T1440,30 L1440,160 L0,160 Z"
          fill="#c4ea6a"
        />
        <path
          d="M0,104 Q320,58 680,108 T1440,56 L1440,160 L0,160 Z"
          fill="#99d737"
        />
      </svg>

      <div className="moments">
        {/* Left: Happy Little Moments + 4 Tilted Polaroids */}
        <div className="moments-left">
          <div className="moments-hdr-wrap">
            <span className="moments-bfly b1" aria-hidden="true">
              <ButterflySvg size={22} variant="yellow" />
            </span>
            <span className="moments-bfly b2" aria-hidden="true">
              <ButterflySvg size={18} variant="orange" />
            </span>
            <Title color="#153d91" variant="gold">Happy Little Moments</Title>
          </div>

          <div className="polaroid-row">
            {GALLERY_PHOTOS.map((item, idx) => (
              <button
                key={item.key}
                type="button"
                className={`polaroid p-${idx + 1}`}
                style={{ '--tilt': item.tilt }}
                onClick={() => setLightbox(item)}
                title={`View ${item.title}`}
              >
                <div className="polaroid-inner">
                  <Img name={item.key} alt={item.title} style={{ background: '#fff' }} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Admissions Open! Wooden Signboard + Girl */}
        <div className="admission-col" id="admission">
          <GardenTreeSvg className="sign-bg-tree" />

          <div className="sign-assembly">
            {/* Top-right decorative flower & butterfly on wooden board */}
            <span className="sign-top-flower" aria-hidden="true">
              <FlowerSvg color="#ffdb3a" center="#ff7b29" size={30} />
            </span>
            <span className="sign-top-bfly" aria-hidden="true">
              <ButterflySvg size={30} variant="orange" />
            </span>

            {/* Wooden Posts */}
            <div className="sign-post left" aria-hidden="true" />
            <div className="sign-post right" aria-hidden="true" />

            {/* Wooden Golden Board */}
            <div className="sign-board">
              <div className="sign-text">
                <h2>Admissions Open!</h2>
                <p>
                  Give your little one
                  <br />a beautiful beginning.
                </p>
                <button
                  type="button"
                  className="btn sign-enquire-btn"
                  onClick={() => onEnq()}
                >
                  <span>Enquire Now</span>
                  <span aria-hidden="true">➜</span>
                </button>
              </div>
            </div>

            {/* Bottom garden flowers & leaves near board posts */}
            <div className="sign-bottom-flowers" aria-hidden="true">
              <FlowerSvg color="#ff85b3" center="#ffde3b" size={24} />
              <FlowerSvg color="#ff6f42" center="#ffde3b" size={20} />
              <FlowerSvg color="#ffffff" center="#ffbe1a" size={21} />
              <TinyStarFlower color="#ffcf26" center="#ff6f00" size={16} />
            </div>

            {/* Girl overlapping right edge of wooden board */}
            <Img
              name="girlClean"
              className="sign-girl"
              alt="Smiling schoolgirl with blue backpack pointing to Admissions Open"
            />
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="play-lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="play-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="play-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="play-lightbox-img-box">
              <Img name={lightbox.key} alt={lightbox.title} className="play-lightbox-img" />
            </div>
            <div className="play-lightbox-caption">
              <h3>{lightbox.title}</h3>
              <p>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
