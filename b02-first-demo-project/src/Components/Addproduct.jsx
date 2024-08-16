import React, { useState } from 'react'


function Addproduct({newProductAdd}) {

  const[title, setTitle] = useState("");
  const[price, setPrice] = useState("");

  function titleHandler(event){
        setTitle(event.target.value);
  }
  function priceHandler(event){
        setPrice(event.target.value);
  }

  function formHandler(event){
    event.preventDefault();
    console.log("Jai shree Ram.");

    let new_product_data = {
        title:title,
        price:price
    }
    
    newProductAdd(new_product_data);
    setTitle("");
    setPrice("");
  }

  return (
    <div>
        <form onSubmit={formHandler}>

            <label htmlFor="title" >Title </label>
            <input type="text" onChange={titleHandler} value={title}/> <br /> 

            <label htmlFor="price">Price </label>
            <input type="text" onChange={priceHandler} value={price}/> <br />

            <input type="submit" value="Submit" className='my-2 p-1 border-solid border-2 border-sky-500' />
        </form>
    </div>
  )
}

export default Addproduct