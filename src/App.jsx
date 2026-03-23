import Cardlist from "./Cardlist";
import { useEffect, useState } from "react";
import { useApi } from "./hooks/useApi";
function App(){

    const[url,setUrl]= useState('http://localhost:3000/products');

    const{product,loading} = useApi(url);


    // const getData = () =>{
    //     fetch("http://localhost:3000/products")
    //     .then(data=>data.json())
    //     .then(data1=>setProduct(data1))
    // }
    // getData();
    
    const [cnt,setCnt] = useState(0);


    console.log(product);
    return(
        <>
        <p>This is parent component</p>
        <h1>E-products</h1>
        {
            loading && <div className="spinner-border text-danger"></div>
        }
        <button onClick={()=>setCnt(cnt+1)}>Callapi</button>
        <br/><br/>
        <div className="filter">
            <button onClick={()=>setUrl('http://localhost:3000/products')}
            className="btn btn-success b1">All</button>
            <button onClick={()=>setUrl('http://localhost:3000/products?category=mobile')}
            className="btn btn-danger b1">Mobile</button>
            <button onClick={()=>setUrl('http://localhost:3000/products?category=watch')}
            className="btn btn-primary b1">Watch</button>
            <button onClick={()=>setUrl('http://localhost:3000/products?category=tv')}
            className="btn btn-info b1">Tv</button>
        </div>
        <Cardlist product1 = {product}/>
        </>
    )
}
export default App;