import { useEffect, useState } from "react"


export default function Counter() {

    const [countX,setCountX] = useState(0);
    const [countY,setCountY] = useState(0);

    let incCountX = ()=>{
        setCountX(currData=>currData+1);
    };
    let incCountY = ()=>{
        setCountY(currData=>currData+1);
    };

    // When CountX StateVAriable Changes
    useEffect(function something(){
        console.log("side effect");
    },[countX]);

    //! only one time execute when 1st time render, dependencies: []
    // useEffect(function something(){
    //     console.log("side effect");
    // },[ ]);

  return (
    <div>
        <h3>CountX = {countX}</h3>
        <button onClick={incCountX}>+1</button>
        <br />
        <h3>CountY = {countY}</h3>
        <button onClick={incCountY}>+1</button>
    </div>
  )
}
