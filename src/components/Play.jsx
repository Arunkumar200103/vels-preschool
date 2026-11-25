import React, { useState } from 'react';
import Img from './common/Img';
import Title from './common/Title';

const ACTS = [
  {
    id: 'art',
    key: 'art',
    label: 'Art &\nCraft',
    title: 'Art & Craft',
    photo: '/assets/clean/art-craft-photo.jpg',
    desc: 'Hands-on drawing, watercolor painting, paper cutting, and craft creations that nurture fine motor skills and creativity.',
  },
  {
    id: 'puzzle',
    key: 'puzzle',
    label: 'Puzzle\nActivities',
    title: 'Puzzle Activities',
    photo: "https://images.pexels.com/photos/7334192/pexels-photo-7334192.jpeg",
    desc: 'Wooden shape sorters, picture puzzles, and matching games that boost focus, memory, and problem-solving.',
  },
  {
    id: 'music',
    key: 'music',
    label: 'Music &\nDance',
    title: 'Music & Dance',
    photo: 'https://images.pexels.com/photos/8422112/pexels-photo-8422112.jpeg',
    desc: 'Action rhymes, rhythm instruments, and joyful stage movements that build confidence and auditory coordination.',
  },
  {
    id: 'nature',
    key: 'nature',
    label: 'Nature\nExploration',
    title: 'Nature Exploration',
    photo: 'https://images.pexels.com/photos/8954826/pexels-photo-8954826.jpeg',
    desc: 'Supervised outdoor garden walks, plant care, sand play, and fresh-air physical fun.',
  },
  {
    id: 'story',
    key: 'story',
    label: 'Storytelling',
    title: 'Storytelling',
    photo: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpegS',
    desc: 'Animated picture-book circle time, phonics songs, and puppet shows that ignite imagination and listening.',
  },
  {
    id: 'blocks',
    key: 'blocks',
    label: 'Building\nBlocks',
    title: 'Building Blocks',
    photo: 'https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg',
    desc: 'Colorful interlocking blocks and team-building play for spatial awareness and social collaboration.',
  },
];

export default function Play() {
  const [modalAct, setModalAct] = useState(null);

  return (
    <div className="play-stripe">
      <section className="play-wrap" id="activities">
        <div className="play">
          <div className="pill">
            <Title color="#f0207f" variant="pink">Learning Through Play</Title>
            <div className="act">
              {ACTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="act-btn"
                  onClick={() => setModalAct(item)}
                  title={`View ${item.title} activity photo`}
                >
                  <div className="act-ico">
                    <Img name={item.key} alt={item.title} style={{ background: 'transparent' }} />
                  </div>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="play-ph"
            role="button"
            tabIndex={0}
            onClick={() => setModalAct(ACTS[0])}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setModalAct(ACTS[0])}
            title="Click to inspect Art & Craft activity photo"
          >
            <div className="play-cloud-frame">
              <Img
                name="kidsph"
                alt="Children creating colorful Art and Craft projects together"
                style={{ background: '#ffffff' }}
              />
            </div>
          </div>
        </div>

        {modalAct && (
          <div
            className="play-lightbox-backdrop"
            onClick={() => setModalAct(null)}
            role="dialog"
            aria-modal="true"
            aria-label={modalAct.title}
          >
            <div className="play-lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="play-lightbox-close"
                onClick={() => setModalAct(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="play-lightbox-img-box">
                <img src={modalAct.photo} alt={modalAct.title} className="play-lightbox-img" />
              </div>
              <div className="play-lightbox-caption">
                <h3>{modalAct.title}</h3>
                <p>{modalAct.desc}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
