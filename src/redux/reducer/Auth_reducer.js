import {authAPI} from '../../api/api'

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    userId: null,
    email : null,
    login: null,
    isAuth : false
}
const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :{return{...state,...action.payload}}
        default: return state
    }
}

export const setAuthUserData = (userId,email,login,isAuth)=> {
    return ({type: SET_USER_DATA, payload:{userId,email,login,isAuth}}) 
}


export const authMe = () => (dispatch) => {
    authAPI.authMe().then(data => {if(data.resultCode === 0 ){
        let {userId,email,login} = data.data;
        dispatch(setAuthUserData(userId,email,login,true))}	
    })
}

export const login = (email,password,rememberMe) => (dispatch) => {
    authAPI.login(email,password,rememberMe).then(data => {
        if(data.data.resultCode === 0 ){dispatch(authMe())}	
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.data.resultCode === 0){
        dispatch(setAuthUserData(null,null,null,false))

    }})
}

export default AuthReducer