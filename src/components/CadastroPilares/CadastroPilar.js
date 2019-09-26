import React, { Component } from 'react';
import './cadastro.css';


class CadastroPilar extends Component {
    
    constructor(){
        super();   
        this.state = {nome: '', descricao: ''}             

    }

    cadastro(evento){
        evento.preventDefault();                
        console.log(JSON.stringify({nome: this.state.nome, descricao: this.state.descricao}));
        var t = JSON.stringify({nome: this.state.nome, descricao: this.state.descricao});
        fetch("http://localhost:5000/api/pilares", { method: 'POST',body:t, headers:{'Content-Type': 'application/json'}})
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
            <div className="container-fluid">
                <form className="mb-0 p-0 text-center" onSubmit={this.cadastro.bind(this)}>
                    <div className="input-group justify-content-center">                           
                        <div className="form-group mb-0 p-2">
                            <label htmlFor="nome">Nome :</label>
                            <input type="text" value={this.state.nome} onChange={this.setNome.bind(this)} id="nome" className="form-control form-control-sm" aria-describedby="nome" placeholder="Digite o nome"/>                                                                                                                              
                        </div>                  
                        <div className="form-group mb-0 p-2">
                            <label htmlFor="nome">Descrição :</label>
                            <input onChange={this.setDesc.bind(this)} value={this.state.descricao} className="form-control form-control-sm" type="text" aria-describedby="Username" placeholder="Digite a descrição"></input>                
                        </div>                  
                        <div className="form-group w-100 mb-0">
                            <div className="btn w-100 btn-outline-success-sm btn-outline-success" style={{cursor: "pointer"}}>                        
                                <i className="fas fa-check-circle"></i>&nbsp;&nbsp;                                                        
                                Cadastrar
                            </div>                         
                        </div>
                    </div>                                                                                                          
                </form>                                                   
            </div>
        )
    }
}

export default CadastroPilar;
