import React, { useState } from 'react'
import Tours from './components/Tours'
import data from './data';

function App() {
  
  const [tours, setTours] = useState(data);

  function removeTour(id){
    setTours(prevData => prevData.filter(tour => tour.id !== id));
  }

  if(tours.length===0){
     return(
        <div>
          <h1>No Tours Left</h1>
          <button onClick={()=>setTours(data)}>Refresh</button>
        </div>
     )
  }

  return (
    <div>
      <h1>Plan with Love</h1>
       <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App