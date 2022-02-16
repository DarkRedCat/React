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
    followingInProgress : []
}



const FindUsers_reducer = (state = initialState, action) => {
    switch(action.type){
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
export const follow = (id) =>({type: FOLLOW,id})
export const unFollow = (id) =>({type:UN_FOLLOW ,id})
export const setUsers = (users) =>({type:SET_USERS , users})
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE , currentPage})
export const setTotalUserCount = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,totalUsersCount})
export const toggleisFetching = (isFetching) =>({type:TOGGLE_IS_FETCHING , isFetching})
export const toggleisFollowingInProgress = (isFetching,userId) =>({type:TOGGLE_IS_FOLLLOWING_PROGRESS , isFetching,userId})

export default FindUsers_reducer