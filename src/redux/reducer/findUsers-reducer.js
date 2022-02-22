import {usersAPI} from "../../api/api"
import {updateOjectInArray} from '../../utils/object-helper'

const FOLLOW = 'findUsers-reducer/FOLLOW'
const UN_FOLLOW = 'findUsers-reducer/UN-FOLLOW'

const SET_USERS = 'findUsers-reducer/SET-USERS'
const SET_CURRENT_PAGE = 'findUsers-reducer/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'findUsers-reducer/SET-TOTAL-USERS-COUNT'

const TOGGLE_IS_FETCHING = 'findUsers-reducer/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLLOWING_PROGRESS = 'findUsers-reducer/TOGGLE-IS-FOLLLOWING_PROGRESS'


let initialState = {
    Users: [],
    pageSize: 5,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : false,
    followingInProgress : [],
}

const FindUsers_reducer = (state = initialState, action) => {
    switch(action.type){

    case FOLLOW :return{
        ...state,
        Users : updateOjectInArray(state.Users,action.id,`id`,{followed : true})
    }


    case FOLLOW :return{
        ...state,
        Users : updateOjectInArray(state.Users,action.id,`id`,{followed : false})
    }

    case SET_USERS : {
        return{...state,Users: action.users}
    }

    case SET_CURRENT_PAGE : {
        return{...state,currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT : {
        return{...state,totalUsersCount: action.totalUsersCount}
    }

    case TOGGLE_IS_FETCHING : {
        return{...state,isFetching: action.isFetching}
    }

    case TOGGLE_IS_FOLLLOWING_PROGRESS : {
        return{
            ...state,
            followingInProgress: action.isFetching
            ?  [...state.followingInProgress, action.userId] 
            : state.followingInProgress.filter(id => id !== action.userId)
        }
    }

    default: return state

    } 
}

export const acceptFollow = (id) =>({type: FOLLOW,id})
export const acceptUnFollow = (id) =>({type:UN_FOLLOW ,id})

export const setUsers = (users) =>({type:SET_USERS , users})
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE , currentPage})
export const setTotalUserCount = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,totalUsersCount})

export const toggleIsFetching = (isFetching) =>({type:TOGGLE_IS_FETCHING , isFetching})
export const toggleIsFollowingInProgress = (isFetching,userId) =>({type:TOGGLE_IS_FOLLLOWING_PROGRESS , isFetching,userId})


export const getUsersThunk = (currentPage,pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await  usersAPI.getUsers(currentPage,pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUserCount(response.totalCount))
        dispatch(setCurrentPage(currentPage))
    
}

// const followUnfollowFlow = async (dispatch,UserId,apiMethod,actionCreator) =>{

//     dispatch(toggleIsFollowingInProgress(true, UserId))
//     let response = await apiMethod(UserId)
//     if(response.data.resultCode===0){dispatch(actionCreator(UserId))}
//     dispatch(toggleIsFollowingInProgress(false, UserId))

// }

export const unFollow = (UserId) => async (dispatch) => {
    // followUnfollowFlow(dispatch,UserId,usersAPI.unFollow.bind(UserId),acceptUnFollow)


    dispatch(toggleIsFollowingInProgress(true, UserId))
    dispatch(acceptUnFollow(UserId))
    setTimeout(() => {dispatch(toggleIsFollowingInProgress(false, UserId))}, 500);
}

export const follow = (UserId) => async (dispatch) => {
    // followUnfollowFlow(dispatch,UserId,usersAPI.follow.bind(UserId),acceptFollow)
    

    dispatch(toggleIsFollowingInProgress(true, UserId))
    dispatch(acceptFollow(UserId))
    setTimeout(() => {dispatch(toggleIsFollowingInProgress(false, UserId))}, 500);
}


export default FindUsers_reducer