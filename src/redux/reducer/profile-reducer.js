import {ProfileAPI} from '../../api/api'

const ADD_POST = 'profile-reducer/ADD-POST'
const SET_USER_PROFILE = 'profile-reducer/SET-USER-PROFILE'
const SET_USER_STATUS = 'profile-reducer/SET-USER-STATUS'
const GG = 'GG'
let initialState = {
    posts: [
        {id: "01", message: "Hi, how are you?"},
        {id: "02", message: "I'm hacker"},        
    ],
    newPostText: '',
    profile : null,
    gg : null,
    status : '',
}


const profileReducer = (state = initialState , action) => {
    switch(action.type){

        case ADD_POST: {
            let newPost = {id: (state.posts.length +1),message: action.text}
            return {...state,posts : [...state.posts,newPost]}
        }
        case SET_USER_PROFILE : {return{...state,profile: action.profile}}
        case SET_USER_STATUS : {return{...state,status: action.status}}
        case GG : {return{...state,gg: action.gg}}
        default: return state
    }
}

export const addPost = text =>({type : ADD_POST,text})
export const setUserProfile = profile =>({type : SET_USER_PROFILE,profile})
export const setUserStatus = status =>({type : SET_USER_STATUS,status})
export const gg = gg =>({type : GG,gg})


export const getProfileG = (UserId) => async (dispatch) => {
    let response = await ProfileAPI.getProfile(UserId)
        dispatch(setUserProfile(response.data))
}

export const setUserStatusG = (UserId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(UserId)
        dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) => async(dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }
}


export default profileReducer