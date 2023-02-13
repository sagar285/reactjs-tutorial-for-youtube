import React ,{memo}from 'react'

const Title = () => {
    console.log("this is title file render");
  return (
    <div>Title</div>
  )
}

export default memo(Title)