import {
	MODIFICAR_NOMBRE,
	MODIFICAR_DIRECCION,
	MODIFICAR_CATEGORIA,
	MODIFICAR_DATOS,
	CARGAR_EMPRESAS,
	SET_STATUS,
	DETALLES_PANTALLA
} from '../../types';

const BusquedaReducer = (state, action) => {
	switch (action.type) {
		case MODIFICAR_DATOS:
			return {
				...state,
				nombre: action.payload.nombre,
				direccion: action.payload.direccion,
				categoria: action.payload.categoria,
				busqueda: action.payload.busqueda,
                status: false,
                nombrePantalla: action.payload.nombrePantalla
			};
		case CARGAR_EMPRESAS:
			return {
				...state,
				negocios: action.payload
			};

		case SET_STATUS:
			return {
				...state,
				status: action.payload
			};

		case DETALLES_PANTALLA:
			return {
				...state,
				idDetalles: action.payload.idDetalles,
				nombrePantalla: action.payload.nombrePantalla
			};
		default:
			return state;
	}
};

export default BusquedaReducer;
