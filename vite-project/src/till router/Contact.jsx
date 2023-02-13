import React,{useContext} from 'react'
import {context} from "../App";


import {Link} from "react-router-dom"

const Contact = ({}) => {
  const data = useContext(context);

  return (
    <>
    <div className='body bg-orange-700  w-[100%] h-[100vh]'>
   <div>
     <nav className='flex list-none px-[45rem]'>
     <Link to="/"> <li className='m-4'>Home</li></Link>
     <Link to="/about"> <li  className='m-4'>About</li></Link>
     <Link to="/contact"> <li  className='m-4'>Contactus</li></Link>
     </nav>
  
   </div>
   <h1>this is {data} page</h1>
    </div>
    </>
  )
}



export default Contact

