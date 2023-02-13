import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const naviage= useNavigate();
    function contact(){
        naviage("/contact");
    }
  return (
    <div>
         <form className="bg-gray-800 w-[13rem] h-[16rem] ml-[19rem] mt-[3rem]">

<input type="text" className=" mt-5 ml-3 rounded-sm"/>
<input type="text" className=" mt-5 ml-3 rounded-sm"/>
<input type="text" className=" mt-5 ml-3 rounded-sm"/>
<button   onClick={contact}  className=" bg-black rounded-lg text-white font-extrabold ml-[3.5rem] mt-[2rem]">Register</button>
</form>
    </div>
  )
}

export default Login