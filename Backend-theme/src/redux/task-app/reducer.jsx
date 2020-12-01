import {NEW_TASK,REMOVE_TASK} from '../actionTypes'
import initialData from '../../data/task/data';
const initial_state = {
    task:initialData,
    newtaskdata:[],
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case NEW_TASK:
                state.newtaskdata.push({
                    id: state.newtaskdata.length + 1,
                    title: action.payload.newtaskdata.title,
                    desc: action.payload.newtaskdata.desc,
                    collection:action.payload.newtaskdata.collection
                })
                state.task.push({
                    id: state.newtaskdata.length + 1,
                    title: action.payload.newtaskdata.title,
                    desc: action.payload.newtaskdata.desc,
                    collection:action.payload.newtaskdata.collection
                })
            return {...state,newtaskdata:state.newtaskdata,task:state.task};

        case REMOVE_TASK:
                let new_task = state.newtaskdata.filter(item=> action.id !== item.id)
                let created_task = state.task.filter(item=> action.id !== item.id)
                return{...state,newtaskdata: new_task,task: created_task}
                
        default: return { ...state };
    }
}