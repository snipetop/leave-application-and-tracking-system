import React, { useState } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="contact-bg">
      <header className="contact-header">
        <button className="contact-back-btn" onClick={() => navigate('/')}>Back</button>
        Contact Us
      </header>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-detail"><b>Address:</b> 123 Textile Ave, New York, USA</div>
          <div className="contact-detail"><b>Email:</b> info@sktextile.com</div>
          <div className="contact-detail"><b>Phone:</b> +1 234 567 890</div>
          <div className="contact-detail"><b>Hours:</b> Mon-Fri, 9am - 6pm</div>
        </div>
        <div className="contact-form-section">
          <h1 className="contact-title">Get in Touch</h1>
          {submitted ? (
            <div className="contact-success">Thank you for contacting us! We will get back to you soon.</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Message
                <textarea name="message" value={form.message} onChange={handleChange} required />
              </label>
              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
      <footer className="contact-footer">© 2024 S.K TEXTILE. All rights reserved.</footer>
    </div>
  );
}

export default ContactPage; 