import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditAdmin = () => {

    const [mensaje, setMensaje] = useState(null);
    
    const formikEditAdmin = useFormik({
        initialValues: {
            name: 'pedic',
            email: 'pedic@pedic.com',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es necesario'),
            email: Yup.string().email('El correo no es válido').required('El correo es necesario'),
            password: Yup.string(),
            confirmPassword: Yup.string()
        }),
        onSubmit: async valores => {
            const { name, email, password, confirmPassword } = valores;

            if (password === confirmPassword) {

            } else if (password || confirmPassword) {
                setMensaje('Introduzca una contraseña y confírmela');
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
                            <form className="card" id="editAdmin" onSubmit={formikEditAdmin.handleSubmit}>
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Editar un administrador</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Nombre</label>
                                                <input id="name" name="name" className="form-control" type="text" placeholder="Juan Pérez" onChange={formikEditAdmin.handleChange} onBlur={formikEditAdmin.handleBlur} value={formikEditAdmin.values.name}/>
                                                {
                                                    formikEditAdmin.touched.name && formikEditAdmin.errors.name ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikEditAdmin.errors.name}
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Correo electrónico</label>
                                                <input id="email" name="email" className="form-control" type="email" placeholder="ejemplo@ejemplo.com" onChange={formikEditAdmin.handleChange} onBlur={formikEditAdmin.handleBlur} value={formikEditAdmin.values.email}/>
                                                {
                                                    formikEditAdmin.touched.email && formikEditAdmin.errors.email ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikEditAdmin.errors.email}
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
                                                <input id="password" name="password" className="form-control" type="password" onChange={formikEditAdmin.handleChange} onBlur={formikEditAdmin.handleBlur} value={formikEditAdmin.values.password}/>
                                                {
                                                    formikEditAdmin.touched.password && formikEditAdmin.errors.password ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikEditAdmin.errors.password}
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Confirmar contraseña</label>
                                                <input id="confirmPassword" name="confirmPassword" className="form-control" type="password" onChange={formikEditAdmin.handleChange} onBlur={formikEditAdmin.handleBlur} value={formikEditAdmin.values.confirmPassword}/>
                                                {
                                                    formikEditAdmin.touched.confirmPassword && formikEditAdmin.errors.confirmPassword ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikEditAdmin.errors.confirmPassword}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditAdmin;