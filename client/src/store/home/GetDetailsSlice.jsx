import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";


export const fetchinData=createAsyncThunk(
    'get/details',async(payload,{rejectWithValue})=>{
        try {
            const response=(await api.apiHandler({
                url:api.HomeGet,
                method:'GET',
                data:payload
            }))
            if(response.status>=200 && response.status<300){
                 return response.data
            }else{
                return rejectWithValue({message:response.data.message})
            }
        } catch (error) {
            console.log(error);
           return rejectWithValue(error)
        }
    }
)


const initialState={
    
}