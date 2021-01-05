import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Label from './Label';
import firebase from '../firebase';
import Categoria from '../Categoria';
import Swal from 'sweetalert2';

import Dropzone, { useDropzone } from 'react-dropzone';

const NuevoNegocio = () => {
    const [loading, setLoading] = useState(true);
    const [categoriasPrincipales, setCategoriasPrincipales] = useState([]);
    const database = firebase.firestore().collection('negocios');
    const categoriasDatabase = firebase.firestore().collection('categorias');
    const realbd = firebase.database().ref('negocios2');
    const storageRef = firebase.storage().ref('negocios');
    const [mensaje, setMensaje] = useState(null);

    const [categorias, setCategorias] = useState([]);
    const [palabras, setPalabras] = useState([]);

    let tempCategorias = [];
    let tempCategoriasPrincipales = [];
    let tempPalabras = [];

    if (loading) {
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
            telefonoNegocio: '',
            nombreResponsable: '',
            numeroResponsable: '',
            emailResponsable: '',
            categorias: '',
            palabrasClave: '',
            horarioApertura: '',
            horarioCierre: '',
            cliente: false,
            descripcionNegocio: ''
        },
        validationSchema: Yup.object({
            nombreNegocio: Yup.string().required('El nombre es necesario'),
            direccionNegocio: Yup.string().required('La dirección es necesaria'),
            telefonoNegocio: Yup.string().min(10, 'El número de teléfono debe de tener 10 dígitos').max(10, 'El número de teléfono debe de tener 10 dígitos').required('El teléfono del negocio es necesario'),
            nombreResponsable: Yup.string().required('El nombre del responsable es necesario'),
            numeroResponsable: Yup.string().min(10, 'El número de teléfono debe de tener 10 dígitos').max(10, 'El número de teléfono debe de tener 10 dígitos').required('El teléfono del responsable es necesario'),
            emailResponsable: Yup.string().email('El correo no es válido').required('El correo es necesario'),
            categorias: Yup.string().required('Seleccione al menos una categoría'),
            palabrasClave: Yup.string().required('Introduzca al menos una palabra clave'),
            horarioApertura: Yup.string().required('El horario de apertura es necesario'),
            horarioCierre: Yup.string().required('El horario de cierre es necesario'),
            cliente: Yup.boolean(),
            descripcionNegocio: Yup.string().required('La descripción es necesaria')
        }),
        onSubmit: async valores => {
            const { nombreNegocio, direccionNegocio, telefonoNegocio, nombreResponsable, numeroResponsable, emailResponsable, categorias, palabrasClave, horarioApertura, horarioCierre, cliente, descripcionNegocio } = valores;
            console.log(valores);
            await database.add({
                nombreNegocio,
                direccionNegocio,
                telefonoNegocio,
                nombreResponsable,
                numeroResponsable,
                emailResponsable,
                categorias,
                palabrasClave,
                horarioApertura,
                horarioCierre,
                cliente,
                descripcionNegocio,
                noImagenes: files.length
            }, { merge: false }).then(async(result) => {
                console.log(result.id);
                const id = result.id;
                await realbd.child(result.id).set({
                    nombre: nombreNegocio,
                    cliente,
                    direccion: direccionNegocio,
                    categoria: categorias,
                    noValoraciones: 0,
                    telefono: telefonoNegocio,
                    ubicacion: "corredor",
                    valoracion: 5.0
                })
                formikNuevoNegocio.resetForm();

                let i = 1;

                files.forEach((file) => {
                  storageRef.child(`${id}/${i}`).put(file).then((result) => {
                    console.log('get subido');
                  }).catch((error) => {
                    console.log('gg jg diff');
                    console.log(error);
                  });
                  i++;
                });

                setCategorias([]);
                insertIntoInput([], 'categorias');

                setPalabras([]);
                insertIntoInput([], 'palabras');

                setFiles([]);

                Swal.fire({
                    title: '¡Negocio agregado exitosamente!',
                    icon: 'success',
                    iconColor: '#7366FF',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#7366FF'
                });

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

    /* Estilo de los thumbnails */

    const thumbnailsContainer = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: '1em'
    }
    
    const thumbnail = {
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginRight: 8,
      width: 100,
      height: 100,
      padding: 4,
      boxSizing: 'border-box'
    };

    const thumbnailInner = {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden'
    };

    const img = {
      display: 'block',
      width: 'auto',
      height: '100%'
    };

    
    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles);
        setFiles(acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });

    const thumbnails = files.map((file) => (
      <div style={thumbnail} key={file.name}>
        <div style={thumbnailInner}>
          <img style={img} src={file.preview}/>
        </div>
      </div>
    ));

    useEffect(() => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

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
                                          <section className="dropzone digits">
                                            <div {...getRootProps({className: 'dz-message needsClick'})}>
                                              <input {...getInputProps()}/>
                                              <i className="fas fa-cloud-upload-alt mb-1"></i>
                                              <h6>Arrastre las imágenes del negocio</h6><span className="note needsclick">(Máximo <strong>5</strong> imágenes)</span>
                                            </div>
                                          </section>
                                        </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-12">
                                        <aside style={thumbnailsContainer}>
                                          {thumbnails}
                                        </aside>
                                      </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-12">
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
                                        <div className="col-md-4 col-lg-4 col-12">
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
                                        <div className="col-md-4 col-lg-4 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Teléfono del negocio</label>
                                                <input id="telefonoNegocio" name="telefonoNegocio" className="form-control" type="text" placeholder="6251231234" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.telefonoNegocio}/>
                                                {
                                                    formikNuevoNegocio.touched.telefonoNegocio && formikNuevoNegocio.errors.telefonoNegocio ? (
                                                        <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.telefonoNegocio}</div>
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
                                        <div className="col-md-2 col-lg-2 col-12">
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
                                        <div className="col-md-2 col-lg-2 col-12">
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
                                        <div className="col-md-2 col-lg-2 col-12">
                                            <div className="form-group mb-3">
                                                <div className="media" style={{marginTop: '1.8rem'}}>
                                                    <label className="col-form-label m-r-10">Cliente</label>
                                                    <div className="media-body text-right">
                                                    <label className="switch">
                                                        <input id="cliente" name="cliente" type="checkbox" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.cliente}/><span className="switch-state"></span>
                                                    </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-8 col-lg-8 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Descripción</label>
                                                <textarea id="descripcionNegocio" name="descripcionNegocio" className="form-control" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.descripcionNegocio}></textarea>
                                            </div>
                                            {
                                                formikNuevoNegocio.touched.descripcionNegocio && formikNuevoNegocio.errors.descripcionNegocio ? (
                                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{formikNuevoNegocio.errors.descripcionNegocio}</div>
                                                ) : null
                                            }
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