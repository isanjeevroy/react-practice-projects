import { useEffect, useState } from 'react'
import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;


function useGif(tag) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
    
        const { data } = await axios.get(tag ? `${url}&tag=${tag}`: url );
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false); 
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {gif,loading,fetchData}
}

export default useGif