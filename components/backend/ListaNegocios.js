import React, { useState } from 'react';
import firebase from '../firebase';
import RowNegocio from './RowNegocio';


const ListaNegocios = () => {

    const [loading, setLoading] = useState(true);
    const [negocios, setNegocios] = useState([]);

    const tempNegocios = [];

    const negociosFirestore = firebase.firestore().collection('negocios');

    if (loading) {
        const cosa = negociosFirestore.orderBy('nombreNegocio').limit(4).get().then((snapshot) => {
            if (snapshot.empty) {
                console.log('No hay resultados para los negocios');
                return;
            }
            snapshot.forEach((negocio) => {
                tempNegocios.push(negocio);
            });

            setNegocios(tempNegocios);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Lista de negocios</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i data-feather="home"></i></a>
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
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-block btn-primary"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="best-seller-table responsible-tbl">
                                    <div className="item">
                                        <div className="table-responsive product-list">
                                            <table className="table table-bordernone">
                                                <thead>
                                                    <tr>
                                                        <th className="f-22">Negocio</th>
                                                        <th>Reponsable</th>
                                                        <th>Número del responsable</th>
                                                        <th>Correo del responsable</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        negocios.map((negocio) => (
                                                            <RowNegocio
                                                                key={negocio.id}
                                                                negocio={negocio}/>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ListaNegocios;
