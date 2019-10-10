import React, { Component } from 'react';
import './pilarcampanha.css';
import CadastroPilar from '../../components/CadastroPilares/CadastroPilar';
import Listagem from '../../components/ListagemPilares/Listagem';
import ListagemCategorias from '../../components/ListagemCategorias/ListagemCategorias';
import CadastroCategorias from '../../components/CadastroCategorias/CadastroCategorias';
import PubSub from 'pubsub-js';

class PilarCampanha extends Component {
    
    constructor(){
        super();   
        this.state = {nome: '', descricao: '', mostraForm:false, pilar:{}}         

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
    componentDidMount(){
        PubSub.subscribe('pilar',function(topico, pilar){                                                            
            this.setState({pilar,mostraForm:false});
        }.bind(this));
        PubSub.subscribe('mostra-form',function(topico, mostraForm){                                                            
            this.setState({mostraForm:mostraForm});
        }.bind(this));
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
            <div className="row container-expanded pt-5 mt-5 text-white p-3 h-100" style={{backgroundColor: '#531125',opacity:0.9}}>
                <div className="col-12 mb-3 titulo-pilar-capanha">
                    <h2>Cadastro dos Pilares da campanha</h2>
                </div>                
                <div className="col-12 container p-0 m-0">                     
                    <CadastroPilar pilar/>                    
                </div>                                         
                <div className="col-lg-5 col-md-12"> 
                    <div className="col-12 text-center titulo-pilar-capanha">
                        <h4>Pilares</h4>
                    </div>                                
                    <div className="col-12">
                        <Listagem />
                    </div>                    
                </div>
                {
                    this.state.mostraForm?                
                        <div className="col-lg-3 col-md-12">
                            <div className="col-12 text-center titulo-pilar-capanha">
                                <h4>Categorias</h4>
                            </div>                                                    
                            <div className="col-12">                        
                                <ListagemCategorias pilar={this.state.pilar}/>
                            </div>                
                        </div>:''
                }
                {
                    this.state.mostraForm?                    
                        <div className="col-lg-4 col-md-12">                    
                            <div className="col-12 text-center titulo-pilar-capanha">
                                <CadastroCategorias pilar={this.state.pilar}/>
                            </div> 
                        </div>:''
                }
            </div>
        )
    }
}

export default PilarCampanha;
