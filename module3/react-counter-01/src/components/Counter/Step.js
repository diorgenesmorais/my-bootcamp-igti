import React, { Component } from 'react'

import css from './counter.module.css';

export default class Step extends Component {
    render() {
        return (
            <span className={css.counterValue}>({ this.props.onValue })</span>
        )
    }
}
