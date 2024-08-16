import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//step-1
export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // data filling from api
    async function fetchBlogPosts(page=1,tag,category){
        setLoading(true);
        let baseUrl = import.meta.env.VITE_API_KEY;
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url +=`&tag=${tag}`
        }
        if(category){
            url +=`&category=${category}`;
        }

        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
   

    function handlePageChange(page){
        navigate({search:`?page=${page}`})
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    //step-2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}