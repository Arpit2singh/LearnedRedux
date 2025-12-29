
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'
import { removeCollection } from '../Redux/Features/collectionSlice';
const CollectionsPage = () => {

    const dispatch = useDispatch() ; 

    const {collections} = useSelector(state => state.collections)
    const removeCollectionHandler = (idx) =>{
        console.log("Remove collection at index : " , idx)

        dispatch(removeCollection(idx))
    }
  return (
    <div>

        <h1>Collection Page</h1>
        <div className='p-2 flex m-2 gap-5 ' >
            {collections.map((item , idx)=>{
                return <div>
                   
                   <div key={idx} className='h-[300px] w-[250px] shrink-0 overflow-hidden relative  '  ><ResultCard className='h-full w-full' props={item}/>
        <div key={idx} className='absolute bottom-0 left-0 right-0' >
  <button className='h-[50px] w-[120px] p-2 m-2 bg-blue-500 rounded-2xl ' onClick={()=>removeCollectionHandler(item.id)} >remove</button>
 </div>
        </div>
        

                </div>
            })}
        </div>
    </div>
  )
}

export default CollectionsPage