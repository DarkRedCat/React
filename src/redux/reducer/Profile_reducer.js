import posts from './components/posts'
import myData  from './components/myPersonalData'
import { logRoles } from '@testing-library/react'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: posts,
    myData: myData.user,
    newPostText: '',
    profile : null
}


const profileReducer = (state = initialState , action) => {
    switch(action.type){

        case ADD_POST: {
            let newPost = {name: action.name,id: (state.posts.length +1),
            message: state.newPostText}
           
            return {
                ...state,
                posts : [...state.posts,newPost] , 
                newPostText : ''
            }
        }
        case UPDATE_POST_TEXT : {
            console.log(state);
            return {
                ...state,
                newPostText : action.text
            }         
        } 
        case SET_USER_PROFILE : {
            return{...state,profile: action.profile}
        }
        default: 
            return state
    }
}

export const addPost = name =>({type : ADD_POST,name})
export const updatePostText = text =>({type: UPDATE_POST_TEXT,text})
export const setUserProfile = profile =>({type : SET_USER_PROFILE,profile})

export default profileReducer