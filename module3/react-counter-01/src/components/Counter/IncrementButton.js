import React, { Component } from 'react'

export default class IncrementButton extends Component {
    handleButton = () => {
        this.props.onIncrement(1);
    }

    render() {
        return (
            <button className="waves-effect waves-light btn green darken-4"
            onClick={this.handleButton}>+</button>
        )
    }
}
