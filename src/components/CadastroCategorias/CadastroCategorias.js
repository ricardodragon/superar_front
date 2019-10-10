import React, { Component } from 'react';
import './cadastrocategorias.css';
import PubSub from 'pubsub-js';

class CadastroCategorias extends Component {
    
    constructor(props){
        super(props);   
        this.state = {categoria:{nome: '', pontuacaoMaxMensal: ''}, pilar:this.props.pilar}             
    }

    componentWillMount(){
        PubSub.subscribe('pilar',function(topico, pilar){                        
            this.setState({categoria:{nome: '', pontuacaoMaxMensal: ''},pilar:pilar});            
        }.bind(this));
        console.log(this.state.pilar);
    }

    cadastro(evento, categoria){
        evento.preventDefault();    

        if(categoria.id)        
            fetch("/api/categorias/"+categoria.id, { method: 'PUT',body:JSON.stringify(categoria), headers:{'Content-Type': 'application/json'}})
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
        else{        
            //categoria.pilar = this.state.pilar;
            categoria.pilarId = this.state.pilar.id;
            fetch("/api/categorias/", { method: 'POST',body:JSON.stringify(categoria), headers:{'Content-Type': 'application/json'}})
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
    }
    setCategoria(evento, field){
        var categoria = this.state.categoria;
        categoria[field] = evento.target.value;
        this.setState({categoria, pilar:this.state.pilar});
    }    

    limpar(evento){
        console.log(evento);
        evento.preventDefault();        
    }

    render (){        
        return(  
            <div className="container-fluid">
                <h1>{this.state.pilarId}</h1>
                <form className="mb-0 p-0 justify-content-center text-center">                     
                    <div className="input-group  input-group-center">     
                        <div className="col-12 text-center">
                            <h4>Categorias</h4>
                        </div>                                           
                        <div className="form-group mb-0">                                                                                
                            <label htmlFor="nome">Nome</label>
                            <input type="text" size="15" value={this.state.categoria.nome} onChange={(event=>{this.setCategoria(event, 'nome')}).bind(this)} id="nome" className="form-control form-control-sm" aria-describedby="nome" placeholder="Digite o nome"/>                                                                                              
                        </div>    
                        <div className="form-group mb-0 ">                                                                                
                            <label htmlFor="desc">Pontuação max. mês</label>
                            <input type="number" style={{width: "5em"}} value={this.state.categoria.pontuacaoMaxMensal} onChange={(event=>{this.setCategoria(event, 'pontuacaoMaxMensal')}).bind(this)} className="form-control form-control-sm" id="pont" placeholder="Digite a pontuação máxima p/ mês"/>                               
                        </div>                                                
                        <button className="btn btn-success-sm btn-success" style={{cursor: "pointer"}} onClick={(event=>{this.cadastro(event, this.state.categoria)}).bind(this)}>                        
                            <i className="fas fa-check-circle"></i>&nbsp;&nbsp;                                                        
                            Cadastrar
                        </button>                                                             
                        <button className="btn btn-primary-sm btn-primary" style={{cursor: "pointer"}} >                        
                            <i className="far fa-trash-alt"></i>&nbsp;&nbsp;                                                        
                            Limpar
                        </button>                                                
                    </div>        
                </form>                                       
            </div>
        )
    }
}

export default CadastroCategorias;
