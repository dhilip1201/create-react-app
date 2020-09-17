import React, { Component } from 'react'

export class Hello extends Component {
    render() {
        return (
            <div>
                 <h1>Hello {this.props.name} {this.props.secondname} {this.props.children}</h1>
            </div>
        )
    }
}

export default Hello
