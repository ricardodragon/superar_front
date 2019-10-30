import React, { Component } from 'react';
import './listagemcategorias.css';


class ListagemCategorias extends Component {
    
    constructor(props){
        super(props);
        this.state = {categorias: [], pilar: props.pilar};
    }

    componentDidMount(){
        // PubSub.subscribe('pilar',function(topico, pilar){                        
            fetch("/api/categoria/bypilar/"+this.state.pilar.id)
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
        //}.bind(this));        
    }

    render (){        
        return(             
            <div className="card">
                <div className="table-responsive">       
                    <table className="table table-sm table-striped table-ligth m-0 p-0">
                        <thead className="thead">
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
            </div>                                       
        )
    }
}

export default ListagemCategorias;
