import React, { Component } from 'react';
import './header.css';




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true
        };    
    }
    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }

    render (){
        const show = (this.state.menu) ? " show" : "" ;
        return(
            <nav className="text-white navbar fixed-top navbar-expand-md navbar-dark bg-dark">                              
                <img className="navbar-brand img-fluid" style={{height: "50px"}} src="https://static.wixstatic.com/media/a04754_7b9bbe786b0f48bc8219d60b6a18c083~mv2.png/v1/fill/w_265,h_115,al_c,q_80,usm_0.66_1.00_0.01/a04754_7b9bbe786b0f48bc8219d60b6a18c083~mv2.webp" alt=""/>          
                <button className="navbar-toggler" type="button" onClick={ this.toggleMenu.bind(this) } data-toggle="collapse" data-target="#navbarMainToggler"
                    aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>          
                <section className={"collapse navbar-collapse" + show} id="navbarMainToggler">
                    <div className="navbar-nav ml-auto ">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Pilares</a>
                    <a className="nav-item nav-link" href="#">Campanhas</a>
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Pilares</a>
                    <a className="nav-item nav-link" href="#">Campanhas</a>
                    <a className="nav-item nav-link" href="#">Home</a>              
                    </div>
                    <form className="mb-0 p-0 form-inline">
                        <div className="input-group d-flex ">
                            <div className="input-group-prepend mr-2">    
                                <div className="form-group mb-0">
                                    <input className="form-control form-control-sm" type="text" aria-describedby="Username" placeholder="Username"></input>                
                                </div>                  
                            </div>
                            <div className="p-2 lock">
                                <i className="fas fa-user-lock" style={{cursor: "pointer"}}></i>
                            </div>
                        </div>                                                                        
                    </form>                             
                </section>
            </nav>        
        )
    }
}

export default Header;
