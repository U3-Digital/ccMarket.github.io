import {
    MODIFICAR_NOMBRE,
    MODIFICAR_DIRECCION,
    MODIFICAR_CATEGORIA,
    MODIFICAR_DATOS
} from '../../types';

const BusquedaReducer = (state, action) => {
    switch(action.type){
        case MODIFICAR_DATOS:
            console.log(action.payload);
            return{
                nombre: action.payload.nombre,
                direccion: action.payload.direccion,
                categoria: action.payload.categoria,
                busqueda:action.payload.busqueda
            }

        default:
            return state;
    }
};

export default BusquedaReducer;