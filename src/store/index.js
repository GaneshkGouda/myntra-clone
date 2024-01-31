import {configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemsclice"
import fetchSlice from "./sstatussclice"
import bagSlice from "./bagsclice"

 

 const myntraStore=configureStore(
{ reducer:{ items: itemSlice.reducer
,
fetchStatus: fetchSlice.reducer ,
bag: bagSlice.reducer

}}
 )

 export default myntraStore