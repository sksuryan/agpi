import React from 'react';
import './style.css'

class HeroSection extends React.Component{
    render(){
        return (
            <section className='hero-section'>
                <div className='hero-section__center-values'>
                    <p className='hero-section__title'>Amity Graphics & Image Processing Club</p>
                    <button className='hero-section__join'><span className='hero-section__join-span'>Join the family</span></button>
                </div>
                <div className='hero-section__scroll-down'>
                    Scroll down to know what we're about ⬇
                </div>
            </section>
        );
    }
}

export default HeroSection;