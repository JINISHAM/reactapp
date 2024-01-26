import "../../css/NavBar.css"
import {Link} from "react-router-dom"
const Signup = () =>{
    return(
        <center>
        <div>
            <h1>SIGNUP</h1>
        <form>
            <label for="uname">Username: </label>
            <input type="text"/><br></br><br></br>
            <label for="email">Email: </label>
            <input type="email"/><br></br><br></br>
            <label for="password">Password: </label>
            <input type="password"/><br></br><br></br>
            <label for="cpassword">Confirm Password: </label>
            <input type="password"/><br></br><br></br>
            <input class="submit" type="submit"/>
            <div class="signup">
            <p>Already have an Account?</p>
            <Link to = "/Login">Login</Link>
            </div>
        </form>
        
        </div>
        </center>
    )
}
        
export default Signup;
