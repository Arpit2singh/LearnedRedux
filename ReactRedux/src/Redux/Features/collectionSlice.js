import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name : "collection" , 
    initialState : {
        collections : [] , 
        Loading : false , 
        error : null , 
    } , 
    reducers : {
        AddToCollection(state , actions){
          const exists = state.collections.find(item => item.id === actions.payload.id) ; 
          if(!exists){
            state.collections.push(actions.payload)
          }
        } , 
        removeCollection(state , actions){
            state.collections = state.collections.filter( item => item.id !== actions.payload)
        }

    }
    
})

export const {AddToCollection , removeCollection} = collectionSlice.actions ; 
export default collectionSlice.reducer ; 
