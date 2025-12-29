import axios from "axios" ; 

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY ; 
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY ; 

export async function fetchPhotos(query , page=1 , per_page=20){
    const response = await axios.get(`https://api.unsplash.com/search/photos` , {
        params : {
            query , page , per_page 
        } , 
        headers : {
            Authorization : `Client-ID ${UNSPLASH_KEY}`
        }
    })
    const data = response.data.results
    console.log(data)
    return data 
}

export async function fetchVideos(query , page=1 , per_page=15){
    const response = await axios.get(`https://api.pexels.com/videos/search`,{
         params : {
            query , page , per_page 
        } , 
        headers : {
            Authorization : PEXELS_KEY
        }
    }) 
    const data = response.data.videos ; 
    console.log(data) ; 
    return data  ; 
}
export async function fetchGif(query , page=1 , per_page=20){
    const response = await axios.get(`https://api.pexels.com/videos/search`,{
         params : {
            query , page , per_page 
        } , 
        headers : {
            Authorization : PEXELS_KEY
        }
    }) 
    const data = response.data.videos ; 
    console.log(data) ; 
    return data  ; 
}

