import React, { useState, useEffect } from 'react';
import Header, { NAV } from './components/Header';
import Hero from './components/Hero';
import Garden from './components/Garden';
import Programs from './components/Programs';
import Why from './components/Why';
import Play from './components/Play';
import ContactMapForm from './components/ContactMapForm';
import Moments from './components/Moments';
import Footer from './components/Footer';
import Floaters from './components/Floaters';
import Modal from './components/Modal';
import AboutModal from './components/AboutModal';

import './styles.css';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState('Play Group');
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    NAV.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenEnquiry = (programName) => {
    if (typeof programName === 'string' && programName) {
      setDefaultProgram(programName);
    }
    setEnquiryOpen(true);
  };

  return (
    <div className="page">
      <Header act={activeSection} />
      <main>
        <Hero />
        <div className="row2-stripe">
          <div className="row2">
            <Garden onAboutOpen={() => setAboutOpen(true)} />
            <Programs onEnq={handleOpenEnquiry} />
          </div>
        </div>
        <Why />
        <Play />
        <ContactMapForm />
        <Moments onEnq={handleOpenEnquiry} />
      </main>
      <Footer />
      <Floaters />
      {enquiryOpen && (
        <Modal
          defaultProgram={defaultProgram}
          onClose={() => setEnquiryOpen(false)}
        />
      )}
      {aboutOpen && (
        <AboutModal
          onClose={() => setAboutOpen(false)}
          onEnq={() => handleOpenEnquiry('Play Group')}
        />
      )}
    </div>
  );
}
