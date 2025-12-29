  import React from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { setActiveTab } from '../Redux/Features/searchSlice';
  import { Link } from 'react-router-dom';
  import { useLocation } from 'react-router-dom';
  const Tabs = () => {
      const tabs = ['photos' , 'videos' , 'gifs']
      const dispatch = useDispatch() ; 
      const activeTab = useSelector((state)=>state.search.activeTab)
      const location = useLocation() ; 
    return (
      <div className='flex justify-between p-2 m-2 '>
      <div>{
          tabs.map((tabs,index)=>{
              return <button key={index} className={` ${(activeTab == tabs ? 'bg-red-400' : 'bg-orange-500')} cursor-pointer m-2 p-2 rounded-xl w-[200px] h-[40px] `} onClick={()=>{
                  dispatch(setActiveTab(tabs))
              }}>{tabs}</button>
          })
          }
        <span>
          <button className="bg-blue-500 text-white p-2 rounded-xl m-2 cursor-pointer" ><Link to="/collections" >Collections</Link></button>
        </span>
          </div>
          
          <div>
          { location.pathname !== '/'  ?  <div className='bg-emerald-500  p-2 m-2  h-[50px] w-[70px] text-center rounded-2xl '>
              <Link to="/" >Back</Link>
            </div> : null }
          </div>

      </div>
  
    )
  }

  export default Tabs