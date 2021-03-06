import React from 'react';
import './style.css';
import EventCard from './EventCard';

class Events extends React.Component{
    render(){
        return (
            <section id='events'>
                <div className='background-heading'>Events</div>
                <h1 className='events__heading'>Upcoming Events</h1>
                <div className='events__card-container'>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </section>
        );
    }
}

export default Events;