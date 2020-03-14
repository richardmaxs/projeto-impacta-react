import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Cursos } from '../../paginas/cursos';
import { Contatos } from '../../paginas/contatos';

export const Rotas = _ =>(
    <Switch>
        <Route path="/cursos" component={Cursos} />
        <Route path="/contato" component={Contatos}/>
        <Route path="*" component={Cursos}/>
    </Switch>
);

/*export class Rotas2 extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/cursos" component={Cursos} />
                <Route path="/contato" component={Contatos}/>
                <Route path="*" component={Cursos}/>
            </Switch>
        )
    }
};*/