import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import appReducer from './AppSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  }
})