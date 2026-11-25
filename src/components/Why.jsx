import React from 'react';
import Img from './common/Img';
import Title from './common/Title';

const WHY_ITEMS = [
  ['shield', 'Safe &\nSecure Campus'],
  ['snow', 'Air-Conditioned\nClassrooms'],
  ['heart', 'Caring &\nExperienced Staff'],
  ['sprout', 'Play-Based\nLearning'],
  ['star', 'Low Fees\nHigh Value'],
];

export default function Why() {
  return (
    <div className="why-stripe">
      <section className="why-wrap" id="why-us">
        <div className="why">
          <div className="why-left">
            <Title color="#153d91" variant="gold">Why Choose Us?</Title>
            <div className="items">
              {WHY_ITEMS.map(([key, label]) => (
                <div key={label} className="it">
                  <div className="it-ico">
                    <Img name={key} alt={label.replace('\n', ' ')} style={{ background: 'transparent' }} />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="why-ph">
            <Img
              name="class"
              alt="Colorful air-conditioned preschool classroom with small tables, chairs and wall artwork"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
