import React, { Component } from 'react'

import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Step from './Step';

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            currentCounter: 2,
            steps: 0
        };
    }

    handleButtonClick = (value) => {
        const { currentCounter, steps } = this.state;

        this.setState({
            currentCounter: currentCounter + value,
            steps: steps + 1
        });
    }

    render() {
        const { currentCounter, steps } = this.state;
        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={this.handleButtonClick} />
                <Value onValue={currentCounter} />
                <IncrementButton onIncrement={this.handleButtonClick} />
                <Step onValue={steps} />
            </div>
        )
    }
}
