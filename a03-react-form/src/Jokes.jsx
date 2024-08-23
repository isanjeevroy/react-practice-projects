import { useEffect, useState } from "react";

export default function Joke() {

  const [joke,setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  let getNewJokes = async ()=>{
    let res = await fetch(URL);
    let resJson = await res.json();
    setJoke({setup:resJson.setup, punchline:resJson.punchline});
  }

  useEffect(()=>{
    // async function getFirstJoke(){
    //   let res = await fetch(URL);
    // let resJson = await res.json();
    // setJoke({setup:resJson.setup, punchline:resJson.punchline});
    // console.log(resJson);
    // }
    // getFirstJoke();
    getNewJokes();
  },[]);

  return (
    <div>
        <h1>!! Jokes !!</h1>
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
        <button onClick={getNewJokes}>get a New Joke</button>
    </div>
  )
}
