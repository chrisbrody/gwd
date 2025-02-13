import React from 'react';
import './AboutUs.css';
import profileImage from '../../assets/images/hero.png';
import FadeInOnScroll from '../FadeInOnScroll'; // Import the reusable component

function AboutUs() {
    return (
        <FadeInOnScroll>
            <div className="about-us-container">
                <div className="about-us-text">
                    <h2>About Groundworks Development</h2>
                    <p>
                        Groundworks Development is a boutique web development and AI
                        integration service. As the founder and sole developer, I personally
                        handle every project, ensuring that you receive dedicated attention
                        and a direct line to the expert building your solution. My mission is
                        to deliver innovative, results-driven solutions tailored to your
                        unique business needs.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src={profileImage} alt="Your Name" />
                </div>
            </div>
        </FadeInOnScroll>
    );
}

export default AboutUs;