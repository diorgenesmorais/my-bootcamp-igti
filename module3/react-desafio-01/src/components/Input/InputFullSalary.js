import React, { Component } from 'react'

export default class InputFullSalary extends Component {
    constructor() {
        super();
    }

    handleValue = (event) => {
        const salary = parseFloat(event.target.value);
        this.props.onSalaryChange(salary);
    }

    render() {
        const { currentValue } = this.props;
        return (
            <div className="input-field col s12">
                <input id="inputFullSalary" type="number" onChange={this.handleValue} value={currentValue} autoFocus step="100" />
                <label htmlFor="inputFullSalary">Salário Bruto</label>
            </div>
        )
    }
}
