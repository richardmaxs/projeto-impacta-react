import React from 'react';


export const FormularioCursos = props => (

    

    <div className="border-right pl-3 pr-3">
        <h3 className="border-bottom">Formulario</h3>
        <form>
            <div className="form-group row">
                <label htmlFor="codigo"
                    className="col-sm-3 col-form-label">
                    Código:
                </label>
                <div className="col-sm-9">
                    <input type="number"
                        className="form-control" id="codigo" value={props.codigo} onChange={ props.atualizaCodigo }/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="descrição"
                    className="col-sm-3 col-form-label">
                    Descrição:
                </label>
                <div className="col-sm-9">
                    <input type="text"
                        className="form-control" id="descricao" value={props.descricao} onChange={ props.atualizaDescricao } />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="cargaHoraria"
                    className="col-sm-3 col-form-label">
                    Carga Horária:</label>
                <div className="col-sm-9 col-6">
                    <input type="number"
                        className="form-control" id="cargaHoraria" value={props.cargahoraria} onChange={ props.atualizaCaragahoraria } />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="preco"
                    className="col-sm-3 col-form-label">
                    Preço:</label>
                <div className="col-sm-9">
                    <input type="number"
                        className="form-control" id="preco"  value={props.preco} onChange={ props.atualizaPreco }/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="categoria"
                    className="col-sm-3 col-form-label">Categoria:</label>
                <div className="col-sm-9">
                    <select className="form-control" id="categoria" value={props.categoria} onChange={ props.atualizaCategoria }>
                        <option>INFORMATICA</option>
                        <option>ENGENHARIA</option>
                        <option>ADMINISTRACAO</option>
                        <option>REDES</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <button
                    className="btn btn-primary ml-3 mb-3">
                    Adicionar
            </button>
            </div>
        </form>
    </div>
)