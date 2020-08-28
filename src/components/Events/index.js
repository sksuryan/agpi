import React from 'react';
import './style.css';

class Events extends React.Component{
    render(){
        return (
            <section id='events'>
                <div className='background-heading'>Events</div>
                <h1 className='events__heading'>Upcoming Events</h1>
            </section>
        );
    }
}

export default Events;