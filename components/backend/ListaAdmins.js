import React, { useState } from 'react';
import firebase from '../firebase';
import RowAdmin from './RowAdmin';

const ListaAdmins = () => {

    const [consulta, setConsulta] = useState(false);
    const [loading, setLoading] = useState(true);
    const [admins, setAdmins] = useState([]);

    const tempAdmins = [];

   /*  const usuariosFirestore = firebase.firestore().collection('usuarios');

    usuariosFirestore.where('admin', '==', true).get().then((snapshot) => {
        if (snapshot.empty) {
            console.log('No se encontraron administradores');
            return;
        }

        snapshot.forEach((administrador) => {
            const { id } = administrador;
            firebase.auth().get
    
            console.log(administrador.id, administrador.data());
        });
    }).catch((error) => {
        console.log(error);
    }); */


    /* const usuarios = firebase.auth().getUsers().then((result) => {
        console.log(result.users);
    });

 */
    /* admin.auth().getUsers().then((result) => {
        console.log(result.users);
    }).catch((error) => {
        console.log(error);
    }); */

    const adminsa = [
        {
            id: 1,
            nombre: 'Eric Aguilar',
            correo: 'eric.aguimar@gmail.com',
            estado: true
        },
        {
            id: 2,
            nombre: 'Alejandro Marcial',
            correo: 'a338855@uach.mx',
            estado: false
        },
        {
            id: 3,
            nombre: 'Raymundo Paz',
            correo: 'paz_2001_6@hotmail.com',
            estado: true
        },
        {
            id: 4,
            nombre: 'Ricky Urbina',
            correo: 'rickyurbina@gmail.com',
            estado: true
        },
    ];

    return (
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
                                                    adminsa.map((admin) => (
                                                        <RowAdmin
                                                            key = {admin.id}
                                                            admin = {admin}/>
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
    )
};

export default ListaAdmins;