import React, { useState, useEffect } from 'react';

export default function Floaters() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMsg = encodeURIComponent(
    'Hello Buds n Blossoms, I would like to know about admission.'
  );

  return (
    <div className="fab">
      {showTop && (
        <button className="up" aria-label="Back to top" onClick={scrollToTop}>
          ↑
        </button>
      )}
      <a
        className="wa"
        href={`https://wa.me/919042742798?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#fff"
            d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5 14.2c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-3.3-.8-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.400-1.100-2.700s.7-1.900.9-2.200c.2-.3.5-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.2.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.2.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z"
          />
        </svg>
      </a>
    </div>
  );
}
