import React, { Component } from 'react';
import './cadastro.css';
import PubSub from 'pubsub-js';

class CadastroPilar extends Component {
    
    constructor(props){
        super(props);   
        //this.state = {nome: '', descricao: ''}             
        this.state = {pilar:{descricao:'',nome: ''}}                     
    }

    cadastro(evento, pilar){
        evento.preventDefault();
        
        if(pilar.id)
            fetch("http://localhost:5000/api/pilar/"+pilar.id, { method: 'PUT',body:JSON.stringify(pilar), headers:{'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then((result) => {
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
        else
            fetch("http://localhost:5000/api/pilar", { method: 'POST',body:JSON.stringify(pilar), headers:{'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then((result) => {
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
            this.setState({pilar});
        }.bind(this));                       
    }
        
    setPilar(evento, field){
        var pilar = this.state.pilar;
        pilar[field] = evento.target.value;
        this.setState({pilar});
    }
    limpar(evento){
        console.log(evento);
        evento.preventDefault();
        this.setState({pilar:{descricao:'', nome:'', pontuacaoMaxMensal: 0}});        
        PubSub.publish('mostra-form', false);
    }    

    render (){        
        return(  
            <div className="container-fluid" >
                <form className="mb-0 p-0 form-inline justify-content-center text-center" onSubmit={this.cadastro.bind(this)}>                     
                    <div className="input-group input-group-center" style={{borderColor:'white', borderStyle: 'solid', borderWidth: '1px'}}>     
                        <div className="col-12 text-center titulo-pilar-capanha">
                            <h4>Pilar</h4>
                        </div>                                              
                        <div className="form-group mb-0 p-2">
                            <label htmlFor="nome">Nome : </label>&nbsp;&nbsp;                                                        
                            <input type="text" size="10" value={this.state.pilar.nome} onChange={(event=>{this.setPilar(event, 'nome')}).bind(this)} id="nome" className="form-control form-control-sm" aria-describedby="nome" placeholder="Digite o nome"/>                                                                                                                              
                        </div>                  
                        <div className="form-group mb-0 p-2">
                            <label htmlFor="nome">Descrição : </label>&nbsp;&nbsp;                                                        
                            {/* <input onChange={(event=>{this.setPilar(event, 'descricao')}).bind(this)} value={this.state.pilar.descricao} className="form-control form-control-sm" type="text" aria-describedby="descricao" placeholder="Digite a descrição"/>                 */}
                            <textarea onChange={(event=>{this.setPilar(event, 'descricao')}).bind(this)}  value={this.state.pilar.descricao} className="form-control form-control-sm" type="text" aria-describedby="descricao" placeholder="Digite a descrição"></textarea>
                        </div>                  
                        <div className="form-group mb-0 p-2">
                            <label htmlFor="nome">Pontuação max. mes : </label>&nbsp;&nbsp;                                                        
                            <input onChange={(event=>{this.setPilar(event, 'pontuacaoMaxMensal')}).bind(this)} size="4" value={this.state.pilar.pontuacaoMaxMensal} className="form-control form-control-sm" type="number" aria-describedby="puntuacao" placeholder="Pontuação"/>
                        </div>                  
                        <div className="mb-0 form-group p-2">                            
                            <button className="btn btn-success-sm btn-success" style={{cursor: "pointer"}} onClick={(event=>{this.cadastro(event, this.state.pilar)}).bind(this)}>                        
                                <i className="fas fa-check-circle"></i>&nbsp;&nbsp;                                                        
                                Cadastrar
                            </button>             
                        </div>
                        <div className="mb-0 form-group p-2">                            
                            <button className="btn btn-primary-sm btn-primary" style={{cursor: "pointer"}} onClick={this.limpar.bind(this)}>                        
                                <i className="far fa-trash-alt"></i>&nbsp;&nbsp;                                                        
                                Limpar
                            </button>                        
                        </div>                                                
                    </div>                                                                                                          
                </form>                                                   
            </div>
        )
    }
}

export default CadastroPilar;
