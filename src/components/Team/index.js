import React from 'react';
import './style.css';

class Team extends React.Component{
    render(){
        return(
            <section id='team'>
                <div className='background-heading'>Team</div>
                <h1 className='team__heading'>Team</h1>
                <div className='team__card-container'>
                    <div className='team__mem-img'>
                        <img src='https://source.unsplash.com/O3ymvT7Wf9U/' alt='people'></img>
                        <div className='team__mem-details'>
                            <p className='team__mem-detail'>Jane Doe</p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-linkedin-in"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-instagram"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-github"></i></a></p>
                        </div>
                    </div>
                    <div className='team__mem-img'>
                        <img src='https://source.unsplash.com/tAvpDE7fXgY/' alt='people'></img>
                        <div className='team__mem-details'>
                            <p className='team__mem-detail'>John Doe</p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-linkedin-in"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-instagram"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-github"></i></a></p>
                        </div>
                    </div>
                    <div className='team__mem-img'>
                        <img src='https://source.unsplash.com/rDEOVtE7vOs/' alt='people'></img>
                        <div className='team__mem-details'>
                            <p className='team__mem-detail'>Jane Doe</p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-linkedin-in"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-instagram"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-github"></i></a></p>
                        </div>
                    </div>
                    <div className='team__mem-img'>
                        <img src='https://source.unsplash.com/Ss3wTFJPAVY/' alt='people'></img>
                        <div className='team__mem-details'>
                            <p className='team__mem-detail'>John Doe</p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-linkedin-in"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-instagram"></i></a></p>
                            <p className='team__mem-detail'><a href='#'><i className="fab fa-github"></i></a></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;