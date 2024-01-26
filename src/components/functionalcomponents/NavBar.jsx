import "../../css/NavBar.css"
import {Link} from "react-router-dom"
const NavBar = ()=>{
    return(
        <ul>
            <li><Link to = "/Home" className="link">Home</Link></li>
            <li><Link to = "/About" className="link">About</Link></li>
            <li><Link to = "/Skills" className="link">Skills</Link></li>
            <li><Link to = "/Login" className="link">Login</Link></li>
        </ul>
    )
}

export default NavBar;
