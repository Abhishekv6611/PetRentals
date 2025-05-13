import { configureStore } from "@reduxjs/toolkit"
import LoginSlice from './auth/LoginSlice'
import SignupSlice from './auth/SignupSlice'

export const store=configureStore({
    reducer:{
       auth: LoginSlice,
       signup: SignupSlice
    }

})