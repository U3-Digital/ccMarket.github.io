import {
    MODIFICAR_NOMBRE,
    MODIFICAR_DIRECCION,
    MODIFICAR_CATEGORIA,
    MODIFICAR_DATOS,
    CARGAR_EMPRESAS,
    SET_STATUS
} from '../../types';

const BusquedaReducer = (state, action) => { 
    switch(action.type){
        case MODIFICAR_DATOS:
            return{
                ...state,
                nombre: action.payload.nombre,
                direccion: action.payload.direccion,
                categoria: action.payload.categoria,
                busqueda:action.payload.busqueda,
                status: false
            }
        case CARGAR_EMPRESAS:
            return{
                ...state,
                negocios: action.payload
            }

        case SET_STATUS:
            return{
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
};

export default BusquedaReducer;