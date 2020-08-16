import React, { Component } from 'react'

import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

export default class Counter extends Component {
    constructor() {
        super();
        this.currentCounter = 2;
    }

    render() {
        return (
            <div className={css.counterContainer}>
                <DecrementButton />
                <span className={css.counterValue}>{ this.currentCounter }</span>
                <IncrementButton />
            </div>
        )
    }
}
