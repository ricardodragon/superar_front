import React, { Component } from 'react';
import './listagemcategorias.css';


class ListagemCategorias extends Component {
    
    constructor(){
        super();
        this.state = {categorias: []};
    }

    componentDidMount(){
        fetch("/api/categorias")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    categorias: result
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
            <div className="container-fluid table-responsive">       
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categorias.map((categoria)=>{
                                return(
                                    <tr>
                                        <td>{categoria.nome}</td><td>{categoria.descricao}</td>
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

export default ListagemCategorias;
