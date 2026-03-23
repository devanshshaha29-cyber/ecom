import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import lightmode from '../icons/lightmode.svg'
import darkmode from '../icons/darkmode.svg'


function Nav(){

const{theme,setTheme} = useContext(ThemeContext);
console.log(theme);

let myStyle = {};
if(theme==='dark'){
  myStyle = {
    backgroundColor:'grey'
  }
}
if(theme==='light'){
  myStyle = {
    backgroundColor:'yellow'
  }
}


    return(
        <>
        <header>
      <nav className="navbar navbar-expand-sm" style={myStyle}>

  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>
      <li>
        {
            theme === 'light'?
            (
              <img src={darkmode} alt="dark"
              onClick={()=>setTheme('dark')}
              />
            )
            :
            (
              <img src={lightmode} alt="light"
              onClick={()=>setTheme('light')}
              />
            )
        }
      </li>
    </ul>
  </div>
</nav>
        
        </header>
        <main>
            
            <Outlet/>
        </main>
        </>
    )
}
export default Nav;