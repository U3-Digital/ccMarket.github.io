import React from 'react';
import Resultados from './Resultados';

const Busquedas = ({busqueda,tipo}) => {
    return (
        <div>
            <Resultados busqueda = {busqueda} tipo = {tipo}/>
        </div>
    );
};

export default Busquedas;