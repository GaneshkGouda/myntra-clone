import {  createSlice} from "@reduxjs/toolkit"
 

const itemSlice = createSlice({
  name:"items",
  initialState:[],
  reducers:{
    addIntialItems:(store,action)=>{
store = action.payload
    return store
  }
}})
export const itemsAction = itemSlice.actions
export default itemSlice ;
 