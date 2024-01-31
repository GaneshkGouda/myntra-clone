import {  createSlice} from "@reduxjs/toolkit"
 

const bagSlice = createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addItobag:(store,action)=>{
     
 store.push(action.payload)
 
  },
  removeFrombag:(store,action)=>{
   return store.filter(itemId => itemId !== action.payload)
     }
}})
export const bagAction =bagSlice.actions
export default bagSlice ;
 