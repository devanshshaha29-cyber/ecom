import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Home(){
    const{theme} = useContext(ThemeContext);
    console.log(theme);

    const[formData,setFormData]=useState({
        username:"",
        emailL:"",
        password:"",
        address:"",
        age:"",
        contact:"",
        con:"",
        sub:false
        
    })
    const [error,setError] = useState({});

 
   const onSubmitHandler = (event) =>{
        setError({});
        event.preventDefault();
        if(!formData.username){
            setError({
                err1:"please enter username"
            })
            return
        }
        else if(formData.password.length < 3 || formData.password.length >9){
            setError({
                err2:"length should be in range of 3 and 9"
            })
            return
        }
        
        else if(formData.age < 18 || formData.age > 65){
            setError({
                err3:"age should be in range 18 to 65"
            })
            return
        }
    }

    const onChangeHandler = (event) =>{
               setFormData({
                ...formData,
                [event.target.name]:event.target.type==="checkbox"? event.target.checked : event.target.value})
               }
    
    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <input text="text"
                name="username"
                value={formData.username}
                onChange={onChangeHandler}/>
                {error.err1 && <span style={{color:'red'}}>{error.err1}</span>}<br/><br/>
                <input type="email"
                name="emailL"
                value={formData.emailL}
                onChange={onChangeHandler}/><br/><br/>
                <input type="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                />
                {error.err2 && <span style={{color:'red'}}>{error.err2}</span>}
                <br/><br/>
                <textarea name="address" 
                value={formData.address}
                onChange={onChangeHandler}
                />
                
                <br/><br/>
                <input type="number"
                name="age"
                value={formData.age}
                onChange={onChangeHandler}
                />
                {error.err3 && <span style={{color:'red'}}>{error.err3}</span>}
                <br/><br/>
                <input type="tel"
                name="contact"
                value={formData.contact}
                onChange={onChangeHandler}
                /><br/><br/>
                <select name="con"
                value={formData.con}
                onChange={onChangeHandler}
                >
                <option value="UK">Uk</option>
                <option value="Usa">Usa</option>
                <option value="JAPAN">JAPAN</option>
                </select>
                <br/><br/>
                <input type="checkbox"
                name="sub"
                checked={formData.sub}
                onChange={onChangeHandler}
                 />
                <button>Submit</button>
            </form>
            <br/><br/>

            <h1>{JSON.stringify(formData)}</h1>
        </>
    )
}
export default Home;   