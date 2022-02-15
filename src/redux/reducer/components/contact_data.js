import allUsers from './ALL_USERS'
import {userId} from './myPersonalData'


let data = allUsers[userId].contact
  .map(m => {
    let new_m = (m-1)


    return({
      id :   allUsers[new_m].id,
      name :   allUsers[new_m].fullName,
      avatar :   allUsers[new_m].avatar
      })
  })

let contact_data = [
  ...data
]

export default contact_data;