import React, { Component } from 'react';
import Bar from './components/Bar/Bar';
// import Input from './components/Input/Input';

import { calculateSalaryFrom } from './helpers/salary';
import InputFullSalary from './components/Input/InputFullSalary';

export default class App extends Component {
  constructor() {
    super();

    this.numberFormat = Intl.NumberFormat('pt-BR', { currency: 'BRL', minimumIntegerDigits: 1, minimumFractionDigits: 2 });
    this.state = {
      salary: 0
    };
  }

  handleFullSalaryChange = (salary) => {
    if (salary) {
      this.setState({ salary });
    }
  }

  format = (value) => {
    return `R$ ${this.numberFormat.format(value)}`;
  }

  porcentagemLiquido = (value) => {
    const { salary } = this.state;
    return (value / salary) * 100;
  }

  valorComPorcentagem = (value = 0) => {
    const result = this.format(value);
    return `${result} (${this.porcentagemLiquido(value)}%)`;
  }

  componentDidUpdate(_, previousStates) {
    console.log('atualizar o component...');
  }

  render() {
    console.log('render...');
    const { salary } = this.state;
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(salary);
    return (
      <div className="container">
        <h1 className="center-align">React Salário</h1>
        <div className="row">
            <form className="col s12">
              <div className="row">
                <InputFullSalary currentValue={salary} onSalaryChange={this.handleFullSalaryChange} />
              </div>
              <div className="row">
                <div className="input-field col s3">
                  <input type="text" value={this.format(baseINSS)} readOnly />
                  <label>Base INSS</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.format(discountINSS)} readOnly />
                  <label>Desconto INSS</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.format(baseIRPF)} readOnly />
                  <label>Base IRPF</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.format(discountIRPF)} readOnly />
                  <label>Desconto IRPF</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s3">
                  <input type="text" value={this.format(netSalary)} readOnly />
                  <label>Salário líquido</label>
                </div>
              </div>
            </form>
        </div>
        <div className="row">
          <div className="col s12">
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Bar value={this.porcentagemLiquido(discountINSS)} color={'orange'} />
              <Bar value={this.porcentagemLiquido(discountIRPF)} color={'red'} />
              <Bar value={this.porcentagemLiquido(netSalary)} color={'green'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
