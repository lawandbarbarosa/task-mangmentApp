import { configureStore } from '@reduxjs/toolkit'
import  TaskSlice  from './taskSlice'
import userSlice from './userSlice'
export default configureStore({
    reducer: {
   task: TaskSlice,
   users:userSlice
    }
})