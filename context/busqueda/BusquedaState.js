import React, {useReducer} from 'react';
import BusquedaContext from './BusquedaContext';

import BusquedaReducer from './BusquedaReducer'; 

import {
    MODIFICAR_NOMBRE,
    MODIFICAR_DIRECCION,
    MODIFICAR_CATEGORIA,
    MODIFICAR_DATOS,
    CARGAR_EMPRESAS
} from '../../types';

const BusquedaState = ({children}) =>{
    //State de Busqueda
    const initialState = {
        nombre: "",
        direccion: "",
        categoria: "",
        busqueda: false,
        negocios: null
    }

    const [state, dispatch ] = useReducer(BusquedaReducer , initialState);
    //modificar el nombre
    const modificabusqueda = valores =>{
       dispatch({
           type: MODIFICAR_DATOS,
           payload: valores
       })
    }


    const cargarNegocios = negocios =>{
        dispatch({
            type:CARGAR_EMPRESAS,
            payload:negocios
        })
    }

    return(
        <BusquedaContext.Provider
            value = {{
                nombre: state.nombre,
                direccion: state.direccion,
                categoria: state.categoria,
                busqueda: state.busqueda,
                negocios: state.negocios,
                modificabusqueda,
                cargarNegocios
            }}
        >
            {children}
        </BusquedaContext.Provider>
    );
}

export default BusquedaState;