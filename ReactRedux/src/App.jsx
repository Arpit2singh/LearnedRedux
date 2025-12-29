import React from 'react'
import SearchBar from './component/SearchBar'
import Tabs from './component/Tabs'
import ResultGrid from './component/ResultGrid'
import Routes from './Router/Routes'
const App = () => {
  return (
    <div className='h-screen text-white w-full bg-gray-950'>
     <Routes/>
    </div>
  )
}

export default App