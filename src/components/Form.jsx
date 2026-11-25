import React, { useState } from 'react';

export default function Form({ defaultProgram = 'Play Group', onDone }) {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    age: '',
    prog: defaultProgram || 'Play Group',
    msg: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (values.name.trim().length < 2) {
      newErrors.name = 'Please enter the parent’s name.';
    }
    if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s|-/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!values.age) {
      newErrors.age = 'Please choose your child’s age.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSent(true);
    }
  };

  if (sent) {
    const text = `Hello Buds n Blossoms, I am ${values.name} (phone ${values.phone}). I would like to enquire about ${values.prog} for my child aged ${values.age}. ${values.msg}`;
    const whatsappUrl = `https://wa.me/919042742798?text=${encodeURIComponent(text)}`;

    return (
      <div className="ok">
        <h3>Thank you, {values.name.split(' ')[0]}!</h3>
        <p>Your enquiry is ready. Send it on WhatsApp so the school can reply quickly.</p>
        <a
          className="btn g"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send on WhatsApp
        </a>
        {onDone && (
          <div style={{ marginTop: 12 }}>
            <button className="btn y" type="button" onClick={onDone}>
              Close
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Parent’s name
        <input
          value={values.name}
          onChange={handleChange('name')}
          autoComplete="name"
          placeholder="e.g. Ramesh / Deepa"
        />
        {errors.name && (
          <span className="err" role="alert">
            {errors.name}
          </span>
        )}
      </label>

      <label>
        Mobile number
        <input
          value={values.phone}
          onChange={handleChange('phone')}
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
        />
        {errors.phone && (
          <span className="err" role="alert">
            {errors.phone}
          </span>
        )}
      </label>

      <div className="f2">
        <label>
          Child’s age
          <select value={values.age} onChange={handleChange('age')}>
            <option value="">Select</option>
            {['2 years', '3 years', '4 years', '5 years', '6 years'].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.age && (
            <span className="err" role="alert">
              {errors.age}
            </span>
          )}
        </label>

        <label>
          Program
          <select value={values.prog} onChange={handleChange('prog')}>
            {['Play Group', 'Nursery', 'Day Care'].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Message (optional)
        <textarea
          rows={3}
          value={values.msg}
          onChange={handleChange('msg')}
          placeholder="Any specific question or timing preference..."
        />
      </label>

      <button className="btn" type="submit">
        Send Enquiry  ➜
      </button>
    </form>
  );
}
