import React, { useState, useContext } from 'react';
import { Formik, useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../firebase';
import Swal from 'sweetalert2';
import ProgressBar from '@ramonak/react-progress-bar';
import { useQuery, useMutation, gql } from '@apollo/client';

const OBTENER_CATEGORIA = gql`
query obtenerCategoria($id: ID!) {
  obtenerCategoria(id: $id) {
    id
    categoria
  }
}
`;

const ACTUALIZAR_CATEGORIA = gql`
mutation actualizarCategoria($id: ID!, $input: CategoriaInput!) {
  actualizarCategoria(id: $id, input: $input) {
    id
    categoria
  }
}
`;

const EditarCategoria = () => {
  const backendContext = useContext(BackEndContext);

  const { idEdita, cambioPantalla } = backendContext;

  const { data, loading, error } = useQuery(OBTENER_CATEGORIA, {
    variables: {
      id: idEdita
    }
  });
  const [actualizarCategoria] = useMutation(ACTUALIZAR_CATEGORIA);

  const [mensaje, setMensaje] = useState(null);
  const [muestraProgressBar, setMuestraProgressBar] = useState(null)
  const [changePhoto, setchangePhoto] = useState(false);
  const [categoriaActual, setcategoriaActual] = useState({ nombre: '' });
  const db = firebase.firestore().collection('categorias').doc(idEdita);
  const [loadImage, setLoadImage] = useState("../backend/assets/images/avtar/7.jpg");
  const [image, setImage] = useState(null);
  const storageRef = firebase.storage().ref(`categorias/${idEdita}`);

  if (loading) {
    return 'Cargando...';
  }
  
  if (categoriaActual.nombre === '') {
    const { obtenerCategoria } = data;
    const ObjCategoria = {
      name: obtenerCategoria.categoria,
      photo: null
    };
    storageRef.getDownloadURL().then((url) => {
      setLoadImage(url);
    }).catch((error) => {
      console.log(error.code);
    })
    setcategoriaActual(ObjCategoria);
  }
 
  

  const schemaValidation = Yup.object({
    name: Yup.string().required('El nombre es necesario'),
    photo: Yup.mixed()
  });

  const actualizaInfoCategoria = async (valores) => {
    const { name } = valores;
    const resultado = await actualizarCategoria({
      variables: {
        id: idEdita,
        input: {
          categoria: name
        }
      }
    });
    console.log(resultado);

    if (changePhoto) {
      const uploadTask = storageRef.put(image);
      uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setMuestraProgressBar(progress);
        switch (snapshot.state) {

        }
      }, (error) => {
        console.log(error);
      }, () => {
        setMuestraProgressBar(null);
        Swal.fire({
          title: '¡Categoría actualizada!',
          text: 'La categoría fue actualizada exitosamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((value) => {
          cambioPantalla('ListaCategoria');
        })
      });
    }

  }

  const mostrarProgressBar = () => {
    return (
      <div className="form-group mb-3">
        <label className="form-label">Cargando imagen</label>
        <ProgressBar bgcolor="#7366FF" completed={Math.floor(muestraProgressBar)} />
      </div>
    )
  }

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLoadImage(reader.result);
        setImage(e.target.files[0]);
        setchangePhoto(true)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  const mostrarMensaje = () => {
    return (
      <div className="alert alert-secondary mt-1 ml-5 mr-5 p-2 text-center" role="alert">
        {mensaje}
      </div>
    )
  };

  if (loading) {
    return null;
  }

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
              <Formik
                validationSchema={schemaValidation}
                enableReinitialize
                initialValues={categoriaActual}
                onSubmit={(valores, funciones) => {
                  actualizaInfoCategoria(valores)
                }}
              >
                {props => {
                  return (
                    <form className="card" id="newAdmin" onSubmit={props.handleSubmit}>
                      <div className="card-header">
                        <h4 className="card-title mb-0">Añadir un nueva categoría</h4>
                        <div className="card-options"><a className="card-options-collapse" href="#" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="#" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-lg-6 col-12">
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group mb-3">
                                  <label className="form-label">Nombre</label>
                                  <input id="name" name="name" className="form-control" type="text" placeholder="Nombre de la categoria" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.name} />
                                  {
                                    props.touched.name && props.errors.name ? (
                                      <div className="alert alert-secondary mt-3 p-2" role="alert">
                                        {props.errors.name}
                                      </div>
                                    ) : null
                                  }
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group mb-3">
                                  <label className="form-label">Imagen</label>
                                  <input id="photo" name="photo" accept="image/*" className="form-control" type="file" onChange={(e) => { props.handleChange; imageHandler(e) }} onBlur={props.handleBlur} value={props.values.email} />
                                  {
                                    props.touched.photo && props.errors.photo ? (
                                      <div className="alert alert-secondary mt-3 p-2" role="alert">
                                        {props.errors.photo}
                                      </div>
                                    ) : null
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-12 text-center">
                            <img className="m-r-15 rounded-circle " style={{ height: '20vh' }} src={loadImage} />
                          </div>
                        </div>
                      </div>
                      {mensaje && mostrarMensaje()}
                      {muestraProgressBar && mostrarProgressBar()}
                      <div className="card-footer">
                        <div className="row justify-content-center">
                          <div className="col-md-4 col-lg-4 col-10">
                            <button className="btn btn-primary btn-block" type="submit">Guardar categoría</button>
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
  )

}

export default EditarCategoria;