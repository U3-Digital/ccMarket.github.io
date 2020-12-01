import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../../components/backend/Layout';
import firebase from '../../components/firebase';
const index = () => {
    
    const database = firebase.firestore().collection('usuarios');
    
    const [mensaje, setMensaje] = useState(null);

    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El correo no es válido').required('El correo es necesario'),
            password: Yup.string().required('La contraseña es necesaria')
        }),
        onSubmit: async valores => {
            const {email, password} = valores;
            await firebase.auth().signInWithEmailAndPassword(email, password).then((param) => {
                const uid = param.user.uid;
                database.doc(uid).get().then((snapshot) => {

                    if (snapshot.empty) {
                        mostrarMensaje('Hubo un pedote');
                    } else {
                        if (snapshot.data().admin) {
                            window.location.href = '/controlPanel/dashboard';
                        } else {
                            firebase.auth().signOut().then(function() {
                                mostrarMensaje('No eres admin puto');
                            }).catch(function(error) {	
                                console.log(error);
                            });
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

                setMensaje(errorMessage);
                setTimeout(() => {
                    setMensaje(null);
                }, 5000);
            });
        }
    });

    const mostrarMensaje = () => {
        return (
            <div className="alert alert-warning" role="alert">
                {mensaje}
            </div>
        );
    }

    return(
        <Layout>
            <div className="container-fluid" style={{height: '99.5vh', backgroundColor: 'white'}}>
                <div className="row h-100 justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-12 my-auto">
                        <div className="card mb-0">
                            <form id="login" onSubmit = {formikLogin.handleSubmit}>
                                <div className="card-header text-center">
                                    <h3>Inicia sesión</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label text-dark">Correo electrónico</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="ej: jhon.doe@example.com" onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} value={formikLogin.values.email}/>
                                        {
                                            (formikLogin.touched.email && formikLogin.errors.email) ? 
                                            (<div className="alert alert-warning" role="alert">{formikLogin.errors.email}</div>) : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label text-dark">Contraseña</label>
                                        <input type="password" id="password" name="password"  className="form-control" onChange={formikLogin.handleChange} onBlur={formikLogin.handleBlur} value={formikLogin.values.password}/>
                                        {
                                            (formikLogin.touched.password && formikLogin.errors.password) ? 
                                            (<div className="alert alert-warning" role="alert">{formikLogin.errors.password}</div>) : null
                                        }
                                    </div>
                                    {mensaje && mostrarMensaje()}
                                    <div className="form-group">
                                        <label className="custom-control custom-checkbox">
                                            <a href="forgot-password.html" className="float-right small text-dark mt-1">Olvidé la contraseña</a>
                                            <input type="checkbox" className="custom-control-input"/>
                                            <span className="custom-control-label text-dark">Recordarme</span>
                                        </label>
                                    </div>
                                    <div className="form-footer mt-2">
                                        <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default index;