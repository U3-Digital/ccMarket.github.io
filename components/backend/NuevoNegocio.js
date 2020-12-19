import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Label from './Label';

const NuevoNegocio = () => {

    const [categorias, setCategorias] = useState([]);
    const [palabras, setPalabras] = useState([]);

    let tempCategorias = [];
    let tempPalabras = [];

    const agregarCategoria = (event) => {
        const categoria = event.target.value;
        tempCategorias = categorias.slice();
        if (categoria && !categorias.includes(categoria)) {
            tempCategorias.push(categoria);
        }

        setCategorias(tempCategorias);
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
        }
        
    };

    const formikNuevoNegocio = useFormik({
        initialValues: {
            nombreNegocio: '1',
            direccionNegocio: '1',
            nombreResponsable: '1',
            numeroResponsable: '0123456789',
            emailResponsable: 'correo@correo.com',
            categorias: '1',
            palabrasClave: '1',
            horarioApertura: '1',
            horarioCierre: '1'
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
        onSubmit: valores => {
            console.log(valores);
        }
    });

    return (
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Nuevo negocio</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="dashboard"><i data-feather="home"></i></a>
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
                                                <input id="numeroResponsable" name="numeroResponsable" className="form-control" type="text" placeholder="625-123-1234" onChange={formikNuevoNegocio.handleChange} onBlur={formikNuevoNegocio.handleBlur} value={formikNuevoNegocio.values.numeroResponsable}/>
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
                                                    <option value="ah">ah</option>
                                                    <option value="aha">aha</option>
                                                </select>
                                            </div>
                                            <div>
                                                {
                                                    categorias.map((categoria) => (
                                                        <Label
                                                            key={Math.random()}
                                                            texto={categoria}
                                                            
                                                            />
                                                        ))
                                                }
                                            </div>
                                            <input id="categorias" name="categorias" type="text" hidden defaultValue="categorias"/>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Palabras clave</label>
                                                <input className="form-control" onKeyUp={() => agregarPalabra(event)}/>
                                            </div>
                                            <div>
                                                {
                                                    palabras.map((palabra) => (
                                                        <Label
                                                            key={Math.random()}
                                                            texto={palabra}/>
                                                    ))
                                                }
                                            </div>
                                            <input id="palabrasClave" name="palabrasClave" type="text" hidden defaultValue="4a"/>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Horario de apertura</label>
                                                <div className="input-group clockpicker">
                                                    <input className="form-control" type="text"/><span className="input-group-addon"><span className="glyphicon glyphicon-time"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Horario de cierre</label>
                                                <div className="input-group clockpicker">
                                                    <input className="form-control" type="text"/><span className="input-group-addon"><span className="glyphicon glyphicon-time"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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