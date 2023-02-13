import React,{memo} from 'react'

const Button = ({handleclick,children}) => {
    console.log("this is button file",children);
  return (
    <div onClick={handleclick}>{children}</div>
  )
}

export default memo(Button)