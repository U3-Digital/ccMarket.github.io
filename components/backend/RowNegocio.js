import React, { useContext } from 'react';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../firebase';
import Swal from 'sweetalert2';

const RowNegocio = ({ negocio }) => {

    const negociosFirestore = firebase.firestore().collection('negocios');

    const backendContext = useContext(BackEndContext);
    const { id } = negocio;
    const { nombreNegocio, direccionNegocio, nombreResponsable, numeroResponsable, emailResponsable } = negocio.data();

    function borrarNegocio(id) {
        Swal.fire({
            title: '¿Desea borrar el negocio?',
            text: 'Esta acción no podrá ser revertida',
            icon: 'warning',
            iconColor: '#DC3545',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#7366FF',
            reverseButtons: true
        }).then((value) => {
            if (value.isConfirmed) {
               negociosFirestore.doc(id).delete().then(() => {
                   console.log('borrado');
               }).catch((error) => {
                   console.log(error);
               });
            }
        });
    }

    return (
        <tr>
            <td>
                <div className="d-inline-block align-middle"><img className="img-40 m-r-15 rounded-circle align-top" src="https://via.placeholder.com/300" alt="" />
                    <div className="status-circle bg-primary"></div>
                    <div className="d-inline-block">
                        <span>{nombreNegocio}</span>
                        <p className="font-roboto">{direccionNegocio}</p>
                    </div>
                </div>
            </td>
            <td>{nombreResponsable}</td>
            <td>{numeroResponsable}</td>
            <td>{emailResponsable}</td>
            <td>
                <div>
                    <button className="btn btn-primary p-0 mr-2" style={{ width: '3em' }}><i className="fas fa-pencil-alt"></i></button>
                    <button className="btn btn-danger p-0" style={{ width: '3em' }} onClick={() => borrarNegocio(id)}><i className="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    );
};

export default RowNegocio;