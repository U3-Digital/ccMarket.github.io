import React, { useContext } from 'react';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../firebase';
import Swal from 'sweetalert2';
import {useMutation, gql} from '@apollo/client';

const ELIMINAR_NEGOCIO = gql`
    mutation borrarNegocio($id: ID!){
        borrarNegocio(id: $id)
    }
`
const RowNegocio = ({ negocio }) => {

    const negociosFirestore = firebase.firestore().collection('negocios');
    const [borrarNegocio] = useMutation(ELIMINAR_NEGOCIO);
    const backendContext = useContext(BackEndContext);
    const { editaPantalla } = backendContext;
    const { id } = negocio;
    const { nombre, direccion, nombreResponsable, numeroResponsable, emailResponsable } = negocio;

    const cambio = () => {
        const valores = {
            nombre: 'EditarNegocio',
            id: id
        }
        editaPantalla(valores);
    };

    const eliminarNegocio = async(id) => {
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
        }).then(async (value) => {
            if (value.isConfirmed) {
                const resultado = await borrarNegocio({
                    variables: {
                        id
                    }
                })
                Swal.fire({
                    title: '¡Negocio eliminado exitosamente!',
                    icon: 'success',
                    iconColor: '#7366FF',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#7366FF'
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
                        <span>{nombre}</span>
                        <p className="font-roboto">{direccion}</p>
                    </div>
                </div>
            </td>
            <td>{nombreResponsable}</td>
            <td>{numeroResponsable}</td>
            <td>{emailResponsable}</td>
            <td>
                <div>
                    <button className="btn btn-primary p-0 mr-2" style={{ width: '3em' }} onClick={() => cambio()}><i className="fas fa-pencil-alt"></i></button>
                    <button className="btn btn-danger p-0" style={{ width: '3em' }} onClick={() => eliminarNegocio(id)}><i className="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    );
};

export default RowNegocio;