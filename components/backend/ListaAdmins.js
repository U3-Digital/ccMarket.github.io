import React, { useState } from 'react';
// import firebase from '../firebase';
import RowAdmin from './RowAdmin';
import { useQuery, gql } from '@apollo/client';

const OBTENER_USUARIOS = gql`
query obtenerUsuarios {
  obtenerUsuarios {
    id
    nombre
    email
    administrador
    estado
  }
}
`;

const ListaAdmins = () => {

  const { data, loading, error} = useQuery(OBTENER_USUARIOS);

  const [consulta, setConsulta] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [admins, setAdmins] = useState([]);

  const tempAdmins = [];

  if (loading) {
    return 'Cargando...';
  }

  const { obtenerUsuarios } = data;
  console.log(obtenerUsuarios);



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
                            obtenerUsuarios.map((usuario) => (
                              <RowAdmin
                                key={usuario.id}
                                admin={usuario} />
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