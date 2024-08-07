import React from 'react'
import Card from './Card'

function Tours({tours,removeTour}) {

  return (
    <div>
        <div className='w-full  bg-slate-800'>
              {
                tours.map((tour)=>(
                  <Card key={tour.id} tour={tour} removeTour={removeTour}/>
                ))
              }
        </div>
    </div>
  )
}

export default Tours