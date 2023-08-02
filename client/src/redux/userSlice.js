import {createSlice} from "@reduxjs/toolkit"



export const users = createSlice({
    initialState:{
   users:[]
    },
    name:"users",
    reducers:{
     Login:(state,action)=>{
        
     }
    }
})

export const {Login} = users.actions

export default users.reducer;