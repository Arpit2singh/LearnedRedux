
import sliceCounter from "./Features/sliceCounter"
import { configureStore } from "@reduxjs/toolkit"
import searchSlice from  "./Features/searchSlice"
import collectionSlice from "./Features/collectionSlice"
export const store = configureStore({
    reducer : {
        counter : sliceCounter , 
        search :  searchSlice , 
        collections : collectionSlice
    }
})