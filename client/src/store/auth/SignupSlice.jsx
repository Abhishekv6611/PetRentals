import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../api"

export const fetchinData=createAsyncThunk(
    'auth/signup',async(payload,{rejectWithValue})=>{
        try {
            const response=(await api.apiHandler({
                url:api.Signup,
                method:"POST",
                data:payload
            }))
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data || "something went wrong")
        }
    }
)
    const initialState={
      SignupError:false,
      SignupSuccess:false,
      SignupData:{_id:"",message:""},
      SignupErrorMessage:"",
      SignupFetching:false
    }

  const SignupSlice=createSlice({
    initialState,
    name:'signup',
    reducers:{
        clearSignupSate:(state)=>{
         state.SignupError=false,
         state.SignupSuccess=false,
         state.SignupErrorMessage="",
         state.SignupFetching=false

        }
    },
     extraReducers:(builder)=>{
        builder.addCase(fetchinData.pending,(state)=>{
            state.SignupSuccess=false,
            state.SignupError=false,
            state.SignupFetching=true,
            state.SignupErrorMessage=""
        }) 
     builder.addCase(fetchinData.fulfilled,(state,action)=>{
        state.SignupData=action.payload,
        state.SignupSuccess=true
        state.SignupError=false,
        state.SignupErrorMessage="",
        state.SignupFetching=false
     })
     builder.addCase(fetchinData.rejected,(state,action)=>{
        state.SignupError=true,
        state.SignupErrorMessage=action?.payload?.message || "Signup Failed",
        state.SignupFetching=false,
        state.SignupSuccess=false

     })
  
     }
  })



export const {clearSignupSate}=SignupSlice.actions;
export default SignupSlice.reducer


