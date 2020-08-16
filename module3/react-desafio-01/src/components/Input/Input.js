import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const { value } = this.props;

        return (
            <input id="myInput" type="text" className="validate" value={value} />
        )
    }
}
