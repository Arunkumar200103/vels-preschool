import React, { useState, useEffect } from 'react';
import Img from './common/Img';
import { FlowerSvg, TinyStarFlower, ButterflySvg, HeaderCloudWaveSvg } from './common/Decor';

export const NAV = [
  ['Home', 'home'],
  ['About Us', 'about'],
  ['Programs', 'programs'],
  ['Activities', 'activities'],
  ['Gallery', 'gallery'],
  ['Admission', 'admission'],
  ['Contact', 'contact'],
];

export const go = (id) => {
  const e = document.getElementById(id);
  if (e) e.scrollIntoView({ behavior: 'smooth' });
};

export default function Header({ act }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-hdr${scrolled ? ' sc' : ''}`}>
      <div className="hdr-inner">
        <a
          href="#home"
          className="hdr-brand-wrap"
          aria-label="Buds 'n' Blossoms Play School home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="hdr-logo-ring">
            <Img name="logo" alt="Buds 'n' Blossoms Logo — Your Baby in Safe Hands" />
          </div>

          <div className="hdr-title-stack">
            <div className="hdr-brand-row">
              <span className="hdr-brand-name">
                Buds ’n’ <b>Blossoms</b>
              </span>
              <span className="hdr-brand-flower-tr">
                <TinyStarFlower color="#ffcf26" center="#ff6b9e" size={16} />
                <TinyStarFlower color="#ff6ba2" center="#ffd426" size={12} />
              </span>
            </div>

            <div className="hdr-tag-row">
              <FlowerSvg color="#ff9d42" center="#ffeb4a" size={20} />
              <span className="hdr-play-tag">Play School</span>
              <TinyStarFlower color="#78c2ff" center="#ff6ba2" size={15} />
            </div>
          </div>
        </a>

        <button
          className="burger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
          <i />
        </button>

        <div className="hdr-nav-right">
          <nav
            className={`hdr-nav-pill${menuOpen ? ' open' : ''}`}
            aria-label="Main Navigation"
          >
            {NAV.map(([title, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`hdr-nav-link${act === id ? ' on' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  go(id);
                }}
              >
                {title}
              </a>
            ))}
          </nav>

          <span className="hdr-bfly" aria-hidden="true">
            <ButterflySvg size={44} variant="orange" />
          </span>
        </div>
      </div>

      <HeaderCloudWaveSvg />
    </header>
  );
}
