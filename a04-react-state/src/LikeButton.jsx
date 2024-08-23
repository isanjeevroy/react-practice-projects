import { useState } from "react";

export default function LikeButton(){

    let [isLiked, setIsLiked] = useState(false);
    let [count, setCount] = useState(0);

    let isChecked = ()=>{
        setIsLiked(!isLiked);
        setCount(count+1)
    }

    let likeStyle = {color:"red"};
    return(
        <div>
            <h1>Clicks: {count}</h1>
            <p onClick={isChecked}>
            {
                isLiked?<i class="fa-solid fa-heart" style={likeStyle}></i>: <i class="fa-regular fa-heart"></i>
            }
            </p>
        </div>
    );
}