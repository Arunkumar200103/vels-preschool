import React, { useEffect } from 'react';

export default function AboutModal({ onClose, onEnq }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const whatsappMsg = encodeURIComponent(
    'Hello Buds n Blossoms, I would like to know more about the school and admissions.'
  );

  return (
    <div className="ov" onClick={onClose}>
      <div
        className="md about-modal-card"
        role="dialog"
        aria-modal="true"
        aria-label="About Buds n Blossoms Play School"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="x" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        <h2>🌱 About Buds ’n’ Blossoms</h2>
        <div className="about-modal-sub">
          Where Little Minds Grow &amp; Dreams Blossom
        </div>

        <p className="about-modal-lead">
          Welcome to <strong>Buds ’n’ Blossoms Play School</strong>, Villupuram’s premier
          early learning centre. Established to provide a warm, motherly, and safe foundation
          for children aged 2 to 6 years, our school believes that early childhood should be
          filled with curiosity, affectionate guidance, and joyful discoveries.
        </p>

        <div className="about-feature-grid">
          <div className="about-feat-item">
            <strong>❄️ 100% AC &amp; Child-Safe Campus</strong>
            <p>
              Rounded furniture, dust-free sanitized playrooms, and 24/7 CCTV surveillance
              for complete peace of mind.
            </p>
          </div>
          <div className="about-feat-item">
            <strong>👩‍🏫 Loving Educators &amp; 1:8 Ratio</strong>
            <p>
              Trained, motherly female teachers offering personalized attention to build
              every child’s emotional security.
            </p>
          </div>
          <div className="about-feat-item">
            <strong>🧸 Play-Way &amp; Sensory Learning</strong>
            <p>
              Hands-on Montessori puzzles, early phonics readiness, storytelling, rhythm,
              and creative art activities.
            </p>
          </div>
          <div className="about-feat-item">
            <strong>🚌 Doorstep Escorted Transport</strong>
            <p>
              Punctual school van pickup and drop across Villupuram accompanied by a caring
              female attendant.
            </p>
          </div>
        </div>

        <div className="about-timing-box">
          <h4>🏫 Programs &amp; School Hours</h4>
          <p>
            • <strong>Play Group (2+ Years):</strong> 9:00 AM – 12:30 PM
          </p>
          <p>
            • <strong>Nursery (3+ Years):</strong> 9:00 AM – 1:00 PM
          </p>
          <p>
            • <strong>Extended Day Care (2–6 Years):</strong> 8:45 AM – 7:00 PM (Mon – Sat)
          </p>
          <p>
            • <strong>Campus Address:</strong> No. 362, East Pondy Road, Villupuram – 605602
          </p>
        </div>

        <div className="about-modal-actions">
          <a
            className="btn g"
            href={`https://wa.me/919042742798?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <a className="btn" href="tel:+919042742798">
            Call 9042742798
          </a>
          <button
            className="btn y"
            type="button"
            onClick={() => {
              onClose();
              if (onEnq) onEnq();
            }}
          >
            Book Campus Tour  ➜
          </button>
        </div>
      </div>
    </div>
  );
}
