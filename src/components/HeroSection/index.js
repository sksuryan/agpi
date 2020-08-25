import React from 'react';
import './style.css'

class HeroSection extends React.Component{
    render(){
        return (
            <section className='hero-section'>
                <p className='hero-section__title'>Amity Graphics & Image Processing Club</p>
                <button className='hero-section__join'><span className='hero-section__join-span'>Join the family</span></button>
            </section>
        );
    }
}

export default HeroSection;