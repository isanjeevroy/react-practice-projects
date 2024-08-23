function handlerFromSubmit(event){
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form(){
    return(
        <form onSubmit={handlerFromSubmit}>

            <input type="text" placeholder="write something"/>
            <button>Submit</button>
        </form>
    );
}