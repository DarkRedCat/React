import allUsers from './ALL_USERS'

let userMessage = allUsers[0]._getMessage().with_user

let message = {
  ...userMessage
}

export default message;