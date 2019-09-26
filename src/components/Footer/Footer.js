import React, { Component } from 'react';
import img from '../../img/SPI-Integradora-1.png'
import './footer.css';

class Footer extends Component{
    render (){    
        return(
            <footer className="footer position-fixed d-flex justify-content-around bg-dark text-light text-center">
                <img className="img-fluid" style={{height: "50px"}} src={img} alt=""/>          
            </footer>
        )
    }
}

export default Footer; 