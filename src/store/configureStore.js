import { combineReducers, configureStore } from '@reduxjs/toolkit'
import photo from './photo'
import token from './token'
import user from './user'
import feed from './feed'
import user_interface from './user_interface'

const reducer = combineReducers({ photo, token, user, feed, user_interface })
const store = configureStore({ 
  reducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()]
})
export default store