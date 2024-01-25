import "../../css/NavBar.css"
import {Link} from "react-router-dom"
const NavBar = ()=>{
    return(
        <ul>
            <li><Link to = "/home">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/skills">Skills</Link></li>
            <li><Link to = "/login">Login</Link></li>
        </ul>
    )
}

export default NavBar;
