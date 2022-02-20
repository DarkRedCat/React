import message from './components/message';
import contact_data from './components/contact_data'



const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    message: message,
    contact_data : contact_data,
}
const blockMessageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE :{
            let newPost = (id) => {return ['Posted', id , action.text]}
            let stateCopy = {...state,message : {...state.message}}
            let id = message[['id_' + action.id]]
            state.message['id_' + action.id].push(newPost(id.length +1))
            return stateCopy;
        }
        default: return state
    }
}
export const addMessage = (id,text) =>({type: ADD_MESSAGE, id,text})


export default blockMessageReducer