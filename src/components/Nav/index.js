import React from 'react';
import logo from '../../logo.svg';
import './style.css'

class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            style: {
                backgroundColor: '#ffffff00'
            }
        }
        this.listenScrollEvent = this.listenScrollEvent.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    shouldComponentUpdate(nextProps, nextState){
        const style = this.state.style.backgroundColor
        const nextStyle = nextState.style.backgroundColor
        if (nextStyle === style)
            return false
        else
            return true
    }
    listenScrollEvent(){
        const height = window.innerHeight;
        const scrollY = window.scrollY;
        if(scrollY/height > 0.2){
            this.setState({style: {backgroundColor: 'var(--background-color)'}})
        } else {
            this.setState({style: {backgroundColor: '#ffffff00'}})
        }
    }
    render(){
        return (
            <div className='nav' style={this.state.style}>
                <a href='.'><img src={logo} alt='logo'></img></a>
                <ul>
                    <li><a href='#hero-section'>Home</a></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#events'>Events</a></li>
                    <li><a href='#team'>Team</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;