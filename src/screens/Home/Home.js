import React from 'react';

export default (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary fixed-top ">
                <div className="container">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{marginTop: 150, marginLeft: "35%"}}>
                <button class="btn btn-primary btn-fab btn-fab-mini btn-round" style={{width: 100, height: 100, fontSize: 50, marginRight: 100}}>
                    <i class="material-icons" style={{fontSize: 50, marginTop: 35}}>add</i>
                </button>
                <button class="btn btn-primary btn-fab btn-fab-mini btn-round" style={{width: 100, height: 100, fontSize: 50, marginRight: 100}}>
                    <i class="material-icons" style={{fontSize: 50, marginTop: 35}}>edit</i>
                </button>
                <button class="btn btn-primary btn-fab btn-fab-mini btn-round" style={{width: 100, height: 100, fontSize: 50, marginRight: 100}}>
                    <i class="material-icons" style={{fontSize: 50, marginTop: 35}}>close</i>
                </button>
            </div>
            <div style={{marginTop: 100}}>
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Nome do Produto</th>
                                    <th>Tipo</th>
                                    <th>Estoque</th>
                                    <th className="text-right">Preço</th>
                                    <th className="text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>John Doe</td>
                                    <td>Design</td>
                                    <td>2012</td>
                                    <td className="text-right">R$ 89,21</td>
                                    <td className="td-actions text-right">
                                        <button type="button" rel="tooltip" className="btn btn-info btn-round">
                                            <i className="material-icons">person</i>
                                        </button>
                                        <button type="button" rel="tooltip" className="btn btn-success btn-round">
                                            <i className="material-icons">edit</i>
                                        </button>
                                        <button type="button" rel="tooltip" className="btn btn-danger btn-round">
                                            <i className="material-icons">close</i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}