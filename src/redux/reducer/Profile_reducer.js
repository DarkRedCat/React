import {ProfileAPI} from '../../api/api'
import posts from './components/posts'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const GG = 'GG'
let initialState = {
    posts: posts,
    newPostText: '',
    profile : null,
    gg : 22474,
    status : '',
}


const profileReducer = (state = initialState , action) => {
    switch(action.type){

        case ADD_POST: {
            let newPost = {name: action.name,id: (state.posts.length +1),
            message: state.newPostText}
            return {...state,posts : [...state.posts,newPost] , newPostText : ''}
        }
        case UPDATE_POST_TEXT : {
            return {...state,newPostText : action.text}         
        } 
        case SET_USER_PROFILE : {return{...state,profile: action.profile}}
        case SET_USER_STATUS : {return{...state,status: action.status}}
        case GG : {return{...state,gg: action.gg}}
        default: return state
    }
}

export const addPost = name =>({type : ADD_POST,name})
export const updatePostText = text =>({type: UPDATE_POST_TEXT,text})
export const setUserProfile = profile =>({type : SET_USER_PROFILE,profile})
export const setUserStatus = status =>({type : SET_USER_STATUS,status})
export const gg = gg =>({type : GG,gg})

export const getProfileG = (UserId) =>(dispatch) => {
    ProfileAPI.getProfile(UserId).then(response => {dispatch(setUserProfile(response.data))})
}
export const setUserStatusG = (UserId) =>(dispatch) => {
    ProfileAPI.getStatus(UserId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(response => {
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }})
}


export default profileReducer