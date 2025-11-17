import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    const newErrors = {};
    const firstName = formData.firstName.replace(/[^A-Za-z]/g, '').trim();
    const lastName = formData.lastName.replace(/[^A-Za-z]/g, '').trim();
    const emailValue = formData.email.trim();
    const commentValue = formData.comment.trim();

    // First Name
    if (firstName === '') {
      newErrors.firstName = 'First name is required';
    } else if (firstName.length < 2) {
      newErrors.firstName = 'Name must be at least 2 characters';
    } else if (firstName.length > 20) {
      newErrors.firstName = 'Name exceeds character limit of 20';
    }

    // Last Name
    if (lastName === '') {
      newErrors.lastName = 'Last name is required';
    } else if (lastName.length < 2) {
      newErrors.lastName = 'Name must be at least 2 characters';
    } else if (lastName.length > 20) {
      newErrors.lastName = 'Name exceeds character limit of 20';
    }

    // Email
    if (emailValue === '') {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(emailValue)) {
      newErrors.email = 'Provide a valid email';
    }

    // Comment
    if (commentValue === '') {
      newErrors.comment = 'Enter a comment';
    } else if (commentValue.length > 150) {
      newErrors.comment = 'Exceeds character limit of 150';
    } else if (commentValue.length < 10) {
      newErrors.comment = 'Comment must be more than 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateInputs()) {
      setSubmitStatus('Submitted!');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        comment: ''
      });
    }
  };

  return (
    <main className="hero">
      <section className="contact-section">
        <div id="contact-info-container">
          <div>
            <h2 id="contact-header">Contact US</h2>
          </div>

          <form id="contact-form" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="contact">
              <input
                className="first contact-input"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div className="error-text">{errors.firstName}</div>
            </div>

            {/* Last Name */}
            <div className="contact">
              <input
                className="last contact-input"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <div className="error-text">{errors.lastName}</div>
            </div>

            {/* Email */}
            <div className="contact">
              <input
                className="email contact-input"
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="error-text">{errors.email}</div>
            </div>

            {/* Comment */}
            <div className="contact">
              <textarea
                className="comment contact-input"
                name="comment"
                rows="5"
                cols="33"
                placeholder="Comment"
                value={formData.comment}
                onChange={handleChange}
              />
              <div className="error-text">{errors.comment}</div>
            </div>

            <button 
              id="sub-btn" 
              type="submit"
              style={submitStatus ? { backgroundColor: 'green' } : {}}
            >
              {submitStatus || 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;