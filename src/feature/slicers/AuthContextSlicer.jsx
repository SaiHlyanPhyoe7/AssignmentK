import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const AuthContextSlicer = createSlice({
    name : "inputSlicer",
    initialState,
    reducers: {
        login : (state,action)=>{
            state.user = action.payload
        },
        logout : (state,action)=>{
            state.user = null
        },
        auth_is_ready : (state,action)=>{
            console.log(action.payload)
            state.user = action.payload
            state.authIsReady = true
        },
    }
})

export default AuthContextSlicer.reducer
export const {login,logout,auth_is_ready} = AuthContextSlicer.actions