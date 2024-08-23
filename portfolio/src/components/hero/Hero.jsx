import React from 'react';
import './Hero.css'

const Hero = () => {

    return (
        <>
            <section className="hero-container">
                <div className="hero-content">
                    <h2>Building Digital Experiences That Inspire</h2>
                    <p>
                    Competitive Programmer | FullStack Developer | Blockchain Enthusiat | DSCE'26 Artificial Intelligence, Machine Learning|                        
                    </p>
                </div>
                <div className="hero-img">
                    <div>
                        <div className="personalImage">                        
                            <img src='./personalPhotos.jpg' alt="mee" />
                        </div>
                    </div>
                    <div>
                        <div className="tech-icon">
                           <a href="https://www.instagram.com/rahul._38_/"  target="_blank"> <img src="./insta.png" alt="insta" /></a>
                        </div>
                        <div className="tech-icon">
                        <a href="https://x.com/tRahulPrabhu38"  target="_blank" > <img src="x.png" alt="x" /></a>
                        </div>
                        <div className="tech-icon">
                        <a href="#"  target="_blank" > <img src="telegram.png" alt="insta" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;