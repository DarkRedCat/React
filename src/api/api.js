import * as axios from 'axios';


const instance =  axios.create({
  withCredentials: true,
  baseURL : 'https://social-network.samuraijs.com/api/1.0/',
  headers : {"API-KEY" : "944c2657-7cf6-4462-8526-3b6d01917dd5"}
});



export const usersAPI = {
  getUsers (currentPage = 1,pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)},
  unFollow (UserId) {return instance.delete(`follow/${UserId}`).then(response => response)},
  follow (UserId) {return instance.post(`follow/${UserId}`).then(response => response)}
}
export const authAPI = {
  authMe () {return instance.get(`auth/me`).then(response => response.data)},
}


export const ProfileAPI = { 
  getProfile (profileUserId) {return instance.get(`profile/${profileUserId}`)},
  getStatus (UserId) {return instance.get(`profile/status/${UserId}`)},

  updateStatus (status) {return instance.put(`profile/status`,{status : status})},
}