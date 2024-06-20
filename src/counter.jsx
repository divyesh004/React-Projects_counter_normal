/* import React, { useState } from "react";

const Counter = () => {
  const [state, setvalue] = useState(0);
  const Value = 0; 

  const Increment = () => {
    setvalue(state + 1);
  };

  const Decrement = () => {
    if (state > Value ) {
      setvalue(state - 1);
    }
  };

  const Reset = () => {
    setvalue(0);
  };

  return (
    <div>
      <h2 style={{fontFamily:"cursive",fontSize:"120px"}}>{state}</h2>
    <div style={{display:"flex", justifyContent:"center"}}>
    <button onClick={Increment} style={{width:"10%",padding:"10px 20px",backgroundColor:"yellowgreen"}}>+</button>
      <button onClick={Reset} style={{width:"10%",padding:"10px 20px",backgroundColor:"red"}}>Reset</button>
      <button onClick={Decrement} style={{width:"10%",padding:"10px 20px",backgroundColor:"green"}}>-</button>
    </div>
    </div>
  );
};
*/


import { useState } from "react"; 

function App(){
  let [Counter,setCounter]=useState(0);

  const handler=(Value)=>{
    setCounter(Counter+Value)
  };
  return(
   <div>
     <h1 style={{fontSize:"120px"}}>{Counter}</h1>
     <button onClick={()=>handler(1)}>+</button>
     <button disabled={Counter==0}onClick={()=>setCounter(0)}>Reset</button>
     <button disabled={Counter==0} onClick={()=>handler(-1)}>-</button>
   </div>
    
  )
}
export default App; 