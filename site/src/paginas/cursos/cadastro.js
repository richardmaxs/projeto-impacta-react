import React from 'react';
import { FormularioCursos } from '../../paginas/cursos/formulario';
import { ListaCursos } from '../../paginas/cursos/lista';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CadastroCursos extends React.Component {

    estadoInicial = {
        cursos : [],
        codigo :  null,
        descricao : '',
        cargahoraria: '',
        preco: null,
        categoria: ''
    }
    state = this.estadoInicial;

    componentDidMount(){
        axios.get(URL)
        .then(response => {
            this.setState({...this.state, cursos: response.data});
        })
        .catch(error => {
            console.log(error)
        });

    };

    atualizaCodigo(e){
        this.setState({...this.state, codigo: e.target.value })
    }

    atualizaDescricao(e){
        this.setState({...this.state, descricao: e.target.value })
    }

    atualizaCaragahoraria(e){
        this.setState({...this.state, cargahoraria: e.target.value })
    }

    atualizaPreco(e){
        this.setState({...this.state, preco: e.target.value })
    }

    atualizaCategoria(e){
        this.setState({...this.state, categoria: e.target.value })
    }

    
    

    render(){
        
        return(
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormularioCursos 
                    codigo={this.state.codigo} 
                    descricao={this.state.descricao} 
                    cargahoraria={this.state.cargahoraria}
                    preco={this.state.preco }
                    categoria={this.state.categoria}

                    atualizaCodigo={this.atualizaCodigo.bind(this)}
                    atualizaDescricao={this.atualizaDescricao.bind(this)}
                    atualizaCaragahoraria={this.atualizaCaragahoraria.bind(this)}
                    atualizaPreco={this.atualizaPreco.bind(this)}
                    atualizaCategoria={this.atualizaCategoria.bind(this)}
                    />
                </div>
                <div className="col-md-6">
                    <ListaCursos cursos={this.state.cursos} />
                </div>
            </div>
        )
    }
}