import React, { useState } from 'react';
import Label from './Label';

const NuevoNegocio = () => {

    const [categorias, setCategorias] = useState([]);
    const [palabras, setPalabras] = useState([]);

    let tempCategorias = [];
    let tempPalabras = [];

    const agregarCategoria = (event) => {
        const categoria = event.target.value;
        tempCategorias = categorias.slice();
        if (categoria) {
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

            if (palabra.trim()) {
                tempPalabras.push(palabra);
            }
            setPalabras(tempPalabras);
            event.target.value = '';
        }
        
    };

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
                        <form className="card" id="nuevoNegocio">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Nuevo negocio</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Nombre del negocio</label>
                                            <input id="nameNegocio" name="nameNegocio" className="form-control" type="text" placeholder="Frutería Juan"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Dirección del negocio</label>
                                            <input id="direccionNegocio" name="direccionNegocio" className="form-control" type="text" placeholder="Calle ejemplo #123"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Nombre del responsable</label>
                                            <input id="nameResponsable" name="nameResponsable" className="form-control" type="text" placeholder="Juan Pérez"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Número del responsable</label>
                                            <input id="numberResponsable" name="numberResponsable" className="form-control" type="text" placeholder="625-123-1234"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Correo electrónico del responsable</label>
                                            <input id="emailResponsable" name="emailResponsable" className="form-control" type="email" placeholder="juan.perez@correo.com"/>
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
                                                        texto={categoria}/>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-12">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Palabras clave</label>
                                            <input id="palabrasClave" name="palabrasClave" type="text" className="form-control" onKeyUp={() => agregarPalabra(event)}/>
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
                                        <button className="btn btn-primary btn-block" type="button">Guardar cambios</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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