import React, { useEffect } from 'react';
import Form from './Form';

export default function Modal({ defaultProgram, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="ov" onClick={onClose}>
      <div
        className="md"
        role="dialog"
        aria-modal="true"
        aria-label="Admission enquiry"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="x" type="button" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <h2>Admissions Open!</h2>
        <Form defaultProgram={defaultProgram} onDone={onClose} />
      </div>
    </div>
  );
}
