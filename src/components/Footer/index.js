import React from 'react'
import './style.css'

class Footer extends React.Component{
    render(){
        return(
            <>
                <hr />
                <section className='footer'>
                    <div className='footer__follow-us'>
                        <p>Contact us through</p>
                        <div className= 'footer__media-links'>
                            <a 
                                href='https://www.instagram.com/amity_aset_agpi_club/' 
                                target='_blank'>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a 
                                href='mailto:amity.agpi@gmail.com' 
                                target='_blank'>
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className='footer__madewithlove'>
                        <p>made with ❤️️ by <a href='https://github.com/sksuryan'>@sksuryan</a></p>
                    </div>
                </section>
            </>
        )
    }
}

export default Footer;