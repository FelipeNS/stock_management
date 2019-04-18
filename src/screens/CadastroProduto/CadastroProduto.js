import React, { Component } from 'react';
import api from '../../services/Api';
import './CadastroProduto.css'

class CadastroProduto extends Component {
    state = {
        pro_codigo: '123esd123',
        pro_nome: 'TesteNome',
        pro_description: 'TesteDescricao',
        pro_category: 'TesteCategoria',
        pro_price: '12.90',
        pro_images: 'image.jpg'
    }

    _request = async () => {
        const response = await api.get('product/');

        console.log(response);
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-text card-header-primary">
                                    <div className="card-text">
                                    <h4 className="card-title text-center">Cadastro de Produtos</h4>
                                    </div>
                                </div>
    
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">group</i>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Código do Produto" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">group</i>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Nome do Produto" />
                                            </div>
                                            </div>
                                        </div>
    
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <i class="material-icons">group</i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Categoria" />
                                                    </div>
                                                </div>
                                                </div>
                                    <div className="row">
                                    <div className="col-md-12">
                                    <div class="form-group form-file-upload form-file-multiple">
                                                    <input type="file" multiple="" class="inputFileHidden"/>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control inputFileVisible" placeholder="Single File"/>
                                                        <span class="input-group-btn">
                                                            <button type="button" class="btn btn-fab btn-round btn-primary">
                                                                <i class="material-icons">attach_file</i>
                                                            </button>
                                                        </span>
                                                    </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12">
                                                    <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    </div>
                                                    </div>
                                    <div className="row" align="center">
                                    <div className="col-md-12">
                                                        <button type="button" class="btn btn-primary btn1" align="center">Voltar</button>
                                                        <button type="button" class="btn btn-primary btn2" align="center" onClick={this._request} >Cadastrar</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

export default CadastroProduto;