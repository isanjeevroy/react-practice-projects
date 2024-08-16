import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails';




const baseUrl = import.meta.env.VITE_API_KEY;

function BlogPage() {

  const newBaseUrl = import.meta.env.VITE_NEW_API_KEY
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedblogs] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();

  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}/get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedblogs(data.relatedBlogs);  

    } catch (error) {

      console.log("error in blog post");
      setBlog(null);
      setRelatedblogs([]);
       
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div>
      <Header />
      <div className='my-20'>
        <button
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>

      {
        loading ?
          (
            <div>
              <p>Loading</p>
            </div>) :
          blog ?
            (
              <div>
                <BlogDetails post={blog} />
                <h2> Related Blogs</h2>
                {
                  
                  relatedblogs.map((post) => (
                    <div key={post.id}>
                      <BlogDetails post={post} />
                    </div>
                  ))
                }
              </div>
            ) :
            (<div>
              <p>No Blog Found</p>
            </div>)
      }

    </div>
  )
}

export default BlogPage