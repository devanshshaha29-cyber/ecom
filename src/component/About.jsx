import { useSearchParams } from "react-router-dom";


function About(){

    const [data,setData] = useSearchParams();
    console.log(data.get("name"));
    console.log(data.get("email"));
    return(
        <>
        <h1>This is About component</h1>
        {/* onClick={()=>setData({name:"neha",email:"neha@gmail.com"})} */}
        <button onClick={()=>setData({name:"neha",email:data.get("email")})}>Change</button>
        </>
    )
}
export default About; 