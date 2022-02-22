import {authAPI} from '../../api/api'

const SET_USER_DATA = 'auth-reducer/SET-USER-DATA'
const ERROR = 'auth-reducer/ERROR'

let initialState = {
    userId: null,
    email : null,
    login: null,
    isAuth : false,
    error : null
}
const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :{
            return{
                ...state,
                ...action.payload
            }
        }
        case ERROR :{
            let error = action.error[0] 
            return {...state,error}
        }
        default : return state
    }
}

export const setAuthUserData = (userId,email,login,isAuth)=> {
    return ({type: SET_USER_DATA, payload:{userId,email,login,isAuth}}) 
}

const error = (error)=> {return ({type: ERROR, error})}

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe()
    
    if(response.resultCode === 0 ){
        let {userId,email,login} = response.data;
        dispatch(setAuthUserData(userId,email,login,true))
    }
    
}

export const login = (formData) => async (dispatch) => {
    let response = await authAPI.login(formData)
        if(response.data.resultCode === 0 ){
            dispatch(authMe())
        }else{
            dispatch(error(response.data.messages))
        }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null,null,null,false))
    }
}

export default AuthReducer