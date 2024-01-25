import React from "react"

class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"MERN"
        }
    }
    changeState = () =>{
        //this.state.name = "Kongu Engineering College"
        console.log("Kongu Engineering College")
    }
    render(){
        return(
            <div>
                <h1>This is State Component</h1>
                <h2>Hello, {this.state.name}<br></br>This is {this.state.course} class</h2>
                <h3>I am changing the state of the name from {this.state.name} to {this.changeState()}</h3>
                {/*<button onClick={this.changeState}>Clickme</button>*/}
                <button onMouseOver={this.changeState}>Clickme</button>
                {/*<button onMouseOut={this.changeState}>Clickme</button>*/}
            </div>
        )
    }
}
export default StateComponent