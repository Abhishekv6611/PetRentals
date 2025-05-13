import {createAsyncThunk, createSlice}from '@reduxjs/toolkit'
import api from '../api'


export const fetchLogin=createAsyncThunk(
    'auth/login',
async(payload,{rejectWithValue})=>{
    try {
        const response=(await api.apiHandler({
          url:api.Login,
          method:'POST',
          data:payload
        }))        
        const data=response.data
        return data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong ")
    }
}
)

const initialState={
  LoginError:false,
  LoginFetching:false,
  LoginSuccess:false,
  LoginData:{_id:"",token:"",message:""},
  LoginErrorMessage:"",
}

const LoginSlice=createSlice({
  initialState,
  name:"auth",
  reducers:{
    clearSignInState:(state)=>{
        state.LoginError=false,
        state.LoginFetching=false,
        state.LoginSuccess=false,
        state.LoginErrorMessage=""

    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchLogin.pending,(state)=>{
        state.LoginFetching=true,
        state.LoginError=false,
        state.LoginSuccess=false,
        state.LoginErrorMessage=""
    })
    builder.addCase(fetchLogin.fulfilled,(state,action)=>{
        state.LoginFetching=false,
        state.LoginError=false,
        state.LoginSuccess=true,
        state.LoginData=action.payload,
        state.LoginErrorMessage=""
    })
    builder.addCase(fetchLogin.rejected,(state,action)=>{
   state.LoginFetching=false,
   state.LoginSuccess=false,
   state.LoginError=true,
   state.LoginErrorMessage=action?.payload?.message || "Login Failed"
    })
  }

})

export const {clearSignInState} = LoginSlice.actions;
export default LoginSlice.reducer