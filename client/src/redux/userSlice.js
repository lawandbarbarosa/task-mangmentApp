import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
    initialState: {
        users: []
    },
    name: "Users", // Add quotes around the name property
    reducers: {
        Login: (state, action) => {
            state.users = action.payload;
        },
        setLogout: (state, action) => {
            state.users = null;
        }
    }
});

export const { Login, setLogout } = users.actions;

export default users.reducer;
