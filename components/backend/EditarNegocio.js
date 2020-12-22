import React, { useState, useContext } from 'react';
import { Formik, useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import BackEndContext from '../../context/backend/BackEndContext';
import firebase from '../firebase';
import Label from './Label';
import Swal from 'sweetalert2';

const EditarNegocio = () => {

  const backendContext = useContext(BackEndContext);
  const { idEdita, cambioPantalla } = backendContext;

  const [mensaje, setMensaje] = useState(null);
  const [loading, setLoading] = useState(true);
  const [negocioActual, setNegocioActual] = useState({ nombreNegocio: '', direccionNegocio: '', nombreResponsable: '', numeroResponsable: '', emailResponsable: '', categorias: '', palabrasClave: '', horarioApertura: '', horarioCierre: '' })

  const [categorias, setCategorias] = useState([]);
  const [palabras, setPalabras] = useState([]);

  let tempCategorias = [];
  let tempPalabras = [];

  function agregarCategoria(event) {
    const categoria = event.target.value;
    tempCategorias = categorias.slice();
    if (categoria && !categorias.includes(categoria)) {
      tempCategorias.push(categoria);
    }

    setCategorias(tempCategorias);
    insertIntoInput(tempCategorias, 'categorias');
  }

  function agregarPalabra(event) {
    if (event.key === ' ' || event.key === ',' || event.key === 'Enter') {
      let palabra = event.target.value;
      tempPalabras = palabras.slice();
      if (palabra.indexOf(',' !== -1)) {
        palabra = palabra.replace(',', '');
      }

      if (palabra.trim() && !palabras.includes(palabra)) {
        tempPalabras.push(palabra);
      }
      setPalabras(tempPalabras);
      event.target.value = '';
      insertIntoInput(tempPalabras, 'palabras');
    }
  }

  function insertIntoInput(array, element) {
    let texto = '';
    for (let i = 0; i < array.length; i++) {
      texto += `${array[i]}-`;
    }
    const copy = { ...negocioActual };

    switch (element) {
      case 'categorias':
        copy.categorias = texto;
        setNegocioActual(copy);
        break;
      case 'palabras':
        copy.palabrasClave = texto;
        setNegocioActual(copy);
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

  const negocioQuery = firebase.firestore().collection('negocios').doc(idEdita);

  const schemaValidation = Yup.object({
    nombreNegocio: Yup.string().required('El nombre es necesario'),
    direccionNegocio: Yup.string().required('La dirección es necesaria'),
    nombreResponsable: Yup.string().required('El nombre del responsable es necesario'),
    numeroResponsable: Yup.string().min(10, 'El número de teléfono debe de tener 10 dígitos').max(10, 'El número de teléfono debe de tener 10 dígitos').required('El teléfono es necesario'),
    emailResponsable: Yup.string().email('El correo no es válido').required('El correo es necesario'),
    categorias: Yup.string().required('Seleccione al menos una categoría'),
    palabrasClave: Yup.string().required('Introduzca al menos una palabra clave'),
    horarioApertura: Yup.string().required('El horario de apertura es necesario'),
    horarioCierre: Yup.string().required('El horario de cierre es necesario')
  });

  if (loading) {
    negocioQuery.get().then((document) => {
      if (!document.exists) {
        console.log('No existe el documento con el id especificado');
      } else {
        const negocioObj = {
          nombreNegocio: document.data().nombreNegocio,
          direccionNegocio: document.data().direccionNegocio,
          nombreResponsable: document.data().nombreResponsable,
          numeroResponsable: document.data().numeroResponsable,
          emailResponsable: document.data().emailResponsable,
          categorias: document.data().categorias,
          palabrasClave: document.data().palabrasClave,
          horarioApertura: document.data().horarioApertura,
          horarioCierre: document.data().horarioCierre
        };

        tempCategorias = document.data().categorias.split('-').filter((element) => element != ''.trim());
        setCategorias(tempCategorias);

        tempPalabras = document.data().palabrasClave.split('-').filter((element) => element != ''.trim());
        setPalabras(tempPalabras);

        insertIntoInput(tempCategorias, 'categorias');
        insertIntoInput(tempPalabras, 'palabras');


        setNegocioActual(negocioObj);
        setLoading(false);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  function actualizarInfoNegocio(valores) {
    console.log(valores);
    const { nombreNegocio, direccionNegocio, nombreResponsable, numeroResponsable, emailResponsable, categorias, palabrasClave, horarioApertura, horarioCierre } = valores;
    /* negocioQuery.set({
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
      Swal.fire({
        title: '¡Negocio actualizado exitosamente!',
        icon: 'success',
        iconColor: '#7366FF',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#7366FF'
      }).then((value) => {
        cambioPantalla('ListaNegocios');
      });
    }).catch((error) => {
      console.log(error);
    }); */
  }

  function mostrarMensaje() {
    return (
      <div className="alert alert-secondary mt-1 ml-5 mr-5 p-2 text-center" role="alert">
        {mensaje}
      </div>
    )
  }

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-6">
              <h3>Editar negocio</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="dashboard"><i className="fas fa-home"></i></a>
                </li>
                <li className="breadcrumb-item">Editar negocio</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="edit-profile">
          <div className="row">
            <div className="col-12">
              <div className="card" id="editarNegocio">
                <div className="card-header">
                  <h4 className="card-title mb-0">Editar negocio</h4>
                </div>
                <Formik
                  validationSchema={schemaValidation}
                  emableReinitialize
                  initialValues={negocioActual}
                  onSubmit={(valores, funciones) => {
                    actualizarInfoNegocio(valores)
                  }}>

                  {props => {
                    return (
                      <form id="editarNegocio" onSubmit={props.handleSubmit}>
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
                          <br />
                          <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Nombre del negocio</label>
                                <input id="nombreNegocio" name="nombreNegocio" className="form-control" type="text" placeholder="Frutería Juan" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.nombreNegocio} />
                                {
                                  props.touched.nombreNegocio && props.errors.nombreNegocio ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.nombreNegocio}</div>
                                  ) : null
                                }
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Dirección del negocio</label>
                                <input id="direccionNegocio" name="direccionNegocio" className="form-control" type="text" placeholder="Calle ejemplo #123" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.direccionNegocio} />
                                {
                                  props.touched.direccionNegocio && props.errors.direccionNegocio ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.direccionNegocio}</div>
                                  ) : null
                                }
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-4 col-lg-4 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Nombre del responsable</label>
                                <input id="nombreResponsable" name="nombreResponsable" className="form-control" type="text" placeholder="Juan Pérez" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.nombreResponsable} />
                                {
                                  props.touched.nombreResponsable && props.errors.nombreResponsable ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.nombreResponsable}</div>
                                  ) : null
                                }
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Número del responsable</label>
                                <input id="numeroResponsable" name="numeroResponsable" className="form-control" type="text" placeholder="6251231234" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.numeroResponsable} />
                                {
                                  props.touched.numeroResponsable && props.errors.numeroResponsable ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.numeroResponsable}</div>
                                  ) : null
                                }
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Correo electrónico del responsable</label>
                                <input id="emailResponsable" name="emailResponsable" className="form-control" type="email" placeholder="juan.perez@correo.com" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.emailResponsable} />
                                {
                                  props.touched.emailResponsable && props.errors.emailResponsable ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.emailResponsable}</div>
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
                                  <option value="ah">ah</option>
                                  <option value="aha">aha</option>
                                </select>
                              </div>
                              {
                                props.touched.categorias && props.errors.categorias ? (
                                  <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.categorias}</div>
                                ) : null
                              }
                              <div>
                                {
                                  categorias.map((categoria) => (
                                    <Label
                                      key={Math.random()}
                                      texto={categoria}
                                      click={deleteCategoria} />
                                  ))
                                }
                              </div>
                              <input style={{ opacity: '0.0' }} id="categorias" name="categorias" type="text" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.categorias} />
                            </div>
                            <div className="col-md-3 col-lg-3 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Palabras clave</label>
                                <input className="form-control" onKeyUp={() => agregarPalabra(event)} />
                              </div>
                              {
                                props.touched.palabrasClave && props.errors.palabrasClave ? (
                                  <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.palabrasClave}</div>
                                ) : null
                              }
                              <div>
                                {
                                  palabras.map((palabra) => (
                                    <Label
                                      key={Math.random()}
                                      texto={palabra}
                                      click={deletePalabra} />
                                  ))
                                }
                              </div>
                              <input style={{ opacity: '0.0' }} id="palabrasClave" name="palabrasClave" type="text" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.palabrasClave} />
                            </div>
                            <div className="col-md-3 col-lg-3 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Horario de apertura</label>
                                <div className="input-group clockpicker">
                                  <input id="horarioApertura" name="horarioApertura" className="form-control" type="text" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.horarioApertura} /><span className="input-group-addon"><span className="glyphicon glyphicon-time"></span></span>
                                </div>
                                {
                                  props.touched.horarioApertura && props.errors.horarioApertura ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.horarioApertura}</div>
                                  ) : null
                                }
                              </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-12">
                              <div className="form-group mb-3">
                                <label className="form-label">Horario de cierre</label>
                                <div className="input-group clockpicker">
                                  <input id="horarioCierre" name="horarioCierre" className="form-control" type="text" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.horarioCierre} /><span className="input-group-addon"><span className="glyphicon glyphicon-time"></span></span>
                                </div>
                                {
                                  props.touched.horarioCierre && props.errors.horarioCierre ? (
                                    <div className="alert alert-secondary mt-3 p-2" role="alert">{props.errors.horarioCierre}</div>
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
                              <button className="btn btn-block btn-primary" type="submit">Guardar cambios</button>
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
      </div>
    </>
  );
};

export default EditarNegocio;