import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Label from './Label';
import firebase from '../firebase';

const NuevoNegocio = () => {
    const [loading, setLoading] = useState(true);
    const [categoriasPrincipales, setCategoriasPrincipales] = useState([]);
    const database = firebase.firestore().collection('negocios');
    const categoriasDatabase = firebase.firestore().collection('categorias');
    const [mensaje, setMensaje] = useState(null);

    const [categorias, setCategorias] = useState([]);
    const [palabras, setPalabras] = useState([]);

    let tempCategorias = [];
    let tempCategoriasPrincipales = [];
    let tempPalabras = [];

    if(loading){
        categoriasDatabase.get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
          snapshot.forEach(doc => {
            tempCategoriasPrincipales.push(doc);
          });
          setCategoriasPrincipales(tempCategoriasPrincipales);
          setLoading(false);
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });

    }



    const agregarCategoria = (event) => {
        const categoria = event.target.value;
        tempCategorias = categorias.slice();
        if (categoria && !categorias.includes(categoria)) {
            tempCategorias.push(categoria);
        }

        setCategorias(tempCategorias);
        insertIntoInput(tempCategorias, 'categorias');
    };

    const agregarPalabra = (event) => {
        if (event.key === ' ' || event.key === ',' || event.key === 'Enter') {
            let palabra = event.target.value;
            tempPalabras = palabras.slice();
            if (palabra.indexOf(',') !== -1) {
                palabra = palabra.replace(',', '');
            }

            if (palabra.trim() && !palabras.includes(palabra)) {
                tempPalabras.push(palabra);
            }
            setPalabras(tempPalabras);
            event.target.value = '';
            insertIntoInput(tempPalabras, 'palabras');
        }
        
    };

    const formikNuevoNegocio = useFormik({
        initialValues: {
            nombreNegocio: '',
            direccionNegocio: '',
            nombreResponsable: '',
            numeroResponsable: '',
            emailResponsable: '',
            categorias: '',
            palabrasClave: '',
            horarioApertura: '',
            horarioCierre: ''
        },
        validationSchema: Yup.object({
            nombreNegocio: Yup.string().required('El nombre es necesario'),
            direccionNegocio: Yup.string().required('La dirección es necesaria'),
            nombreResponsable: Yup.string().required('El nombre del responsable es necesario'),
            numeroResponsable: Yup.string().min(10, 'El número de teléfono debe de tener 10 dígitos').max(10, 'El número de teléfono debe de tener 10 dígitos').required('El teléfono es necesario'),
            emailResponsable: Yup.string().email('El correo no es válido').required('El correo es necesario'),
            categorias: Yup.string().required('Seleccione al menos una categoría'),
            palabrasClave: Yup.string().required('Introduzca al menos una palabra clave'),
            horarioApertura: Yup.string().required('El horario de apertura es necesario'),
            horarioCierre: Yup.string().required('El horario de cierre es necesario'),
        }),
        onSubmit: async valores => {
            const { nombreNegocio, direccionNegocio, nombreResponsable, numeroResponsable, emailResponsable, categorias, palabrasClave, horarioApertura, horarioCierre } = valores;

            await database.add({
                nombreNegocio,
                direccionNegocio,
                nombreResponsable,
                numeroResponsable,
                emailResponsable,
                categorias,
                palabrasClave,
                horarioApertura,
                horarioCierre
            }, { merge: false }).then((result) => {

                formikNuevoNegocio.resetForm();

                setCategorias([]);
                insertIntoInput([], 'categorias');

                setPalabras([]);
                insertIntoInput([], 'palabras');

                setMensaje('Negocio agregado exitosamente');
                setTimeout(() => {
                    setMensaje(null);
                }, 5000);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setMensaje(`${errorCode} - ${errorMessage}`);
                setTimeout(() => {
                    setMensaje(null);
                }, 5000);
            });
        }
    });

    const mostrarMensaje = () => {
        return (
            <div className="alert alert-secondary mt-1 ml-5 mr-5 p-2 text-center" role="alert">
                {mensaje}
            </div>
        )
    };

    function insertIntoInput(array, element) {
        let texto = '';

        for (let i = 0; i < array.length; i++) {
            texto += `${array[i]}-`;
        }

        console.log(texto);
        
        switch (element) {
            case 'categorias':
                formikNuevoNegocio.values.categorias = texto;
                formikNuevoNegocio.touched.categorias = false;
                break;
            case 'palabras':
                formikNuevoNegocio.values.palabrasClave = texto;
                formikNuevoNegocio.touched.palabrasClave = false;
                break;
            default:
                console.log('nada');
                break;
        }

    }

    function deleteCategoria(text) {
        const index = categorias.indexOf(text);
        tempCategorias = categorias.slice();
        tempCategorias.splice(index, 1);

        setCategorias(tempCategorias);
        insertIntoInput(tempCategorias, 'categorias');
    }
    
    function deletePalabra(text) {
        const index = palabras.indexOf(text);
        tempPalabras = palabras.slice();
        tempPalabras.splice(index, 1);

        setPalabras(tempPalabras);
        insertIntoInput(tempPalabras, 'palabras');
    }

    return (
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Nuevo negocio</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i className="fas fa-home"></i></a>
                                </li>
                                <li className="breadcrumb-item">Nuevo negocio</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="col-12">
                        <div className="card" id="nuevoNegocio">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Nuevo negocio</h4>
                            </div>
                            <form id="nuevoNegocio" onSubmit={formikNuevoNegocio.handleSubmit}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            {/* <form className="dropzone digits" id="singleFileUpload" action="/upload.php">
                                                <div className="dz-message needsclick"><i className="icon-cloud-up"></i>
                                                    <h6>Drop files here or click to upload.</h6><span className="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Nombre del negocio</label>
                                                <input id="nombreNegocio" name="nombreNegocio" className="form-control" type="text" placeholder="Frutería Juan" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.nombreNegocio}/>
                                                {
                                                    formikNuevoNegocio.touched.nombreNegocio && formikNuevoNegocio.errors.nombreNegocio ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.nombreNegocio}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Dirección del negocio</label>
                                                <input id="direccionNegocio" name="direccionNegocio" className="form-control" type="text" placeholder="Calle ejemplo #123" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.direccionNegocio}/>
                                                {
                                                    formikNuevoNegocio.touched.direccionNegocio && formikNuevoNegocio.errors.direccionNegocio ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.direccionNegocio}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Nombre del responsable</label>
                                                <input id="nombreResponsable" name="nombreResponsable" className="form-control" type="text" placeholder="Juan Pérez" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.nombreResponsable}/>
                                                {
                                                    formikNuevoNegocio.touched.nombreResponsable && formikNuevoNegocio.errors.nombreResponsable ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.nombreResponsable}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Número del responsable</label>
                                                <input id="numeroResponsable" name="numeroResponsable" className="form-control" type="text" placeholder="6251231234" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.numeroResponsable}/>
                                                {
                                                    formikNuevoNegocio.touched.numeroResponsable && formikNuevoNegocio.errors.numeroResponsable ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.numeroResponsable}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Correo electrónico del responsable</label>
                                                <input id="emailResponsable" name="emailResponsable" className="form-control" type="email" placeholder="juan.perez@correo.com" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.emailResponsable}/>
                                                {
                                                    formikNuevoNegocio.touched.emailResponsable && formikNuevoNegocio.errors.emailResponsable ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.emailResponsable}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Categoría</label>
                                                <select className="form-control" onChange={() => agregarCategoria(event)}>
                                                    <option value="">Seleccione una categoría</option>
                                                    {
                                                        categoriasPrincipales.map((categoria) => (
                                                            <option key={categoria.id} value={categoria.data().nombre}>{categoria.data().nombre}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            {
                                                formikNuevoNegocio.touched.categorias && formikNuevoNegocio.errors.categorias ? (
                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.categorias}</div>
                                                ) : null
                                            }
                                            <div>
                                                {
                                                    categorias.map((categoria) => (
                                                        <Label
                                                            key={Math.random()}
                                                            texto={categoria}
                                                            click={deleteCategoria}/>
                                                    ))
                                                }
                                            </div>
                                            <input style={{opacity: '0.0'}} id="categorias" name="categorias" type="text" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.categorias}/>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Palabras clave</label>
                                                <input className="form-control" onKeyUp={() => agregarPalabra(event)}/>
                                            </div>
                                            {
                                                formikNuevoNegocio.touched.palabrasClave && formikNuevoNegocio.errors.palabrasClave ? (
                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.palabrasClave}</div>
                                                ) : null
                                            }
                                            <div>
                                                {
                                                    palabras.map((palabra) => (
                                                        <Label
                                                            key={Math.random()}
                                                            texto={palabra}
                                                            click={deletePalabra}/>
                                                    ))
                                                }
                                            </div>
                                            <input style={{opacity: '0.0'}} id="palabrasClave" name="palabrasClave" type="text" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.palabrasClave}/>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Horario de apertura</label>
                                                <div className="input-group clockpicker">
                                                    <input id="horarioApertura" name="horarioApertura" className="form-control" type="text" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.horarioApertura}/><span className="input-group-addon"><span className="glyphicon glyphicon-time"></span></span>
                                                </div>
                                                {
                                                    formikNuevoNegocio.touched.horarioApertura && formikNuevoNegocio.errors.horarioApertura ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.horarioApertura}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Horario de cierre</label>
                                                <div className="input-group clockpicker">
                                                    <input id="horarioCierre" name="horarioCierre" className="form-control" type="text" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.horarioCierre}/><span className="input-group-addon"><span className="glyphicon glyphicon-time"></span></span>
                                                </div>
                                                {
                                                    formikNuevoNegocio.touched.horarioCierre && formikNuevoNegocio.errors.horarioCierre ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.horarioCierre}</div>
                                                    ) : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {mensaje && mostrarMensaje()}
                                </div>
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

export default NuevoNegocio;
/* Nombre-
    Direccion-
    Categoria-
    Palabras clave-
    Responsable-
    Numero del responsable-
    Correo del responsable-
    Horario-
    Valoracion+
    Productos+
    Fotos+
     */