/*Example1*/
import "../../css/PropsComponent.css"
function PropsComponent(props){
    //inline
    /*const StyleAttrs={
        backgroundColor:"brown",
        color:"white"
    }*/
    return(
        //inline
        <div /*style={StyleAttrs}*/>
            <h2>Hello,{props.name}<br></br> This is {props.course} class</h2>
        </div>
    )

}
export default PropsComponent

/*Example2*/

/*function MsgComponent(msg){
    const StyleAttrs={
        backgroundColor:"brown"
    }
    return(
        <div>
            <h2>{msg.name} is from {msg.place}</h2>
        </div>
    )
}
export default MsgComponent;*/
