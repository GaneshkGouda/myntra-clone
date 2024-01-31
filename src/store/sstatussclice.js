import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name:"fetchStatus",
  initialState:{
    fetchingDone:false,
    currentFetching:false
  },
  reducers:{
    markFetchingDone:(state)=>{
      return state.fetchingDone = true
    },
    markFetchingStart:(state)=>{
      return state.currentFetching = true 
    },  
     markFetchingEnd:(state)=>{
      return state.currentFetching = false
    },
  }
})
export const fetchAction = fetchSlice.actions
export default fetchSlice ;