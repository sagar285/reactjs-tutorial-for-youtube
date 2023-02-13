import React,{memo} from 'react'

const Count = ({text,count}) => {
    console.log("count file render with ",text);
  return (
    <div>{text} = {count}</div>
  )
}

export default memo(Count)