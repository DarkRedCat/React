const ADD_MESSAGE = 'blockMessages-reducer/ADD-MESSAGE'

let initialState = {
    message: {
        id_2 : [
            ['obtained', 1, 'О привет'], 
            ['obtained', 2,'Как же давно не виделесь'], 
            ['obtained', 3,'А ты как всегда игнонишь'], 
            ['obtained', 4,'все еще злишься?'],
        ],
        id_4 : [
            ['obtained', 1, '1'], 
            ['obtained', 2,'1'], 
            ['obtained', 3,'1'],
            ['Posted', 4,'как же ты задолбал!'],
        ],
    },

    contact_data : [
        { id: 2, name: "Oleg", avatar: "https://picsum.photos/50/50?random=01" },
        { id: 4, name: "010", avatar: "https://via.placeholder.com/100/FFFFFF/00000?text=001" }
    ],
}
const blockMessageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE :{
            let newPost = (id) => {
                return ['Posted', id , action.text]
            }
            let stateCopy = {...state,message : {...state.message}}
            let id = state.message[['id_' + action.id]]
            state.message['id_' + action.id].push(newPost(id.length +1))
            return stateCopy;
        }
        default: return state
    }
}
export const addMessage = (id,text) =>({type: ADD_MESSAGE, id,text})


export default blockMessageReducer



