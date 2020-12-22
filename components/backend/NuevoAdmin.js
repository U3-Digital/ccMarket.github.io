import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from '../firebase';

const NuevoAdmin = () => {

    const [mensaje, setMensaje] = useState(null);
    const database = firebase.firestore().collection('usuarios');

    const formikNuevoAdmin = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es necesario'),
            email: Yup.string().email('El correo no es válido').required('El correo es necesario'),
            password: Yup.string().required('La contraseña es necesaria'),
            confirmPassword: Yup.string().required('Es necesario que confirme la contraseña')
        }),
        onSubmit: async valores => {
            const { name, email, password, confirmPassword } = valores;

            if (password === confirmPassword) {
                
                firebase.auth().createUserWithEmailAndPassword(email, password).then( async (result) => {
                    const { uid } = result.user;
                    await database.doc(uid).set({
                        nombre: name,
                        admin: true
                    }).then(() => {
                        console.log('Todo perron');
                    })
                }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        setMensaje(errorMessage);
                        setTimeout(() => {
                            setMensaje(null);
                        }, 5000);
                });

            } else {
                setMensaje('Las contraseñas deben de coincidir');
                setTimeout(() => {
                    setMensaje(null);
                }, 5000);
            }
        }
    });

    const mostrarMensaje = () => {
        return (
            <div className="alert alert-secondary mt-1 ml-5 mr-5 p-2 text-center" role="alert">
                {mensaje}
            </div>
        )
    };

    return (
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Nuevo administrador</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="dashboard"><i className="fas fa-home"></i></a></li>
                                <li className="breadcrumb-item">Administradores</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-12">
                            <form className="card" id="newAdmin" onSubmit={formikNuevoAdmin.handleSubmit}>
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Añadir un nuevo administrador</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="#" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="#" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Nombre</label>
                                                <input id="name" name="name" className="form-control" type="text" placeholder="Juan Pérez" onChange={formikNuevoAdmin.handleChange} onBlur={formikNuevoAdmin.handleBlur} value={formikNuevoAdmin.values.name}/>
                                                {
                                                    formikNuevoAdmin.touched.name && formikNuevoAdmin.errors.name ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikNuevoAdmin.errors.name}
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Correo electrónico</label>
                                                <input id="email" name="email" className="form-control" type="email" placeholder="ejemplo@ejemplo.com" onChange={formikNuevoAdmin.handleChange} onBlur={formikNuevoAdmin.handleBlur} value={formikNuevoAdmin.values.email}/>
                                                {
                                                    formikNuevoAdmin.touched.email && formikNuevoAdmin.errors.email ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikNuevoAdmin.errors.email}
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
                                                <input id="password" name="password" className="form-control" type="password" onChange={formikNuevoAdmin.handleChange} onBlur={formikNuevoAdmin.handleBlur} value={formikNuevoAdmin.values.password}/>
                                                {
                                                    formikNuevoAdmin.touched.password && formikNuevoAdmin.errors.password ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikNuevoAdmin.errors.password}
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Confirmar contraseña</label>
                                                <input id="confirmPassword" name="confirmPassword" className="form-control" type="password" onChange={formikNuevoAdmin.handleChange} onBlur={formikNuevoAdmin.handleBlur} value={formikNuevoAdmin.values.confirmPassword}/>
                                                {
                                                    formikNuevoAdmin.touched.confirmPassword && formikNuevoAdmin.errors.confirmPassword ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikNuevoAdmin.errors.confirmPassword}
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
                                            <button className="btn btn-primary btn-block" type="submit">Guardar usuario</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NuevoAdmin;