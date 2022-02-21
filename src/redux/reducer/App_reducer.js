import {authMe} from './Auth_reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let initialState = {
    initialized : false,
}
const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS :  {
          return{...state,initialized : true}}
        default: return state
    }
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe())

  Promise.all([promise]).then( () => { dispatch(initializedSuccess()) } )
  
}

export default AuthReducer