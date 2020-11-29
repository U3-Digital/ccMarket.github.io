import React from 'react';
import Resultado from './Resultado';

const ResultadosBusqueda = () => {

    const negocios = [
        {
            nombre: 'Negocio 1',
            categoria: 'Categoria 1'
        },
        {
            nombre: 'Negocio 2',
            categoria: 'Categoria 2'
        },
        {
            nombre: 'Negocio 3',
            categoria: 'Categoria 3'
        },
        {
            nombre: 'Negocio 4',
            categoria: 'Categoria 4'
        }
    ];

    return (
        <div className="d-md-flex">
            <div className="map-content-width vscroll card mb-0 br-0 mh-500">
                <div className="p-4">
                    {
                        negocios.map((negocio) => (
                            <Resultado
                                negocio={negocio}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ResultadosBusqueda;
