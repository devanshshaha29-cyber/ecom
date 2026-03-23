import img1 from "./assets/dev.jpeg"
import { Link } from "react-router-dom";
 function Card({p1}){
    return(
        <>
        {/* <p>This is card component</p>
        <h1>{p1.id}</h1>
        <h2>{p1.name}</h2>
        <h3>{p1.category}</h3>
        <h4>{p1.price}</h4>
        <p>{p1.description}</p> */}

        <div className="card" style={{width:400}}>
  <img className="card-img-top" src={img1} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">{p1.id}</h4>
    <h4 className="card-title">{p1.name}</h4>
    <h4 className="card-title">{p1.category}</h4>
    <h5 className="card-title">{p1.price}</h5>
    <p className="card-text">{p1.description}</p>
    <Link to={`/product/${p1.id}`} className="btn btn-primary">Readmore</Link>
  </div>
</div>
        </>
    )
}
export default Card;