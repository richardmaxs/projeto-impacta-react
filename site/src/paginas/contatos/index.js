import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';

export class Contatos extends React.Component{
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo="entre em contato conosco"></Cabecalho>
            </div>
        )
    }
}