import React, { Component } from 'react';
import './listagem.css';
import PubSub from 'pubsub-js'


class Listagem extends Component {
    
    constructor(props){
        super(props);
        this.state = {pilares: []};    
    }    

    componentDidMount(){
        fetch("/api/pilar")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    pilares: result
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
    
    excluir(pilar){                                                                
        fetch("/api/pilar/"+pilar.id, { method: 'DELETE', headers:{'Content-Type': 'application/json'}})        
    }

    editar(pilar){                                
        PubSub.publish('pilar', pilar);
        PubSub.publish('mostra-form', true);
    }

    render (){        
        return(            
            <div className="card">
                <div className="table-responsive">       
                    <table className="table table-sm table-ligth m-0 p-0">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Pontuação mês</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pilares.map((pilar)=>{
                                    return(
                                        <tr key={pilar.id}>
                                            <td>{pilar.nome}</td>
                                            <td>{pilar.descricao}</td>
                                            <td>{pilar.pontuacaoMaxMensal}</td>
                                            <td><button value={pilar} onClick={(()=>{this.editar(pilar)}).bind(this)} className="btn btn-outline-secondary btn-sm">Editar</button></td>
                                            <td><button value={pilar} onClick={(()=>{this.excluir(pilar)}).bind(this)} className="btn btn-outline-danger btn-sm">Excluir</button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>  
            </div>
        )
    }
}

export default Listagem;
