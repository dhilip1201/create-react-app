import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor(props) {
        super()
    
        this.state = {
             message: "Manju"
        }
        // this.clickandler=this.clickandler.bind(this);
    }
    clickandler=()=>{
        this.setState({
            message:"Welcome"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
