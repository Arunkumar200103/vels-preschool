import React from 'react';
import Img from './common/Img';
import { FooterTopWaveSvg } from './common/Decor';

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Buds n Blossoms Play School, East Pondy Road, Villupuram 605602'
  )}`;

  return (
    <footer id="footer" className="site-footer">
      <FooterTopWaveSvg />

      <div className="ft-bar">
        <div className="ft">
          {/* Col 1: School & Address */}
          <div className="ft-col ft-addr">
            <Img name="pin" alt="Location pin" className="ft-icon" />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <b>Buds ’n’ Blossoms Play School</b>
              <br />
              No. 362, East Pondy Road,
              <br />
              Villupuram – 605602
            </a>
          </div>

          {/* Col 2: Phone */}
          <div className="ft-col ft-phones">
            <Img name="phone" alt="Phone" className="ft-icon" />
            <div className="big">
              <a href="tel:+919042742798">9042742798</a>
              <br />
              <a href="tel:+918489803341">8489803341</a>
            </div>
          </div>

          {/* Col 3: Timings */}
          <div className="ft-col ft-hours">
            <Img name="clock" alt="Opening Hours" className="ft-icon" />
            <div>
              <b>Open : 8:45 AM – 7:00 PM</b>
              <br />
              (Mon – Sat)
            </div>
          </div>

          {/* Col 4: Social */}
          <div className="ft-col ft-social">
            <b>Follow Us</b>
            <div className="soc">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Img name="fb" alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Img name="ig" alt="Instagram" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Img name="yt" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final Illustrated Bottom Garden Meadow: "Your Baby in Safe Hands" */}
      <div className="foot-meadow">
        <Img
          name="foot"
          className="foot"
          alt="Your Baby in Safe Hands — illustrated garden meadow with flowers and butterflies"
        />
      </div>
    </footer>
  );
}
