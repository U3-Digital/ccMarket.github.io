import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from '../firebase';

const NuevaCategoria = () => {
    const [mensaje, setmensaje] = useState(null);
    const [image, setImage] = useState(null);
    const database = firebase.firestore().collection('categorias');
    const storageRef = firebase.storage().ref('categorias');

    const formikNuevaCategoria = useFormik({
        initialValues: {
            name: '',
            photo: null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es necesario'),
            photo: Yup.mixed()
        }),
        onSubmit: async valores => {
            const {name} = valores;

            const referencia = await database.add({
                nombre: name
            });

            storageRef.child(referencia.id).put(image);
          

        }
    }) 

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
                            <h3>Nueva categoria</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="dashboard"><i className="fas fa-home"></i></a></li>
                                <li className="breadcrumb-item">Categorias</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-12">
                            <form className="card" id="newAdmin" onSubmit={formikNuevaCategoria.handleSubmit}>
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Añadir un nuevo administrador</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="#" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="#" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Nombre</label>
                                                <input id="name" name="name" className="form-control" type="text" placeholder="Nombre de la categoria" onChange={formikNuevaCategoria.handleChange} onBlur={formikNuevaCategoria.handleBlur} value={formikNuevaCategoria.values.name}/>
                                                {
                                                    formikNuevaCategoria.touched.name && formikNuevaCategoria.errors.name ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikNuevaCategoria.errors.name}
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Imagen</label>
                                                <input id="photo" name="photo" className="form-control" type="file"  onChange={(e) => {formikNuevaCategoria.handleChange; setImage(e.target.files[0]);}} onBlur={formikNuevaCategoria.handleBlur} value={formikNuevaCategoria.values.email}/>
                                                {
                                                    formikNuevaCategoria.touched.photo && formikNuevaCategoria.errors.photo ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">
                                                            {formikNuevaCategoria.errors.photo}
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
}

export default NuevaCategoria; 