import React, { Component } from 'react';
import './listagem.css';


class Listagem extends Component {
    
    constructor(){
        super();
        this.state = {pilares: []};
    }

    cadastro(){

    }

    componentDidMount(){
        fetch("/api/pilares")
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

    render (){        
        return(                                                                   
            <div className="col-12 table-responsive">       
                <table className="table table-striped table-dark text-white">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pilares.map((pilar)=>{
                                return(
                                    <tr>
                                        <td>{pilar.nome}</td><td>{pilar.descricao}</td><td><button className="btn btn-primary btn-sm">+ Categorias</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>                                        
        )
    }
}

export default Listagem;
