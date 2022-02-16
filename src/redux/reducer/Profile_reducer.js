import {usersAPI} from '../../api/api'
import posts from './components/posts'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const GG = 'GG'
let initialState = {
    posts: posts,
    newPostText: '',
    profile : null,
    gg : 22474
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
        case GG : {return{...state,gg: action.gg}}
        default: return state
    }
}

export const addPost = name =>({type : ADD_POST,name})
export const updatePostText = text =>({type: UPDATE_POST_TEXT,text})
export const setUserProfile = profile =>({type : SET_USER_PROFILE,profile})
export const gg = gg =>({type : GG,gg})

export const getProfileG = (UserId) =>(dispatch) => {
    usersAPI.getProfile(UserId).then(response => {dispatch(setUserProfile(response))})
}


export default profileReducer