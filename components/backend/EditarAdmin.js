import React, { useState,useContext } from 'react';
import { Formik, useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../firebase';
import Select from 'react-select';
import Swal from 'sweetalert2';

const EditAdmin = () => {

    const [mensaje, setMensaje] = useState(null);
    const [loading, setloading] = useState(true);
    const [status, setStatus] = useState(null);
    const [usuarioActual, setUsuario] = useState({nombre: '', estado: ''});
    const backendContext = useContext(BackEndContext);
    const {idEdita,cambioPantalla} = backendContext;
    const db = firebase.firestore().collection('usuarios').doc(idEdita);


    const options = [
        { value: true , label: 'Activo' },
        { value: false , label: 'No activo' }
    ]


    if (loading){
        db.get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              const usuarioobj ={
                nombre: doc.data().nombre,
                estado: doc.data().estado
              }
              if (doc.data().estado){
                    setStatus({ value: true , label: 'Activo' });
              }else{
                    setStatus({ value: false , label: 'No activo' });
              }
              setUsuario(usuarioobj);
              setloading(false);
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
        });
    }

    const schemaValidation = Yup.object({
        nombre: Yup.string().required('El nombre es necesario'),
        estado: Yup.string().required('El estado es necesario')  
    })

    const actualizaInfoAdmin = async (valores) =>{
        const {nombre, estado} = valores;
        console.log(`name: ${nombre} estado: ${estado}`);


        db.update({estado: estado, nombre: nombre}).then(async () => {
            await Swal.fire(
                'Listo',
                'El usuario fue actualizado con exito',
                'success'
            )
            cambioPantalla("ListaAdmins");
        });  
    }

    const mostrarMensaje = () => {
        return (
            <div className="alert alert-secondary mt-1 ml-5 mr-5 p-2 text-center" role="alert">
                {mensaje}
            </div>
        )
    };

    if(loading){
        return null;
    }

    return(
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Editar administrador</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i data-feather="home"></i></a>
                                </li>
                                <li className="breadcrumb-item">Editar administrador</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-12">
                            <Formik
                                validationSchema ={schemaValidation}
                                enableReinitialize
                                initialValues = {usuarioActual}
                                onSubmit = {(valores,funciones) =>{
                                    actualizaInfoAdmin(valores)
                                }}
                            >
                                {props =>{
                                    return(
                                        <form className="card" id="editAdmin" onSubmit={props.handleSubmit}>
                                            <div className="card-header">
                                                <h4 className="card-title mb-0">Editar un administrador</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6 col-12">
                                                        <div className="form-group mb-3">
                                                            <label className="form-label">Nombre</label>
                                                            <input id="nombre" name="nombre" className="form-control" type="text" placeholder="Juan Pérez" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.nombre}/>
                                                            {
                                                                props.touched.nombre && props.errors.nombre ? (
                                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                                        {props.errors.nombre}
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-12">
                                                        <div className="form-group mb-3">
                                                            <label className="form-label">Correo electrónico</label>
                                                            <Select 
                                                                id ="estado"
                                                                name = "estado"
                                                                options = {options}
                                                                placeholder = "Estado del usuario"
                                                                onChange = {selectedOption => {
                                                                    console.log(selectedOption)
                                                                    props.handleChange("estado")(selectedOption.value)
                                                                    setStatus(selectedOption);
                                                                }}
                                                                value={status}
                                                                onBlur={props.handleBlur}
                                                            />
                                                            {
                                                                props.touched.email && props.errors.email ? (
                                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                                        {props.errors.email}
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {mensaje && mostrarMensaje()}
                                            <div className="card-footer">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-4 col-lg-4 col-10">
                                                        <button className="btn btn-primary btn-block" type="submit">Guardar cambios</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditAdmin;