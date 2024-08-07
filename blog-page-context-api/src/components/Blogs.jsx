import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

function Blogs() {

  // consume
  const {loading,posts} = useContext(AppContext);
  return (
    <div className='h-[100vh] mt-[60px] mb-[140px]'>
      {
        loading? (<Spinner/>) : (
          posts.length === 0 ? (
            <div> 
              <p>No Post Found</p>
            </div>
          ) : (
            posts.map((post)=>(
              <BlogDetails key={post.id} post={post}/>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs