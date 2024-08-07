import React, { useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

function Tag() {

  const [tag, setTag] = useState('car');
  const {gif,loading,fetchData} = useGif(tag);
 
  function changHandler(event){
      setTag(event.target.value);
  }
  return (
      <div className='box-content w-[500px] h-[600px] p-4 bg-green-900 rounded-md'>
           <div className='flex justify-center text-white font-bold text-2xl mb-6'>
            <h1 >{`RANDOM ${tag.toUpperCase()} GIF`}</h1>
            </div>
            <div className='flex justify-center items-center h-[435px]'>
            {
                loading ? (<Spinner/>) : (<img src={gif} alt="gif" width={450} className='rounded-md'/>)
            }
            </div>
          
          <input type="text" onChange={changHandler} value={tag} className='w-full mt-3 py-2 rounded-md text-center' />
          <button className='bg-yellow-500 w-full text-xl text-white font-bold my-3 py-2 rounded-md'
          onClick={()=>{fetchData()}}
          > Generate </button>
      </div>
      
  )
}

export default Tag