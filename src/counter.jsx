import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);
   

    const handleAdd=()=>{
       const newCount=count+1;
       setCount(newCount);
    }
     
    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
       }

    return(
       <div style={{border: '2px solid green'}}>
          <h3>Counter:{count}</h3>
          <button onClick={handleAdd} style={{backgroundColor:'yellow'}}>Add</button>
          <button onClick={handleReduce} style={{backgroundColor:'green'}}>Reduce</button>
       </div> 
    )
}