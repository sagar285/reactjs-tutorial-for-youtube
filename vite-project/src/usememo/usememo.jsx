import React,{useState,useMemo} from 'react'

// 1 1 2 3 5 8


const App = () => {
  const [state, setstate] = useState(1)
  const [stat, setstat] = useState(0)
  function fib(n){
    if(n===1 || n===2){
      return 1;
    }
    return fib(n-2) +fib(n-1);
  }

   const memovalue=useMemo(() =>fib(state), [state])

  return (
    <>
    <h1>{memovalue}</h1>
    <h1>{stat}</h1>
   <button onClick={()=>setstate(state+1)} className="ml-7" >Incremenet</button>
   <button onClick={()=>setstat(stat+1)} className="ml-7">button increasing</button>
   
    </>
    
  )
}

export default App