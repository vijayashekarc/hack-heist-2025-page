import React, { useState, useEffect } from 'react';
import './Hero.css';
import '../App.css';
import hackHeistTitle from '../assets/hackheist.png'; 

const Timer = () => {
    const calculateTimeLeft = () => {
        // Using the current date for demonstration, replace with your hackathon's end date
        const hackathonEndDate = new Date('2025-10-11T00:00:00');
        const difference = +hackathonEndDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                HR: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                sec: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    
    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return null;
        }
        return (
            <div key={interval} className="timer-segment">
                <span className="timer-number">{String(timeLeft[interval]).padStart(2, '0')}</span>
                <span className="timer-label">{interval.toUpperCase()}</span>
            </div>
        );
    });

    return (
        <div className="timer-container">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <p className="presenter-text">GFG CAMPUS BODY KARE <br></br>PRESENTS</p>
        <img src={hackHeistTitle} alt="Hack Heist Title" className="hackathon-title-image" />
        <Timer />

        {/* --- REPLACED old event-details div with this new widget container --- */}
        <div className="info-widgets-container">
          <div className="info-widget">
            <svg className="info-widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <div className="widget-text">
              <h4>Date & Time</h4>
              <p>11 - 12<br></br> October <br></br>2025   </p>
            </div>
          </div>
          <div className="info-widget">
            <svg className="info-widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div className="widget-text">
              <h4>Venue</h4>
              <p>8th Block Seminar Hall KARE</p>
            </div>
          </div>
        </div>
        {/* --- END OF NEW WIDGETS --- */}

        <a href="#register" className="register-button">Register Now</a>
      </div>
    </section>
  );
};

export default Hero;