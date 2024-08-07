import React from 'react'

function Product({ product,deleteProductData }) {

    function deleteProduct(){
        deleteProductData(product.title);
    }

    return (
        <div>
            <div className='bg-sky-400 my-3 rounded-sm px-10 py-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1>{product.title}</h1>
                <p>Rs. {product.price}</p>
                <button> Buy Now</button>
                <button onClick={deleteProduct}>Delete</button>
            </div>

        </div>
    )
}

export default Product