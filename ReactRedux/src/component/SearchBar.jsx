import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { setQuery } from '../Redux/Features/searchSlice';
const SearchBar = () => {
    const dispatch = useDispatch() ; 
    const [Input, setInput] = useState('') ; 
    const submitHandler = (e)=>{
        e.preventDefault() ; 
        console.log("form submitted") ; 
        console.log(Input) 
        dispatch(setQuery(Input))
        setInput('') ;
    }
    const InputHandler = (e)=>{
        console.log(e.target.value)
        setInput(e.target.value) ; 
    } 

    

  return (
    <div>
        <form onSubmit={(e)=>{submitHandler(e)} }>
            <input className='bg-gray-900 p-2 m-2 rounded-xl w-[300px] '  type='text' placeholder='Search anything ...' value={Input} onChange={InputHandler}></input>
            <button type='submit' className='bg-green-300 h-[30px] w-[200px] rounded-xl m-2 '  >LetsGo</button>
        </form>

    </div>
  )
}

export default SearchBar