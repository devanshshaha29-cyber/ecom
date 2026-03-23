import Card from "./Card";
function Cardlist({product1}){
    return(
        <>
          <p>This is Cardlist</p>
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/> */}
          {
            product1 && product1.map((p,ind)=>{
                return <Card p1=  {p} key={ind}/>
            })
          }
        </>
    )
}
export default Cardlist;