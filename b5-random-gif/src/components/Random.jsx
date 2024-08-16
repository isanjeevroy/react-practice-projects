import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY; 
function Random() {

    const {gif,loading,fetchData} = useGif();

    return (
        <div className='box-content w-[500px] h-[600px] p-4 bg-green-900 rounded-md'>

            <div className='flex justify-center text-white font-bold text-2xl mb-6'>
            <h1 >RANDOM GIF</h1>
            </div>
            <div className='flex justify-center items-center h-[480px]'>
            {
                loading ? (<Spinner/>) : (<img src={gif} alt="gif" width={450} className='rounded-md'/>)
            }
            </div>
            
            <button className='bg-yellow-500 w-full text-xl text-white font-bold my-5 py-2 rounded-md'
            onClick={()=>{fetchData()}}
            > Generate </button>
        </div>
        
    )
}

export default Random