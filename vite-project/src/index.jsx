import {createSlice} from "@reduxjs/toolkit"

const counterslice = createSlice({
    name:"counter",
    initialState:120,
    reducers:{
        Inc:(state,action)=>{
            return state+=action.payload;
        },
        Dec:(state,action)=>{
            return state-=action.payload;
        }
    }
})
export const  {Inc,Dec} =counterslice.actions
export default counterslice.reducer