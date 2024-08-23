import { useState } from "react";

export default function Counter(){

    let [count, setCount] = useState(0);
    let incCount = ()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incCount}>Click Me</button>
        </div>
    );
}