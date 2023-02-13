import React,{useState,useEffect} from 'react'

const useCustomhook = (url) => {
    const [state, setstate] = useState([])

    useEffect(() => {
       async function apidata(){
        const api = await fetch(url);
        const data = await  api.json();
        console.log(data);
        setstate(data);
       }
       apidata();
  
  
    }, [])
  return [state];
}

export default useCustomhook