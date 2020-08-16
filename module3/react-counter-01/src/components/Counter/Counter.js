import React, { Component } from 'react'

import css from './counter.module.css';
import IncrementButton from './IncrementButton';

export default class Counter extends Component {
    constructor() {
        super();
        this.currentCounter = 2;
    }

    render() {
        return (
            <div className={css.counterContainer}>
                <button className="waves-effect waves-light btn red darken-4">-</button>
                <span className={css.counterValue}>{ this.currentCounter }</span>
                <IncrementButton />
            </div>
        )
    }
}
