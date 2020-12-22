import React, { useState } from 'react';
import firebase from '../firebase';
import RowAdmin from './RowAdmin';

const ListaAdmins = () => {

    const [consulta, setConsulta] = useState(false);
    const [loading, setLoading] = useState(true);
    const [admins, setAdmins] = useState([]);

    const tempAdmins = [];

    const usuariosFirestore = firebase.firestore().collection('usuarios');
    if (loading) {
        usuariosFirestore.where('admin', '==', true).get().then((snapshot) => {
            if (snapshot.empty) {
                console.log('No se encontraron administradores');
                return;
            }
            snapshot.forEach((administrador) => {
                const { id } = administrador;
                tempAdmins.push(administrador);

            });
            setAdmins(tempAdmins);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }



    /* const usuarios = firebase.auth().getUsers().then((result) => {
        console.log(result.users);
    });

 */
    /* admin.auth().getUsers().then((result) => {
        console.log(result.users);
    }).catch((error) => {
        console.log(error);
    }); */



    return (
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Lista de administradores</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i className="fas fa-home"></i></a>
                                </li>
                                <li className="breadcrumb-item">Lista de administradores</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="best-seller-table responsive-tbl">
                                    <div className="item">
                                        <div className="table-responsive product-list">
                                            <table className="table table-bordernone">
                                                <thead>
                                                    <tr>
                                                        <th className="f-22">Administrador</th>
                                                        <th className="text-center">Correo electrónico</th>
                                                        <th className="text-right">Estado</th>
                                                        <th className="text-right">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        admins.map((admin) => (
                                                            <RowAdmin
                                                                key={admin.id}
                                                                admin={admin} />
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

export default ListaAdmins;