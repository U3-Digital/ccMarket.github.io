import React,{useContext, useState} from 'react'
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../../components/firebase'
import Swal from 'sweetalert2';

const RowCategoria = ({categoria}) => {
    const [urlImage, seturlImage] = useState('../backend/assets/images/avtar/7.jpg');
    const [loadphoto, setloadphoto] = useState(false);
    const backendContext = useContext(BackEndContext);
    const { editaPantalla } = backendContext
    const { nombre} = categoria.data();
    const id = categoria.id
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


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-2'
        },
        buttonsStyling: false
    });
    const cambio = () => {
        const valores = {
        nombre: "EditCategoria",
        id: id
        }
        editaPantalla(valores);
    };

    const eliminaAdmin = () => {
        swalWithBootstrapButtons.fire({
        title: 'Eliminar categoría',
        text: "¿Estas seguro de eliminar esta categoría?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
        }).then(async(result) => {
        if (result.isConfirmed) {
            await categoriasFirestore.doc(id).delete();
            await storageRef.delete().then(function() {
                swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'La categoría se eliminó con exito',
                    'success'
                    )
              }).catch(function(error) {
                swalWithBootstrapButtons.fire(
                    'OHH NOO!',
                    'Ha ocurrido un error',
                    'error'
                    )
              });
            
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
                <button onClick={() => eliminaAdmin()} className="btn btn-danger p-0" style={{ width: '3em' }}><i className="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    );
}

export default RowCategoria;
