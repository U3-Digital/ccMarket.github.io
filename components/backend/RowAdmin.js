import React, { useContext } from 'react';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../../components/firebase'
import Swal from 'sweetalert2';

const RowAdmin = ({ admin }) => {
  const backendContext = useContext(BackEndContext);
  const { editaPantalla } = backendContext
  const { nombre, email, estado } = admin;
  const id = admin.id;

 
  const cambio = () => {
    const valores = {
      nombre: "EditAdmin",
      id: id
    }
    editaPantalla(valores);
  };
/* 
  const eliminaAdmin = () => {
    swalWithBootstrapButtons.fire({
      title: 'Eliminar usuario',
      text: "¿Estas seguro de eliminar este usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        usuariosFirestore.doc(id).update({ admin: false });
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El usuario se elimino con exito',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below 
        result.dismiss === Swal.DismissReason.cancel
      ) {

      }
    });

  }
 */
  const eliminarUsuario = () => {
    Swal.fire({
      title: 'Eliminar usuario',
      text: '¿Está seguro de que quiere eliminar este usuario?',
      icon: 'warning',
      reverseButtons: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#DC3545',
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#7366FF'
    }).then((value) => {
      if (value.isConfirmed) {
        // const resultado = awai
        console.log('asa');
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="d-inline-block align-middle"><img className="img-40 m-r-15 rounded-circle align-top" src="../backend/assets/images/avtar/7.jpg" alt="" />
          <div className="status-circle bg-primary"></div>
          <div className="d-inline-block">
            <span>{nombre.split(' ')[0]}</span>
            <p className="font-roboto">{nombre.split(' ')[1]}</p>
          </div>
        </div>
      </td>
      <td className="text-center">{email}</td>
      <td className="text-right"><i className="fa fa-check-circle"></i>{estado === 'ACTIVO' ? ('Activo') : ('Inactivo')}</td>
      <td className="text-right">
        <div>
          <button onClick={() => cambio()} className="btn btn-primary p-0 mr-2" style={{ width: '3em' }}><i className="fas fa-pencil-alt"></i></button>
          <button onClick={() => eliminarUsuario()} className="btn btn-danger p-0" style={{ width: '3em' }}><i className="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  );
};

export default RowAdmin;