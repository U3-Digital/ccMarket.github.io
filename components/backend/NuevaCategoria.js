import React, {useState,useContext} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from '../firebase';
import Swal from 'sweetalert2';
import BackEndContext from '../../context/backend/BackEndContext';
import ProgressBar from '@ramonak/react-progress-bar';
import { useMutation, gql } from '@apollo/client';

const AGREGAR_CATEGORIA = gql`
mutation nuevaCategoria($input: CategoriaInput!) {
  nuevaCategoria(input: $input) {
    id
    categoria
  }
}
`;

const NuevaCategoria = () => {
    const backendContext = useContext(BackEndContext);
    const {cambioPantalla} = backendContext;
    const [mensaje, setmensaje] = useState(null);
    const [muestraProgressBar , setMuestraProgressBar] = useState(null)
    const [loadImage, setLoadImage] = useState("../backend/assets/images/avtar/7.jpg");
    const [image, setImage] = useState(null);
    const storageRef = firebase.storage().ref('categorias');

    const [agregarCategoria] = useMutation(AGREGAR_CATEGORIA);

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
            const { name } = valores;

            const { data } = await agregarCategoria({
              variables: {
                input: {
                  categoria: name
                }
              }
            });

            console.log(data.nuevaCategoria.id);

           /*  const referencia = await database.add({
                nombre: name
            }); */

            let uploadTask =  storageRef.child(data.nuevaCategoria.id).put(image);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', function(snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setMuestraProgressBar(progress);
                switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
            }, function(error) {
              console.log(error);
                // Handle unsuccessful uploads
            }, function() {
                    formikNuevaCategoria.resetForm();
                    setMuestraProgressBar(null);
                    Swal.fire(
                        'Agregada!',
                        'La categoría se agregó con exito',
                        'success'
                    );
                    cambioPantalla("ListaCategoria");
            });


            

        }
    }) 

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setLoadImage(reader.result);
            setImage(e.target.files[0]);
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    
      const mostrarProgressBar = () =>{
          return(
            <div className="form-group mb-3">
                <label className="form-label">Cargando imagen</label>
                <ProgressBar bgcolor="#7366FF" completed={Math.floor(muestraProgressBar)}/>
            </div>
          )
      }

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
                                      </div>
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="form-group mb-3">
                                            <label className="form-label">Imagen</label>
                                            <input id="photo" name="photo" accept="image/*" className="form-control" type="file"  onChange={(e) => {formikNuevaCategoria.handleChange; imageHandler(e)}} onBlur={formikNuevaCategoria.handleBlur} value={formikNuevaCategoria.values.email}/>
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
                                    <div className="col-md-6 col-lg-6 col-12 text-center">
                                      <img className="m-r-15 rounded-circle " style={{height: '20vh'}} src={loadImage}/>
                                    </div> 
                                  </div>
                                    {/* <div className="row">
                                        <div className="col-md-5 col-lg-5 col-12 align-self-center">
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
                                        <div className="col-md-4 col-lg-4 col-12 align-self-center">
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
                                        <div className="col-md-3 col-lg-3 col-12">
                                          <img className="img-110 m-r-15 rounded-circle " src={image}/>
                                        </div>
                                    </div> */}
                                    
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NuevaCategoria; 