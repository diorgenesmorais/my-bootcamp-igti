import React, { Component } from 'react'

export default class DecrementButton extends Component {
    handleButton = () => {
        this.props.onDecrement(-1);
    }
    render() {
        return (
            <button className="waves-effect waves-light btn red darken-4"
            onClick={this.handleButton}>-</button>
        )
    }
}
