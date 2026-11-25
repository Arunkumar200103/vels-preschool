// ============================================================
//  Buds 'n' Blossoms Play School — App-wide Constants & Data
// ============================================================

export const phone1 = '9042742798';
export const phone2 = '8489803341';
export const whatsappNumber = '919042742798';
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Buds+n+Blossoms+Play+School+Villupuram+No+362+East+Pondy+Road';

export function createWhatsappLink(text) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const defaultWhatsapp = createWhatsappLink(
  "Hello! I would like to enquire about Admissions at Buds 'n' Blossoms Play School, Villupuram."
);

// ----- Programs -----
export const programsData = {
  playgroup: {
    title: 'Play Group',
    age: '2+ Years',
    badgeTone: '#ff9800',
    icon: '🧸',
    bg: '#fff8e7',
    desc: "Our Play Group provides a tender, warm, and playful stepping stone into early learning. Through joyful sensory play, motor development games, music, and social exploration, children gain confidence and love coming to school.",
    highlights: [
      'Sensory play & fine motor coordination',
      'Language development through songs & rhymes',
      'Gentle social interaction with motherly guidance',
      'Child-safe non-toxic toys and vibrant activity areas',
    ],
    timing: '9:00 AM – 12:30 PM',
  },
  nursery: {
    title: 'Nursery',
    age: '3+ Years',
    badgeTone: '#e91e63',
    icon: '🌻',
    bg: '#eefcee',
    desc: 'Nursery nurtures curiosity, foundational literacy, and numeracy through playful discovery. Children develop creative thinking, communication, storytelling, and phonics readiness in an air-conditioned, cheerful setting.',
    highlights: [
      'Interactive phonics & early reading readiness',
      'Foundational math concepts through play objects',
      'Art, craft & creative self-expression',
      'Group activities, stage courage & confidence',
    ],
    timing: '9:00 AM – 1:00 PM',
  },
  daycare: {
    title: 'Day Care',
    age: '2–6 Years',
    badgeTone: '#9c27b0',
    icon: '🏠',
    bg: '#f6efff',
    desc: 'A loving home away from home for your child. Designed for working parents, our Day Care offers a hygienic, secure environment with supervised nap time, nutritious meals/snacks routine, indoor playtime, and attentive caregivers.',
    highlights: [
      'Safe, air-conditioned & hygienic nap rooms',
      'Dedicated & caring full-time female attendants',
      'Story time, puzzles & creative evening games',
      'Flexible extended hours for working parents',
    ],
    timing: '8:45 AM – 7:00 PM',
  },
};

// ----- Gallery -----
export const galleryImages = [
  {
    src: '/assets/gallery/gallery-1-blocks.png',
    title: 'Creative Block Play',
    desc: 'Children building imagination and problem-solving skills with educational blocks.',
  },
  {
    src: '/assets/gallery/gallery-2-dance.png',
    title: 'Cultural Celebrations & Dance',
    desc: 'Vibrant stage performances and festive cultural events celebrating joyful childhood.',
  },
  {
    src: '/assets/gallery/gallery-3-park.png',
    title: 'Outdoor Nature Exploration',
    desc: 'Healthy outdoor playtime, team sports, and playful friendship in lush greenery.',
  },
  {
    src: '/assets/gallery/gallery-4-celebration.png',
    title: 'Celebrations & Classroom Fun',
    desc: 'Birthday parties, theme days, and happy group learning in decorated classrooms.',
  },
];

// ----- Daily Routines -----
export const dailyRoutines = [
  { time: '8:45 AM – 9:15 AM',  title: 'Welcome & Morning Circle',         desc: 'Warm greetings, morning prayer, nursery rhymes & fun warm-up stretches.',           icon: '☀️' },
  { time: '9:15 AM – 10:30 AM', title: 'Montessori & Sensory Learning',     desc: 'Hands-on discovery with puzzle boards, alphabet blocks & concept toys.',              icon: '🧩' },
  { time: '10:30 AM – 11:00 AM',title: 'Healthy Snack & Hygiene Time',      desc: 'Nutritious snack break, hand-washing habits & table etiquette guidance.',             icon: '🍎' },
  { time: '11:00 AM – 12:00 PM',title: 'Creative Art, Music & Dance',       desc: 'Finger painting, playdough modeling, rhythm dance & musical instruments.',            icon: '🎨' },
  { time: '12:00 PM – 12:30 PM',title: 'Storytelling & Puppet Time',        desc: 'Engaging moral tales, picture book reading & vocabulary enrichment.',                  icon: '📖' },
  { time: '1:00 PM – 7:00 PM',  title: 'Day Care, Lunch & Rest Corner',     desc: 'Nutritious lunch, quiet afternoon nap in AC room & fun evening games.',               icon: '🌙' },
];

// ----- FAQ -----
export const faqData = [
  {
    q: 'What is the admission age criteria for different programs?',
    a: 'Play Group accepts children aged 2+ years. Nursery is for children aged 3+ years. Our Day Care is open for children aged 2 to 6 years with flexible half-day and full-day options.',
  },
  {
    q: 'What are the school and Day Care timings?',
    a: 'Regular play school hours are Monday through Saturday from 9:00 AM to 12:30 PM (Play Group) and 1:00 PM (Nursery). Our extended Day Care operates from 8:45 AM to 7:00 PM.',
  },
  {
    q: 'How does the school ensure child safety and hygiene?',
    a: 'We follow stringent child-safety protocols: 100% air-conditioned classrooms, rounded child-safe furniture, continuous CCTV monitoring, gated access, and attentive female caretakers with high hygiene standards.',
  },
  {
    q: 'What is the student-to-teacher ratio?',
    a: 'We maintain an optimal ratio of approximately 1:8, ensuring each child receives warm, personalized encouragement, emotional support, and developmental care.',
  },
  {
    q: 'Is transport facility available?',
    a: 'Yes, we provide safe school van pickup and drop services across prime residential areas of Villupuram, accompanied by a caring female helper.',
  },
];

// ----- Testimonials -----
export const parentTestimonials = [
  {
    name: "Mrs. Priya & Dr. Senthil",
    child: 'Parents of Kaviya (Nursery)',
    text: "Buds 'n' Blossoms has been a second home for Kaviya. In just three months, her vocabulary and confidence have blossomed amazingly. The teachers are so loving and patient!",
    rating: 5,
  },
  {
    name: 'Mr. Rajesh & Anitha',
    child: 'Parents of Aarav (Play Group)',
    text: 'We were nervous about putting our 2-year-old in play school, but the warm atmosphere and AC classrooms made Aarav feel so happy from day one. He runs to school with a smile!',
    rating: 5,
  },
  {
    name: 'Dr. Meenakshi V.',
    child: 'Mother of Dhanya (Day Care)',
    text: 'As a working doctor, the extended Day Care till 7:00 PM with supervised nap and nutritious snack routine has given me complete peace of mind. Truly "Your Baby in Safe Hands"!',
    rating: 5,
  },
];
