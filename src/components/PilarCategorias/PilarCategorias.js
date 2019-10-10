import React, { Component } from 'react';
import ListagemCategorias from '../ListagemCategorias/ListagemCategorias';

class PilarCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true
        };    
    }

    render (){    
        return(
            <section>
                <ListagemCategorias/>
            </section>
        );
    }
}
export default PilarCategorias;
