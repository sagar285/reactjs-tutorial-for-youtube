import React from 'react'

const Todo = ({title,description,deletedata,index}) => {
  return (
    <div className='text-gray-400'>
        <div className='bg-white h-16 mt-3'>
        <p className='font-extrabold pt-2'>{title}</p>
        <span className='font-semibold'>{description}</span>
        <button className='bg-black font-extrabold rounded-md text-red-700 float-right mt-1' onClick={()=>deletedata(index)}>Delete</button>
        </div>
    </div>
  )
}

export default Todo