import React from 'react';
import logo from '../../logo.svg';
import './style.css'

class Nav extends React.Component{
    render(){
        return (
            <div className='nav'>
                <a href='.'><img src={logo} alt='logo'></img></a>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Teams</li>
                </ul>
            </div>
        );
    }
}

export default Nav;