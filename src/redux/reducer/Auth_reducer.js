import {authAPI} from '../../api/api'

const SET_USER_DATA = 'SET-USER-DATA'
const ERROR = 'ERROR'

let initialState = {
    userId: null,
    email : null,
    login: null,
    isAuth : false,
    error : null
}
const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :{return{...state,...action.payload}}
        case ERROR :{let error = action.error[0] ;return {...state,error}}
        default: return state
    }
}

export const setAuthUserData = (userId,email,login,isAuth)=> {
    return ({type: SET_USER_DATA, payload:{userId,email,login,isAuth}}) 
}
const red = (error)=> {return ({type: ERROR, error})}

export const authMe = () => (dispatch) => {
   return authAPI.authMe().then(data => {if(data.resultCode === 0 ){
        let {userId,email,login} = data.data;
        dispatch(setAuthUserData(userId,email,login,true))}})

  
}

export const login = (formData) => (dispatch) => {
    authAPI.login(formData).then(data => {
        if(data.data.resultCode === 0 ){dispatch(authMe())}	else{ dispatch(red(data.data.messages)) }
    }) 
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.data.resultCode === 0){dispatch(setAuthUserData(null,null,null,false))}})
}

export default AuthReducer