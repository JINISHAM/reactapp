import "../../css/NavBar.css"
import {Link} from "react-router-dom"
const Login = () =>{
    return(
        <center>
        <div>
            <h1>LOGIN</h1>
        <form>
            <label for="uname">Username: </label>
            <input type="text"/><br></br><br></br>
            <label for="email">Email: </label>
            <input type="email"/><br></br><br></br>
            <label for="password">Password: </label>
            <input type="password"/><br></br><br></br>
            <input class="submit" type="submit"/>
            <div class="login">
            <p>Not have an Account?</p>
            <Link to = "/signup">Signup</Link>
            </div>
        </form>
        
        </div>
        </center>
    )
}
        
export default Login;
{/* // import  {useReducer}  from "react";
// const value={count:0}
// function countFunction(state,action){
//     switch (action.type) {
//         case "sub":
//             return {count:state.count-1}
//         case "add":
//             return {count:state.count+1}
//         case "reset":
//             return {count:value.count}
//         default:
//             return {count:value.count}
// }
// }
// const Login =()=>{
//     const [countVal,updateCount]=useReducer(countFunction,value);
//     return (
//         <div>
//            <h1> This is useReducer example</h1>
//            <h2>Count:{countVal.count}</h2>
//            <button onClick={()=>updateCount({type:"add"})}>Add</button>
//            <button  onClick={()=>updateCount({type:"sub"})}>Sub</button>
//            <button onClick={()=>updateCount({type:"reset"})}>Reset</button>
//         </div>
//     )
// }
// // const Login = () =>{
// //     return(
// //         <div>
// //             <h1>This page is meant for your login details</h1>
// //         </div>
// //     )
// // }
//  export default Login */}