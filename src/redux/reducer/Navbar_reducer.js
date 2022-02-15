import contact_data from './components/contact_data'
import myData  from './components/myPersonalData'

let initialState = {
    myData : myData,
    contact_data: contact_data
}

const navBarReducer = (state = initialState, action) => {

    //Увы но тут нечего нет
    // switch(action.type){
    //     case "f1" : {}
    //     case "f2" : {}
    //     default: 
    //         return state
    // }
    return state
    
}   

export default navBarReducer