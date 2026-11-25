import React from 'react';
import Img from './common/Img';
import { TinyStarFlower } from './common/Decor';

export default function Garden({ onAboutOpen }) {
  return (
    <div className="garden" id="about">
      <span className="garden-tiny-flower" aria-hidden="true">
        <TinyStarFlower color="#ffb8d0" center="#ffd62b" size={14} />
      </span>

      <div className="garden-text">
        <h2>A Garden of Learning</h2>
        <p>
          At <strong>Buds ’n’ Blossoms</strong>, we believe every child is a{' '}
          <strong>unique flower</strong>. Our caring environment, play-based learning and
          dedicated teachers help them grow with confidence and joy.
        </p>
        <button type="button" className="btn y garden-know-btn" onClick={onAboutOpen}>
          Know More <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="garden-art">
        <Img
          name="garden"
          alt="Little boy and girl reading an open storybook surrounded by butterflies and flowers"
        />
      </div>
    </div>
  );
}
