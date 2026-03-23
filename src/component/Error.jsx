import { useRouteError } from "react-router-dom";

function Error(){

    const err = useRouteError();

    return(
        <>
        <h1>{err.status}</h1>
        <img src="https://i.ytimg.com/vi/UFpDYctASuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcyuKQjbJuQRz_yEMF1C25S6n6YA" alt="error"/>
        </>
    )
}
export default Error;