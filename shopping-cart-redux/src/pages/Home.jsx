import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {

  const API_URL = import.meta.env.VITE_API_KEY;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);

    }catch(error){
      console.log(error);
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchProductData();
  },[]);

  return (
    <div>
      {
        loading? <Spinner/> : 
        posts.length > 0 ?
        ( <div>
          {
            posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
          }
        </div> ):

        (<div>
          <p>No data found</p>
        </div>)
      }

    </div>
  )
}

export default Home