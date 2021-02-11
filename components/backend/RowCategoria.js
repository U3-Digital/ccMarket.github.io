import React, { useContext, useState } from 'react'
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../../components/firebase'
import Swal from 'sweetalert2';
import { useMutation, gql } from '@apollo/client';

const BORRAR_CATEGORIA = gql`
mutation borrarCategoria($id: ID!) {
  borrarCategoria(id: $id)
}
`;

const RowCategoria = ({ id, categoria }) => {
  const [borrarCategoria] = useMutation(BORRAR_CATEGORIA);

  const [urlImage, seturlImage] = useState('../backend/assets/images/avtar/7.jpg');
  const [loadphoto, setloadphoto] = useState(false);
  const backendContext = useContext(BackEndContext);
  const { editaPantalla } = backendContext
  const nombre = categoria;
  const categoriasFirestore = firebase.firestore().collection('categorias');
  const storage = firebase.storage();
  const storageRef = storage.ref(`categorias/${id}`);
  if (!loadphoto) {

    storageRef.getDownloadURL().then(function (url) {
      seturlImage(url);
    }).catch(function (error) {

      switch (error.code) {
        case 'storage/object-not-found':
          console.log(`no encontre ${id} ${urlImage}`);
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;


        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
    setloadphoto(true);
  }

/* 
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-warning',
      cancelButton: 'btn btn-danger mr-2 c'
    },
    buttonsStyling: false
  }); */

  const cambio = () => {
    const valores = {
      nombre: "EditCategoria",
      id: id
    }
    editaPantalla(valores);
  };

  const eliminarCategoria = () => {
    Swal.fire({
      title: 'Eliminar categoría',
      text: '¿Está seguro de que quiere eliminar esta categoría?',
      icon: 'warning',
      reverseButtons: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#DC3545',
      confirmButtonColor: '#7366FF',
      confirmButtonText: 'Eliminar'
    }).then(async (value) => {
      if (value.isConfirmed) {
        const resultado = await borrarCategoria({
          variables: {
            id
          }
        });

        await storageRef.delete().then(() => {

        }).catch((error) => {
          // console.log(error);
        });

        Swal.fire({
          title: 'Categoría eliminada ',
          text: 'Categoría eliminada exitosamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    });

    /* swalWithBootstrapButtons.fire({
      title: 'Eliminar categoría',
      text: "¿Esta seguro de que quiere eliminar esta categoría?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await categoriasFirestore.doc(id).delete();
        await storageRef.delete().then(function () {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'La categoría se eliminó con exito',
            'success'
          )
        }).catch(function (error) {
          swalWithBootstrapButtons.fire(
            'OHH NOO!',
            'Ha ocurrido un error',
            'error'
          )
        });

      } else if (
    
        result.dismiss === Swal.DismissReason.cancel
      ) {

      }
    }); */

  }
  return (
    <tr>
      <td>
        <div className="d-inline-block align-middle"><img className="img-40 m-r-15 rounded-circle align-top" src={urlImage} alt="" />
          <div className="status-circle bg-primary"></div>
          <div className="d-inline-block">
            <span>{nombre}</span>
          </div>
        </div>
      </td>
      <td className="text-right">
        <div>
          <button onClick={() => cambio()} className="btn btn-primary p-0 mr-2" style={{ width: '3em' }}><i className="fas fa-pencil-alt"></i></button>
          <button onClick={() => eliminarCategoria()} className="btn btn-danger p-0" style={{ width: '3em' }}><i className="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  );
}

export default RowCategoria;
