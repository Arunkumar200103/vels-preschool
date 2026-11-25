import React from 'react';
import Form from './Form';

/* ── Decorative SVG top divider ── */
function TopWave() {
  return (
    <div className="cmap-topwave" aria-hidden="true">
      <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0,45 C180,90 360,0 540,45 C720,90 900,0 1080,45 C1260,90 1380,20 1440,45 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

/* ── Decorative SVG bottom divider ── */
function BottomWave() {
  return (
    <div className="cmap-botwave" aria-hidden="true">
      <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0,45 C180,0 360,90 540,45 C720,0 900,90 1080,45 C1260,0 1380,70 1440,45 L1440,90 L0,90 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

/* ── Floating decoration dots ── */
function Dots() {
  return (
    <div className="cmap-dots" aria-hidden="true">
      <span className="cmap-dot cd1" />
      <span className="cmap-dot cd2" />
      <span className="cmap-dot cd3" />
      <span className="cmap-dot cd4" />
    </div>
  );
}

/* ── Single info row ── */
function InfoRow({ icon, label, children }) {
  return (
    <div className="cmap-info-row">
      <div className="cmap-info-iconbox">{icon}</div>
      <div>
        <div className="cmap-info-label">{label}</div>
        <div className="cmap-info-val">{children}</div>
      </div>
    </div>
  );
}

export default function ContactMapForm() {
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Buds+n+Blossoms+Play+School+No+362+East+Pondy+Road+Villupuram+605602';

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.6482034786624!2d79.49201261531954!3d11.939699191434456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53b9b1d6a2d08f%3A0x97d88a3f3b7ad0d8!2sVillupuram%2C%20Tamil%20Nadu%20605602!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  return (
    <section id="contact" className="cmap-section">
      <TopWave />
      <Dots />

      <div className="cmap-inner">

        {/* ── Section badge + heading ── */}
        <div className="cmap-head">
          <span className="cmap-badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="#f01d7c" opacity=".15"/>
              <circle cx="7" cy="7" r="4" fill="#f01d7c"/>
            </svg>
            Find &amp; Reach Us
          </span>
          <h2 className="cmap-h2">
            Come Visit&nbsp;<em>Buds&nbsp;'n'&nbsp;Blossoms</em>
          </h2>
          <p className="cmap-lead">
            Step into our vibrant classrooms, meet our caring teachers, and experience a school where every child blossoms.
          </p>
        </div>

        {/* ── Two‑column body ── */}
        <div className="cmap-body">

          {/* LEFT – map panel */}
          <div className="cmap-panel cmap-panel-map">

            {/* Map frame */}
            <div className="cmap-map-frame">
              <div className="cmap-map-badge">📍 We're here!</div>
              <iframe
                title="Buds n Blossoms Play School Location"
                src={mapEmbedUrl}
                className="cmap-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact info strip */}
            <div className="cmap-info-strip">
              <InfoRow icon="📌" label="Address">
                No. 362, East Pondy Road, Villupuram – 605602, Tamil Nadu
              </InfoRow>
              <InfoRow icon="📞" label="Call Us">
                <a href="tel:+919042742798">9042742798</a>
                &ensp;/&ensp;
                <a href="tel:+918489803341">8489803341</a>
              </InfoRow>
              <InfoRow icon="🕐" label="Hours">
                Mon – Sat &nbsp;·&nbsp; 8:45 AM – 7:00 PM
              </InfoRow>
              <InfoRow icon="💬" label="WhatsApp">
                <a
                  href="https://wa.me/919042742798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cmap-wa-link"
                >
                  Chat instantly on WhatsApp →
                </a>
              </InfoRow>
            </div>

            {/* Directions button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn cmap-dir-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>
          </div>

          {/* RIGHT – form panel */}
          <div className="cmap-panel cmap-panel-form">
            {/* Decorative top strip */}
            <div className="cmap-form-topbar">
              <span>✨</span>
              <span>Enquire Now — It's Free!</span>
              <span>✨</span>
            </div>

            <div className="cmap-form-body">
              <div className="cmap-form-icon-row">
                <span className="cmap-form-bigicon">💌</span>
                <div>
                  <h3 className="cmap-form-h3">Send Us a Message</h3>
                  <p className="cmap-form-hint">
                    We reply within 24 hours — usually much sooner!
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="cmap-form-divider">
                <span/>
                <span className="cmap-form-divider-text">Your Details</span>
                <span/>
              </div>

              <Form />
            </div>

            {/* Trust badges */}
            <div className="cmap-trust">
              <span className="cmap-trust-badge">🔒 100% Private</span>
              <span className="cmap-trust-badge">⚡ Fast Response</span>
              <span className="cmap-trust-badge">❤️ No Spam</span>
            </div>
          </div>

        </div>
      </div>

      <BottomWave />
    </section>
  );
}
