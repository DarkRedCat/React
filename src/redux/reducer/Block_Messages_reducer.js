import message from './components/message';
import contact_data from './components/contact_data'

import myData  from './components/myPersonalData'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


let initialState = {
    message: message,
    contact_data : contact_data,
    myData: myData.user,
    newMessageText: '',
}
const blockMessageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE :{
            let newPost = (id) => {
                return ['Posted', id , state.newMessageText]   
            }
            let stateCopy = {
                ...state,
                message : {...state.message},
                newMessageText : ''
            }
            let id = message[['id_' + action.id]]

            state.message['id_' + action.id].push(newPost(id.length +1))

            return stateCopy;
        }
    
        case UPDATE_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText : action.newMessageText
            };
        }
        default: 
            return state
    }
}

export const addMessage = id =>({type: ADD_MESSAGE, id : id})
export const updateMessageText = text =>({
    type:UPDATE_MESSAGE_TEXT, newMessageText : text})

export default blockMessageReducer