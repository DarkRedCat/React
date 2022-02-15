import allUsers from './ALL_USERS'
import {userId} from './myPersonalData'

let userMessage = allUsers[userId]._getMessage().with_user

let message = {
  ...userMessage
}

export default message;