import React from 'react'

const ResultCard = ({props}) => {
  return (
    <div className='h-full w-full rounded-xl overflow-hidden bg-gray-800 flex justify-center items-center ' >
<div className='h-full   '>
       {props.type == 'photos'? <img src={props.src} className='h-[100%] w-[100%] object-cover object-center' alt="" /> :''}
         {props.type == 'video'? <video className='h-[100%] w-[100%] object-cover object-center'  autoPlay loop muted  src={props.src}   ></video>:''}
           </div> 
 

    </div>
  )
}

export default ResultCard