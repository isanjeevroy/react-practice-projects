import React, { useState } from 'react'
import Product from './Product'
import Addproduct from './Addproduct'

function Products() {

    let data = [
        {   
            title:"Think Like Monk",
            price: 550
        },
        {  
            title:"Mahatma Gandhi",
            price: 300
        },
        {  
            title:"Half Girlfriend",
            price: 749
        },
    ]

    let [fullData, setFullData] = useState(data);

    function newProductAdd(newData){
        console.log(newData);
        setFullData(prevFullData => {
            return [...prevFullData, newData];
            
        });
    }

    function deleteProductData(title) {
        setFullData(prevFullData => prevFullData.filter(product => product.title !== title));
    }

  return (
    <div className='w-1/4 bg-slate-500 rounded-sm' style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>

        <Addproduct  newProductAdd={newProductAdd}/>
        {
            fullData.map((product,index)=>{
                return <Product key={index} product={product} deleteProductData={deleteProductData}/>
            })
        }
       
    </div>
  )
}

export default Products