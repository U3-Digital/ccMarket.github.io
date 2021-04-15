import React, { useState } from 'react';
import firebase from '../firebase';
import TablaNegocios from './TablaNegocios';

const ListaNegocios = () => {
    const [busqueda, setBusqueda] = useState("")
    return(
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Lista de negocios</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i className="fas fa-home"></i></a>
                                </li>
                                <li className="breadcrumb-item">Lista de negocios</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <input value = {busqueda} onChange={(cosa) => setBusqueda(cosa.target.value)} type="text" className="form-control"/>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-block btn-primary"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <TablaNegocios busqueda ={busqueda}/>
        </>
    )
};

export default ListaNegocios;
