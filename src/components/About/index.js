import React from 'react';
import './style.css';

class About extends React.Component{
    render(){
        const {about} = this.props;
        const para = about.map(text => <p className='about__para'>{text}</p>)
        return (
            <section id='about'>
                <div className='background-heading'>About</div>
                <h1 className='about__heading'>About Us</h1>
                <div className='about__paras'>
                    {para}
                </div>
            </section>
        );
    }
}

export default About;