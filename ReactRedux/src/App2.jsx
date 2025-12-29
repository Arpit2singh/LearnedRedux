import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement , increment , increaseByAmount } from './Redux/Features/sliceCounter';
import { useState } from 'react';
import { fetchPhotos } from './api/mediaApi';
import { fetchVideos } from './api/mediaApi';
import { fetchGif } from './api/mediaApi';
const App2 = () => {

  const dispatcher = useDispatch() ; 
  const count = useSelector((state)=>{
    return state.counter.value
  })
  const [num, setnum] = useState(5)  ; 
  const [PhotosRes, setPhotosRes] = useState([]);
  const [VideosRes, setVideosRes] = useState([]) ; 
  const [Gif, setGif] = useState([])
  const HandlefetchPhotos = async (query)=>{
    try{
      const photosResult = await fetchPhotos(query) ;  
    
      setPhotosRes(photosResult) ;  
      console.log(PhotosRes)
    }catch(error){
      console.error("Error fetching photos:", error)
    }
  }

  const HandlefetchVideos = async(query)=>{
    try{
      const videosResult = fetchVideos(query) 
      setVideosRes(videosResult) ; 
      console.log(VideosRes)
    }
   catch(error){
      console.error("Error fetching photos:", error)
    }
  } 
  
  
  const HandlefetchGif = async(query)=>{
    try{
      const GifResult = fetchGif(query) 
      setGif(GifResult) ; 
      console.log(GifResult)
    }
   catch(error){
      console.error("Error fetching photos:", error)
    }
  } 

  return (
    <div className='bg-black h-full w-screen text-white min-h-screen flex gap-4 p-2 '>
       {/* <div>Hey Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, laboriosam.</div>
       <div className='text-4xl text-center'  >
        {count}
       </div>
       <div>
        <button className='bg-red-300 h-[30px] w-[200px] rounded-xl'  onClick={()=> dispatcher(decrement())}>-</button> 
        <button className='bg-green-300 h-[30px] w-[200px] rounded-xl' onClick={()=> dispatcher(increment())}>+</button>
       </div> 
       <div>
        <input type='number' className='w-[200px] h-[60px] bg-gray-600  p-2 rounded-xl ' onChange={(e)=>{
          console.log(e.target.value) ; 
          setnum(e.target.value)
        }} value={num} />
       </div>
        <button className='bg-green-300 h-[30px] w-[200px] rounded-xl' onClick={()=> dispatcher(increaseByAmount(Number(num)))}>+</button> */}
        <div> <button className='bg-green-300 h-[30px] w-[200px] rounded-xl m-2 ' onClick={()=>HandlefetchPhotos('cat')}>Get Photos</button> </div>
        <div className='flex flex-wrap overflow-auto' >
          {
          PhotosRes.map((photos , idx)=>(

         <div className='h-[500px] w-[170px]' key={photos.id || idx} >
          <img className='h-full w-full object-cover ' src={photos.urls.full} />
         </div> 

          )) }
        </div>
         <div> <button className='bg-green-300 h-[30px] w-[200px] rounded-xl m-2 ' onClick={()=>HandlefetchVideos('cat')}>Get Videos</button> </div>
           <div> <button className='bg-green-300 h-[30px] w-[200px] rounded-xl m-2 ' onClick={()=>HandlefetchGif('cat')}>Get Gif</button> </div>
    </div>  
  )
}

export default App2 