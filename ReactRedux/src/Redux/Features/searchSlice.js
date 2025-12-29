
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search", 
    initialState : {
        query : "" , 
        results : [] , 
        activeTab : "photos" , 
        loading : false , 
        error : null 
    }, 
    reducers : {
        setQuery(state , actions){
            state.query = actions.payload
        },
         setResult(state , actions){
            state.loading = false         
            state.results = actions.payload
        },
         setActiveTab(state , actions){
            state.activeTab = actions.payload
        },
         setLoading(state , actions){
            state.loading = actions.payload
            state.error = null 
        },
         setError(state , actions){
            state.error = actions.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        }
    }
})

export const { setLoading , setQuery , setResult , setActiveTab , setError , clearResults } = searchSlice.actions 
export default searchSlice.reducer ; 