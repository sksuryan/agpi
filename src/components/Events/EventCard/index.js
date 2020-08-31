import React from 'react'
import './style.css'

class EventCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='event-card'>
                <p className='event-card__heading'>Codera' 20</p>
                <p className='event-card__desc'>A 2D Digital Image Processing Competition brought to you by Amity Graphics and Image Processing Club.</p>
                <p className='event-card__details'><span className='event-card__icons'><i class="fas fa-calendar-day"></i></span> 25th August 2020</p>
                <p className='event-card__details'><span className='event-card__icons'><i class="fas fa-clock"></i></span> 2:30 - 3:30 PM</p>
                <p className='event-card__details'><span className='event-card__icons'><i class="fas fa-map-marker-alt"></i></span> MS Teams</p>
                <p className='event-card__details'>For more information contact: </p>
                <p className='event-card__details'>Contact One: +91XXXXXXXXXX</p>
                <p className='event-card__details'>Contact Two: +91XXXXXXXXXX</p>
                <button className='event-card__register'>Register</button>
            </div>
        );
    }
}

export default EventCard;