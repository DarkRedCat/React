import {applyMiddleware,combineReducers, createStore} from 'redux'

import profileReducer from './reducer/profile-reducer'
import blockMessageReducer from './reducer/blockMessages-reducer'
import navBarReducer from './reducer/navbar-reducer'
import findUsersReducer from './reducer/findUsers-reducer'
import authReducer from './reducer/auth-reducer'
import appReducer from './reducer/app-reducer'

import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage : profileReducer,
  block_MessagesPage : blockMessageReducer,
  nav : navBarReducer ,
  findUsers : findUsersReducer,
  auth : authReducer,
  app : appReducer
}) 

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store
//store.getState()
export default store