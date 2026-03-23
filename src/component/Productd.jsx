import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Link } from "react-router-dom";

function Productd(){
    const navigate = useNavigate();
    const params= useParams();
    console.log(params.pid);
    const {product} = useApi(`http://localhost:3000/products/${params.pid}`);
    console.log(product);

    return(
        <>
       <div className="card" style={{width:400}}>
  <img className="card-img-top" src="https://i.ytimg.com/vi/UFpDYctASuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcyuKQjbJuQRz_yEMF1C25S6n6YA" alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">{product.id}</h4>
    <h4 className="card-title">{product.name}</h4>
    <h4 className="card-title">{product.category}</h4>
    <h5 className="card-title">{product.price}</h5>
    <p className="card-text">{product.description}</p>
    <Link to="" className="btn btn-primary">AddtoCart</Link>
        <button className="btn btn-success" onClick={()=>{
            setTimeout(()=>{
              navigate("/product")
            },1000) 
        }}>goback</button>
        </div>
</div>
        </>
    )
}
export default Productd;