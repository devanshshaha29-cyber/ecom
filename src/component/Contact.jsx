import { useState } from "react";

function Contact(){

    const [username,setUsername]= useState();


    const onSubmitHandler = (event)=>{
        event.preventDefault();
        console.log(username);
    }

    const onchangeHandler = (event)=>{
        setUsername(event.target.value);
    }
    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <input type="text"
            value={username}
            onChange={onchangeHandler}/>
            <button>Submit</button>
        </form>
        </>
    )
}
export default Contact;