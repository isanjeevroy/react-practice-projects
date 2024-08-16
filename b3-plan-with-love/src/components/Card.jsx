import React, { useState } from 'react'

function Card({ tour, removeTour }) {

    const [readmore, setReadmore] = useState(false);
    const description = readmore? tour.info: `${tour.info.substring(0,50)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div >

            <img src={tour.image} alt="image" />
            <div>
                <h1>{tour.price}</h1>
                <h1>{tour.name}</h1>
                <p>{description} <span className='black' onClick={readmoreHandler}> {readmore?"show less":"read more"}</span></p>
                
            </div>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
    )
}

export default Card