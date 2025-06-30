import React from 'react';
import './AboutPage.css';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="about-bg">
      <button className="about-back-btn-fixed" onClick={() => navigate('/')}>Back</button>
      <header className="about-header">
        <h1>About S.K TEXTILE</h1>
        <p className="about-tagline">Empowering Employees. Enabling Excellence.</p>
      </header>
      <section className="about-main">
        <div className="about-card template">
          <h2>Who We Are</h2>
          <p>
            S.K TEXTILE is a leading textile company dedicated to quality, innovation, and employee well-being.
            Our mission is to create a supportive environment where every team member can thrive and contribute to our shared success.
          </p>
        </div>
        <div className="about-card template">
          <h2>Our Vision</h2>
          <p>
            To be a benchmark in the textile industry by fostering a culture of trust, growth, and continuous improvement.
          </p>
        </div>
        <div className="about-card template">
          <h2>Why a Leave Management System?</h2>
          <p>
            We believe in work-life balance. Our leave management system ensures transparency, efficiency, and fairness for all employees and administrators.
          </p>
        </div>
        <div className="about-features template">
          <h2>Key Features</h2>
          <ul>
            <li>Easy leave application and approval process</li>
            <li>Real-time leave status tracking</li>
            <li>Role-based dashboards for employees and admins</li>
            <li>Profile management and secure login</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>
        <div className="about-extra template">
          <h2>Did You Know?</h2>
          <p>
            Our system is designed to be scalable and can be customized for future HR functionalities, such as performance reviews, announcements, and more!
          </p>
        </div>
      </section>
      <footer className="about-footer">
        © 2024 S.K TEXTILE &mdash; Crafted with care for our team.
      </footer>
    </div>
  );
}

export default AboutPage; 