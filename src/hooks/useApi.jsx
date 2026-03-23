import { useState } from "react"
import { useEffect } from "react"


export const useApi =(url)=>{
     const [product,setProduct] = useState([]);
     const[loading,setLoading] = useState(true);

     useEffect (()=>{
      setLoading(true);
        fetch(url)
     .then(data=>data.json())
      .then(data1=>setProduct(data1))
      .finally(()=>setLoading(false))
    },[url])

    console.log(product);

    return{product,loading};
}
export default useApi;