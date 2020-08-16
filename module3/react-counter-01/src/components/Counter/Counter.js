import React, { Component } from 'react'

import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            currentCounter: 2,
            steps: 0
        };
    }

    render() {
        const { currentCounter, steps } = this.state;
        return (
            <div className={css.counterContainer}>
                <DecrementButton />
                <span className={css.counterValue}>{ currentCounter }</span>
                <IncrementButton />
                <span className={css.counterValue}>({ steps })</span>
            </div>
        )
    }
}
