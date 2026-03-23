import { useRef } from "react";

function Login(){
    const username= useRef();
    console.log(username);

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(username);
        console.log(username.current.value);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={username}/>
            <button>Submit</button>
        </form>
        </>
    )
}
export default Login;