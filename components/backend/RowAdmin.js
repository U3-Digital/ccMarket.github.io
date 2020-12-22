import React, { useContext } from 'react';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../../components/firebase'
import Swal from 'sweetalert2';

const RowAdmin = ({ admin }) => {
    const backendContext = useContext(BackEndContext);
    const {editaPantalla} = backendContext
    const {nombre, correo, estado } = admin.data();
    const id  = admin.id
    const usuariosFirestore = firebase.firestore().collection('usuarios');

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    })


    const cambio = () =>{
        const valores = {
            nombre: "EditAdmin",
            id: id
        }
        editaPantalla(valores);
    }

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
          usuariosFirestore.doc(id).update({admin: false});
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'El usuario se elimino con exito',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          
        }
      });

    }

    
      
    

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
            <td className="text-center">{correo}</td>
            <td className="text-right"><i className="fa fa-check-circle"></i>{estado ? ('Activo') : ('Inactivo')}</td>
            <td className="text-right">
                <div>
                    <button onClick={()=> cambio()} className="btn btn-primary p-0 mr-2" style={{width: '3em'}}><i className="fas fa-pencil-alt"></i></button>
                    <button onClick={() => eliminaAdmin()} className="btn btn-danger p-0" style={{width: '3em'}}><i className="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    );
};

export default RowAdmin;