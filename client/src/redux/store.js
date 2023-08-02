import { configureStore } from '@reduxjs/toolkit'
import  TaskSlice  from './taskSlice'

export default configureStore({
    reducer: {
   task: TaskSlice
    }
})