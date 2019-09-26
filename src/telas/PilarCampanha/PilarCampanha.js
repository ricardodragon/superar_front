import React, { Component } from 'react';
import './pilarcampanha.css';
import CadastroPilar from '../../components/CadastroPilares/CadastroPilar';
import Listagem from '../../components/ListagemPilares/Listagem';

class PilarCampanha extends Component {
    
    constructor(){
        super();   
        this.state = {nome: '', descricao: ''}         

    }

    cadastro(evento){
        evento.preventDefault();                
        console.log(JSON.stringify({nome: this.state.nome, descricao: this.state.descricao}));
        var t = JSON.stringify({nome: this.state.nome, descricao: this.state.descricao});
        fetch("/api/categorias", { method: 'POST',body:t, headers:{'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    pilar: {}
                });
            },        
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    setNome(evento){
        this.setState({nome: evento.target.value});
    }

    setDesc(evento){
        this.setState({descricao: evento.target.value});
    }

    render (){        
        return(  
            // <div className="container  col-12 container-expanded" style={{backgroundColor: '#531125',opacity:0.9}}>
            <div class="container-fluid pt-5 mt-5 text-white p-3 h-100" style={{backgroundColor: '#531125',opacity:0.9}}>
                <div class="row justify-content-start h-100"> 
                    <div className="col-12 mb-3 titulo-pilar-capanha">
                        <h2>Cadastro dos Pilares da campanha</h2>
                    </div>                
                    <div className="col-4">
                        <div className="">
                            <CadastroPilar/>                    
                        </div>                 
                        <div>
                            <Listagem/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PilarCampanha;
