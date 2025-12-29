import React, { useEffect } from 'react'
import { fetchPhotos , fetchGif , fetchVideos } from '../api/mediaApi'
import { setQuery , setResult , setLoading , setError   } from '../Redux/Features/searchSlice'
import { useDispatch , useSelector } from 'react-redux'
import ResultCard from './ResultCard'
import { AddToCollection } from '../Redux/Features/collectionSlice'
const ResultGrid = () => {
    const {query , results , activeTab , loading , error} = useSelector((state)=>state.search)
    const dispatch = useDispatch() ; 
    useEffect(() => {
        if (!query) return;
      const getdata = async()=>{
        try {
            dispatch(setLoading(true)) ; 
            let data ; 
            if(activeTab === 'photos'){
                let response = await fetchPhotos(query) ; 
                data = response.map((item)=>({
                    id : item.id , 
                    type : "photos" , 
                    title : item.alt_description , 
                    thumbnail : item.urls.small , 
                    src : item.urls.full
                }))
            }
            if(activeTab === 'videos'){
                let response = await fetchVideos(query) ; 
                  data = response.map((item)=>({
                     id : item.id , 
                    type : 'video' , 
                    title : item.user.name || "video" , 
                    thumbnail : item.image , 
                    src :  item.video_files[0].link
                  }))
            }
            if(activeTab === 'gifs'){
                let response = await fetchGif(query) ; 
                data = response.map((item)=>({
                    id : item.id , 
                    type : 'video' , 
                    title : item.user.name || "video" , 
                    thumbnail : item.image , 
                    src :  item.video_files[0].link
                }))
        } 
     console.log(data ) ; 
     dispatch(setResult(data)) ;
    }
        catch (error) {
            dispatch(setError(error.message))
        }
        finally{
          dispatch(setLoading(false)) ; 
        }
        
       
      }
      getdata()
      
    }, [query , activeTab , dispatch])

    if(error) return <h1>Error</h1> 
    if(loading) return <h1>Loading ... ... </h1>

    const AddCollectionHandler = (item)=>{
        dispatch(AddToCollection(item)) ; 
        console.log("Added in the collection ")
    }
    
  return (
    <div className=' h-full w-screen flex flex-wrap justify-center items-center gap-2 overflow-y-scroll '>
    {results.map((item , idx)=>( 
        <div key={idx} className='h-[300px] w-[250px] shrink-0 overflow-hidden relative  '  ><ResultCard className='h-full w-full' props={item}/>
        <div key={idx} className='absolute bottom-0 left-0 right-0' >
  <button className='h-[50px] w-[120px] p-2 m-2 bg-blue-500 rounded-2xl ' onClick={()=>AddCollectionHandler(item)} >Add</button>
 </div>
        </div>
        
     ))}

    </div>
  )
}

export default ResultGrid