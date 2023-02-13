import React, { useReducer } from "react";

const reducer = (state, action) => {
 if(action.type=="INC"){
  return state+1;
 }
 else if(action.type=="DEC"){
  return state-1;
 }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="bg-green-600 justify-center align-baseline">
      <h1 className="px-[35rem] mt-2">{state}</h1>
      <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    </div>
  );
};

export default App;
