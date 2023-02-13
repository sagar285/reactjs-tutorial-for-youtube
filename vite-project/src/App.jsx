import React from 'react'
import { useSelector } from 'react-redux'
import {Inc,Dec} from "./index"
import { useDispatch } from 'react-redux'

const App = () => {
  const state =useSelector((state)=>state.number)
  const dispatch =useDispatch();
  return (
    <>
    <div>{state}</div>
    <button onClick={()=>dispatch(Inc(10))}>INC</button>
    <button onClick={()=>dispatch(Dec(20))}> DEC</button>
    </>
  )
}

export default App