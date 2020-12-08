import React, { useState,useContext } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../firebase';

const EditAdmin = () => {

    const [mensaje, setMensaje] = useState(null);
    const [loading, setloading] = useState(true);
    const [usuarioActual, setUsuario] = useState({name: '', email: '',password: '', confirmPassword:'' });
    const backendContext = useContext(BackEndContext);
    const {idEdita} = backendContext;
    const db = firebase.firestore().collection('usuarios').doc(idEdita);
    if (loading){
        db.get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
                console.log(doc.data().nombre);
              const usuarioobj ={
                name: doc.data().nombre,
                email:doc.data().correo,
                password: '',
                confirmPassword: ''
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
        name: Yup.string().required('El nombre es necesario'),
        email: Yup.string().email('El correo no es válido').required('El correo es necesario'),
        password: Yup.string(),
        confirmPassword: Yup.string()    
    })

    const actualizaInfoAdmin = async (valores) =>{
        const { name, email, password, confirmPassword } = valores;

        if (password === confirmPassword) {
            if(password === ""){
                db.update({
                    correo: email,
                    nombre: name
                  }).then(function() {
                    console.log("Frank food updated");
                  });
            
            }
            if(email !== usuarioActual.email){
                
            }
        } else {
            setMensaje('Las contraseñas no coinciden');
            setTimeout(() => {
                setMensaje(null);
            }, 5000);
        }    
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
                                                            <input id="name" name="name" className="form-control" type="text" placeholder="Juan Pérez" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.name}/>
                                                            {
                                                                props.touched.name && props.errors.name ? (
                                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                                        {props.errors.name}
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-12">
                                                        <div className="form-group mb-3">
                                                            <label className="form-label">Correo electrónico</label>
                                                            <input id="email" name="email" className="form-control" type="email" placeholder="ejemplo@ejemplo.com" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email}/>
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
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6 col-12">
                                                        <div className="form-group mb-3">
                                                            <label className="form-label">Contraseña</label>
                                                            <input id="password" name="password" className="form-control" type="password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password}/>
                                                            {
                                                                props.touched.password && props.errors.password ? (
                                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                                        {props.errors.password}
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-12">
                                                        <div className="form-group mb-3">
                                                            <label className="form-label">Confirmar contraseña</label>
                                                            <input id="confirmPassword" name="confirmPassword" className="form-control" type="password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.confirmPassword}/>
                                                            {
                                                                props.touched.confirmPassword && props.errors.confirmPassword ? (
                                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                                        {props.errors.confirmPassword}
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