import React, {useReducer} from 'react';
import BusquedaContext from './BusquedaContext';

import BusquedaReducer from './BusquedaReducer'; 

import {
    MODIFICAR_NOMBRE,
    MODIFICAR_DIRECCION,
    MODIFICAR_CATEGORIA,
    MODIFICAR_DATOS,
    CARGAR_EMPRESAS,
    SET_STATUS,
    DETALLES_PANTALLA
} from '../../types';

const BusquedaState = ({children}) =>{
    //State de Busqueda
    const initialState = {
        nombre: "",
        direccion: "",
        tipo: "",
        busqueda: false,
        status: false,
        negocios: null,
        nombrePantalla: "index",
        idDetalles : null
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

    const cambiaStatus = status =>{
        dispatch({
            type:SET_STATUS,
            payload:status
        })
    }

    const detallesPantalla = valores => {
        dispatch({
            type: DETALLES_PANTALLA,
            payload: valores
        })
    }

    return(
        <BusquedaContext.Provider
            value = {{
                nombre: state.nombre,
                direccion: state.direccion,
                tipo: state.tipo,
                busqueda: state.busqueda,
                negocios: state.negocios,
                status: state.status,
                nombrePantalla: state.nombrePantalla,
                idDetalles : state.idDetalles,
                modificabusqueda,
                cargarNegocios,
                cambiaStatus,
                detallesPantalla
            }}
        >
            {children}
        </BusquedaContext.Provider>
    );
}

export default BusquedaState;