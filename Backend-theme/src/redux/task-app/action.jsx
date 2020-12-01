import {NEW_TASK,REMOVE_TASK} from '../actionTypes'

export const newTask = (newtaskdata) => {
    return ({
        type: NEW_TASK,
        payload: {newtaskdata}
    })

}

export const removeTask = (id) => {
    return ({
        type: REMOVE_TASK,
        id
    })

}


