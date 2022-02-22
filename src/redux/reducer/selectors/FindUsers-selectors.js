import { createSelector } from "reselect"

export const getFindUsersSelector  = (state) =>{
  return state.findUsers.Users
}
export const getUsers = createSelector(getFindUsersSelector,(users) => {
  return users.filter(u =>true) 
})

export const getPageSize  = (state) =>{
  return state.findUsers.pageSize
}
export const getTotalUsersCount  = (state) =>{
  return state.findUsers.totalUsersCount
}
export const getCurrentPage  = (state) =>{
  return state.findUsers.currentPage
}
export const getIsFetching  = (state) =>{
  return state.findUsers.isFetching
}
export const getFollowingInProgress  = (state) =>{
  return state.findUsers.followingInProgress
}
