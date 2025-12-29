
import React from 'react'
import { Routes as RouterRoutes , Route } from 'react-router-dom'

import ResultGrid from '../component/ResultGrid'
import CollectionsPage from '../component/CollectionsPage'
import Tabs from '../component/Tabs'
import SearchBar from '../component/SearchBar'
const Routes = () => {
  return (
    <div>
        <SearchBar/>
        <Tabs/>
        <RouterRoutes>
            <Route path='/' element={<ResultGrid/>} />
            <Route path='/collections' element={<div><CollectionsPage/></div>} />
            
       </RouterRoutes>
    </div>
  )
}

export default Routes