import React, {useReducer} from 'react';
import BackEndContext from './BackEndContext';
import BackEndReducer from './BackEndReducer';

import{
    CAMBIO_PANTALLA,
    CAMBIO_EDITA_PANTALLA
}from '../../types/backend';

const BackEndState = ({children}) => {
    //State de pantallas
    const initialState = {
        nombre: "Dashboard",
        idEdita: ""
    };

    const [state, dispatch] = useReducer(BackEndReducer,initialState);

    const cambioPantalla = pantalla =>{
        dispatch({
            type: CAMBIO_PANTALLA,
            payload: pantalla
        })
    }

    const editaPantalla = valores => {
        dispatch({
            type: CAMBIO_EDITA_PANTALLA,
            payload: valores
        })
    }
    return(
        <BackEndContext.Provider
            value = {{
                nombre: state.nombre,
                idEdita: state.idEdita,
                cambioPantalla,
                editaPantalla
            }}
        >
            {children}
        </BackEndContext.Provider>
    )
}

export default BackEndState;