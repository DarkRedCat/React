import {usersAPI} from "../../api/api"
const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLLOWING_PROGRESS = 'TOGGLE-IS-FOLLLOWING_PROGRESS'

let initialState = {
    Users: [],
    pageSize: 5,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : false,
    followingInProgress : [],
    fake : 10
}



const FindUsers_reducer = (state = initialState, action) => {
    switch(action.type){

        case 'FAKE' : {return {...state,fake:state.fake + 1}}
        case FOLLOW : {return {
            ...state,Users : state.Users.map(u => {
                if( u.id === action.id){return {...u , followed : true}}
                return u
            }),
        }
    }

    case UN_FOLLOW : {
        return{
            ...state,
             Users : state.Users.map(u => {
                 if( u.id === action.id){return {...u , followed : false}}
                return u
            }),
        }
    }

    case SET_USERS : {return{...state,Users: action.users}}
    case SET_CURRENT_PAGE : {return{...state, currentPage: action.currentPage}}
    case SET_TOTAL_USERS_COUNT : {return{...state, totalUsersCount: action.totalUsersCount}}
    case TOGGLE_IS_FETCHING : {return{...state, isFetching: action.isFetching}}
    case TOGGLE_IS_FOLLLOWING_PROGRESS : {
        return{
            ...state,
            followingInProgress: action.isFetching
            ?  [...state.followingInProgress, action.userId] 
            : state.followingInProgress.filter(id => id !== action.userId)
        }}
    default: return state
    } 
}
export const acceptFollow = (id) =>({type: FOLLOW,id})
export const acceptUnFollow = (id) =>({type:UN_FOLLOW ,id})
export const setUsers = (users) =>({type:SET_USERS , users})
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE , currentPage})
export const setTotalUserCount = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,totalUsersCount})
export const toggleisFetching = (isFetching) =>({type:TOGGLE_IS_FETCHING , isFetching})
export const toggleisFollowingInProgress = (isFetching,userId) =>({type:TOGGLE_IS_FOLLLOWING_PROGRESS , isFetching,userId})

export const getUsersThunk = (currentPage,pageSize) => {
    return  (dispatch) => {
        dispatch(toggleisFetching(true))
        usersAPI.getUsers(currentPage,pageSize)
            .then(data => {
                
                dispatch(toggleisFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
        })
        dispatch(setCurrentPage(currentPage))
        
    }
}
export const unFollow = (UserId) => {
    return  (dispatch) => {
        dispatch(toggleisFollowingInProgress(true, UserId))

        // usersAPI.unFollow(UserId).then(response =>{
        // if(response.data.resultCode===0){dispatch(acceptUnFollow(UserId))}
        //  dispatch(toggleisFollowingInProgress(false, UserId))
        // })

        dispatch(acceptUnFollow(UserId))
        setTimeout(() => {dispatch(toggleisFollowingInProgress(false, UserId))}, 500);
    }
}
export const follow = (UserId) => {
    return  (dispatch) => {
        dispatch(toggleisFollowingInProgress(true, UserId))

        // usersAPI.follow(UserId).then(response =>{
        // if(response.data.resultCode===0){dispatch(acceptFollow(UserId))
        // }dispatch(toggleisFollowingInProgress(false, UserId))
        // })

        dispatch(acceptFollow(UserId))
        setTimeout(() => {dispatch(toggleisFollowingInProgress(false, UserId))}, 500);
    }
}
export default FindUsers_reducer