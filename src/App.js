// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// --- NEW: Import the icons from the library ---
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import sponsor1 from './assets/sponsor1.png';
import sponsor2 from './assets/sponsor2.png';

import event1 from './assets/event1.png';
import event2 from './assets/event2.png';
import event3 from './assets/event3.png';
import event4 from './assets/event4.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section id="about" className="section">
        <h2 className="section-title">About Hack Heist</h2>
        <p className="section-content">
          We invite you to showcase your innovative project and compete for the top prize.
        </p>
      </section>

      <section id="who-are-we" className="section">
        <h2 className="section-title">Who Are We?</h2>
        <p className="section-content">
          The GFG KARE Student Chapter, proudly affiliated with GeeksforGeeks, is a vibrant community of tech enthusiasts and future innovators at Kalasalingam Academy of Research and Education.
          We organize workshops, coding competitions, hackathons, and guest lectures.
          Join us in our journey to push the boundaries of what's possible in the world of technology. 
          Know more about our initiations at <a href="https://linktr.ee/gfg_kare" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary-red)'}}>linktr.ee/gfg_kare</a>.
        </p>
      </section>
      
      <section id="register" className="section">
        <h2 className="section-title">Process of Registration</h2>
        <div className="section-content">
          <div className="registration-widgets-container">
            <div className="registration-widget">
              <svg className="widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"></path><path d="M16 14h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M6 18.5V6"></path>
              </svg>
              <h3 className="widget-title">Registration Fee</h3>
              <p className="widget-value">₹350</p>
              <span className="widget-subtitle">per team</span>
            </div>
            <div className="registration-widget">
              <svg className="widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="widget-title">Team Size</h3>
              <p className="widget-value">3-4</p>
              <span className="widget-subtitle">members</span>
            </div>
          </div>
          <a href="#" className="register-button" style={{marginTop: '40px', display: 'inline-block'}}>Register Your Team</a>
        </div>
      </section>
      
      <section id="prizes" className="section">
        <h2 className="section-title">Prizes</h2>
        <div className="prize-container">
          <div className="prize-card">
            <span className="prize-emoji">🥇</span>
            <h3>1st Place</h3>
            <p>₹5,000</p>
          </div>
          <div className="prize-card">
            <span className="prize-emoji">🥈</span>
            <h3>2nd Place</h3>
            <p>₹2,500</p>
          </div>
          <div className="prize-card">
            <span className="prize-emoji">🥉</span>
            <h3>3rd Place</h3>
            <p>₹1,500</p>
          </div>
        </div>
      </section>

      <section id="rules" className="section">
        <h2 className="section-title">Rules</h2>
        <ul className="section-content" style={{textAlign: 'left', listStylePosition: 'inside'}}>
          <li>Team of 3 - 4 people.</li>
          <li>The projects should strictly align with any of the given themes.</li>
          <li>No plagiarism.</li>
          <li>The registration fee of Rs. 350 (per team) should be paid to complete the registration. This fee covers the registration, mentorship, refreshments and the ticket for the offline presentation.</li>
        </ul>
      </section>

      <section id="past-events" className="section">
        <h2 className="section-title">OUR PAST EVENTS</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={event1} alt="Past Event 1" className="gallery-image" />
            <h4 className="gallery-label">Event 1</h4>
          </div>
          <div className="gallery-item">
            <img src={event2} alt="Past Event 2" className="gallery-image" />
            <h4 className="gallery-label">Event 2</h4>
          </div>
          <div className="gallery-item">
            <img src={event3} alt="Past Event 3" className="gallery-image" />
            <h4 className="gallery-label">Event 3</h4>
          </div>
          <div className="gallery-item">
            <img src={event4} alt="Past Event 4" className="gallery-image" />
            <h4 className="gallery-label">Event 4</h4>
          </div>
        </div>
      </section>

      <section id="sponsors" className="section">
        <h2 className="section-title">Sponsors</h2>
        <div className="sponsors-container">
          <img src={sponsor1} alt="Sponsor 1" />
          <img src={sponsor2} alt="Sponsor 2" />
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-content">
          For any queries, please reach out to us at <a href="mailto:contact@gfgkare.com" style={{color: 'var(--primary-red)'}}>contact@gfgkare.com</a>.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h3>GFG - KARE</h3>
          {/* --- EDITED: Replaced text links with icons --- */}
          <div className="social-links">
            <a href="https://www.linkedin.com/company/gfg-kare-student-chapter" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/gfg_campus_body_kare/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com/gfgkare/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        /* ... other styles remain the same ... */
        .prize-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          justify-items: center;
        }
        .prize-card {
          background-color: var(--primary-red);
          border: 1px solid #a00a12;
          padding: 20px;
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 80%;
          max-width: 200px;
          aspect-ratio: 1 / 1;
        }
        .prize-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        }
        .prize-emoji {
          font-size: 3.5rem;
          line-height: 1;
        }
        .prize-card h3 {
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem; 
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: center;
        }
        .prize-card p {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
        }
        .registration-widgets-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
          justify-items: center;
        }
        .registration-widget {
          background-color: var(--primary-red);
          border: 1px solid #a00a12;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 80%;
          max-width: 220px;
          aspect-ratio: 1 / 1;
        }
        .registration-widget:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        }
        .widget-icon {
          stroke: #fff;
          width: 40px;
          height: 40px;
          margin-bottom: 15px;
        }
        .widget-title {
          color: #f0f0f0;
          font-size: 1rem;
          margin: 0 0 10px 0;
        }
        .widget-value {
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          margin: 0;
          line-height: 1;
        }
        .widget-subtitle {
            color: #f0f0f0;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .prize-emoji { font-size: 2.5rem; }
            .prize-card h3, .prize-card p { font-size: 1rem; }
            .widget-value { font-size: 2rem; }
            .widget-icon { width: 30px; height: 30px; }
            .registration-widget, .prize-card { padding: 10px; }
            .gallery-grid {
                max-width: 70%;
            }
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          max-width: 900px;
          margin: 0 auto;
        }
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
        }
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-label {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 25px 15px 15px;
            text-align: center;
            color: #fff;
            font-size: 1.1rem;
            font-weight: bold;
            background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
        }
        
        .sponsors-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .sponsors-container img {
          max-height: 80px;
          filter: grayscale(100%) contrast(1.2);
          transition: filter 0.3s ease;
        }
        .sponsors-container img:hover {
          filter: none;
        }
        .footer {
          background-color: #0a0a0a;
          padding: 40px 20px;
        }
        .footer-content h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: var(--primary-red);
          margin: 0 0 10px 0;
        }
        /* --- EDITED: Added font-size for icons --- */
        .social-links a {
          color: var(--text-white);
          margin: 0 15px;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 2rem; /* Controls the size of the icons */
        }
        .social-links a:hover {
          color: var(--primary-red);
        }
      `}</style>
    </div>
  );
}

export default App;