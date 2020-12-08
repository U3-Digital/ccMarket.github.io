import {
    CAMBIO_PANTALLA,
    CAMBIO_EDITA_PANTALLA
}from '../../types/backend'

const BackEndReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case CAMBIO_PANTALLA:
            return{
                nombre: action.payload
            }
        case CAMBIO_EDITA_PANTALLA:
            return{
                nombre: action.payload.nombre,
                idEdita: action.payload.id
            }
        default:
            return state;
    }
}

export default BackEndReducer;