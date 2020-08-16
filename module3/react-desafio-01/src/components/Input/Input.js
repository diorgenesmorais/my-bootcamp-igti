import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const { id, value } = this.props;

        return (
            <input type="text" className="validate" id={id} value={value} />
        )
    }
}
