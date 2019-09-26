import React, { Component } from 'react';
import './cadastrocategorias.css';

class CadastroCategorias extends Component {
    
    constructor(){
        super();   
        this.state = {nome: '', pontuacaoMaxMensal: ''}             

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

    // setDesc(evento){
    //     this.setState({descricao: evento.target.value});
    // }

    setPontuacao(evento){
        this.setState({pontuacaoMaxMensal: evento.target.value});
    }

    render (){        
        return(  
            <div className="container-fluid">
                <h4 className="titulo-categoria">Cadastro de categorias</h4>                
                <form className="row" onSubmit={this.cadastro.bind(this)}>
                    <fieldset className="col-8">                                                                                              
                            <label htmlFor="nome">Nome</label>
                            <input type="text" value={this.state.nome} onChange={this.setNome.bind(this)} id="nome" className="form-control" aria-describedby="nome" placeholder="Digite o nome"/>                                                                                              
                            {/* 
                                <label htmlFor="desc">Descrição</label>
                                <input type="text" value={this.state.descricao} onChange={this.setDesc.bind(this)} className="form-control" id="desc" placeholder="Digite a Descrição"/>                               
                            */}
                            <label htmlFor="desc">Pontuação máxima mensal</label>
                            <input type="number" value={this.state.pontuacaoMaxMensal} onChange={this.setPontuacao.bind(this)} className="form-control" id="pont" placeholder="Digite a pontuação máxima p/ mês"/>                               
                    </fieldset>
                    <div className="col-4 d-flex align-items-center">
                        <button className="btn btn-primary">Cadastrar</button>                 
                    </div>
                </form>                        
            </div>
        )
    }
}

export default CadastroCategorias;
