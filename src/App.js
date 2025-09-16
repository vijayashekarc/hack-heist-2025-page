// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import sponsor1 from './assets/sponsor1.png';
import sponsor2 from './assets/sponsor2.png';

import event1 from './assets/event1.png';
import event2 from './assets/event2.png';
import event3 from './assets/event3.png';
import event4 from './assets/event4.png';

import floaterIcon from './assets/floater-icon.png';

function App() {
  return (
    <div className="App">
      {/* --- NEW: Container for the background animation --- */}
      <div className="background-animation">
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>

        <img src={floaterIcon} alt="" className="floater f1" />
        <img src={floaterIcon} alt="" className="floater f2" />
        <img src={floaterIcon} alt="" className="floater f3" />
        <img src={floaterIcon} alt="" className="floater f4" />
      </div>

      <Navbar />
      <Hero />

      {/* ... rest of your sections ... */}
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
              <p className="widget-value">₹300</p>
              <span className="widget-subtitle">per head</span>
            </div>
            <div className="registration-widget">
              <svg className="widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="widget-title">Team <br></br> Size</h3>
              <p className="widget-value">3-4</p>
              <span className="widget-subtitle">members</span>
            </div>
          </div>
          <a href="https://hack-heist-2025.vercel.app" className="register-button" style={{marginTop: '40px', display: 'inline-block'}}>Register Your Team</a>
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
          <div className="prize-card">
            <span className="prize-emoji">📜</span>
            <h3>Certificates</h3>
            <p>For All</p>
          </div>
        </div>
      </section>

      <section id="rules" className="section">
        <h2 className="section-title">Rules</h2>
        <ul className="section-content" style={{textAlign: 'left', listStylePosition: 'inside'}}>
          <li>Team of 3 - 4 people.</li>
          <li>The projects should strictly align with any of the given themes.</li>
          <li>No plagiarism.</li>
          <li>The registration fee of Rs. 300 (per head) should be paid to complete the registration. This fee covers the registration, mentorship, refreshments and the ticket for the offline presentation.</li>
        </ul>
      </section>

      <section id="past-events" className="section">
        <h2 className="section-title">OUR PAST EVENTS</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={event2} alt="Past Event 1" className="gallery-image" />
            <h4 className="gallery-label">Algorithmist25</h4>
          </div>
          <div className="gallery-item">
            <img src={event1} alt="Past Event 2" className="gallery-image" />
            <h4 className="gallery-label">Algorithmist24</h4>
          </div>
          <div className="gallery-item">
            <img src={event3} alt="Past Event 3" className="gallery-image" />
            <h4 className="gallery-label">National Skillup</h4>
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
          For any queries, feel free to contact.
        </p>
        <p className="section-contect"> 
          Anirudh Naginayani Cheruvu - 9966066070
          <br></br>
          M Rakshan Ananth - 9003513022
          <br></br>
          Vijayashekar - 9398802601
        </p>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-text">G F G - K A R E </h3>
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
        /* ... all your other styles remain here ... */
        .prize-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          justify-items: center;
          max-width: 500px;
          margin: 0 auto;
        }
        .prize-card {
          background-color: var(--primary-red);
          border: 1px solid #a00a12;
          padding: 15px;
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 180px;
          aspect-ratio: 1 / 1;
        }
        .prize-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        }
        .prize-emoji {
          font-size: 3rem;
          line-height: 1;
        }
        .prize-card h3 {
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          margin-top: 10px;
          margin-bottom: 8px;
          text-align: center;
        }
        .prize-card p {
          color: #fff;
          font-size: 1.2rem;
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
          width: 100%;
          max-width: 200px;
          aspect-ratio: 1 / 1;
        }
        .registration-widget:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
        }
        .widget-icon {
          stroke: #fff;
          width: 35px;
          height: 35px;
          margin-bottom: 10px;
        }
        .widget-title {
          color: #f0f0f0;
          font-size: 0.9rem;
          margin: 0 0 8px 0;
        }
        .widget-value {
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          margin: 0;
          line-height: 1;
        }
        .widget-subtitle {
            color: #f0f0f0;
            font-size: 0.8rem;
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
            padding-bottom : 10px;
            text-align: center;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            background: linear-gradient(to top, rgba(192, 161, 161, 0.85), transparent);
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
          margin: 0 0 10px 0;
        }
        .social-links {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
        }
        .social-links a {
          color: var(--text-white);
          margin: 0;
          text-decoration: none;
          font-size: 2rem;
          transition: color 0.3s ease;
          line-height: 1;
        }
        .social-links a:hover {
          color: var(--primary-red);
        }
        
        @media (max-width: 768px) {
            .prize-container,
            .registration-widgets-container,
            .gallery-grid {
                width: 90%;
                margin: 0 auto;
            }
            .prize-emoji { font-size: 2.5rem; }
            .prize-card h3, .prize-card p { font-size: 1rem; }
            .widget-value { font-size: 2rem; }
            .widget-icon { width: 30px; height: 30px; }
            .registration-widget, .prize-card { padding: 10px; }
            .gallery-label {font-size: 0.8rem;}
        }

        @media (max-width: 480px) {
            .prize-container {
                grid-template-columns: 1fr 1fr;
            }
            .registration-widgets-container {
                grid-template-columns: 1fr 1fr;
            }
            .prize-card, .registration-widget {
                max-width: 120px;
            }
            .gallery-label {font-size: 0.8rem;}
        }
      `}</style>
    </div>
  );
}

export default App;