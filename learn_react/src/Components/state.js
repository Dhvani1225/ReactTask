import React, { Component } from "react";

class Visitor extends Component {
    constructor()
    {
        super()
        {
            this.state = {
                message : "HEY"
            }
        }
    }
    change(){
        this.setState({
            message : "Thank you for Subscribing"
        })
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.change()}>Subscribe</button>
            </div>
            )
    }
}

export default Visitor;