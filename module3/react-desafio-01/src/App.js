import React, { Component } from 'react';
import Bar from './components/Bar/Bar';
// import Input from './components/Input/Input';

import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
  constructor() {
    super();

    this.numberFormat = Intl.NumberFormat('pt-BR', { currency: 'BRL', minimumIntegerDigits: 1, minimumFractionDigits: 2 });
    this.state = {
      salary: 0,
      baseInss: 0,
      descontoInss: 0,
      baseIrpf: 0,
      descontoIrpf: 0,
      liquido: 925
    };
  }

  handlerInputValue = (event) => {
    const { value } = event.target;

    if (value) {
      const salary = parseFloat(value);
      this.setState({salary});
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
    const { salary } = this.state;
    if (previousStates.salary !== salary) {
      this.setState({
        baseInss: calculateSalaryFrom(salary).baseINSS,
        descontoInss: calculateSalaryFrom(salary).discountINSS,
        baseIrpf: calculateSalaryFrom(salary).baseIRPF,
        descontoIrpf: calculateSalaryFrom(salary).discountIRPF,
        liquido: calculateSalaryFrom(salary).netSalary
      });
    }
  }

  render() {
    const { baseInss, descontoInss, baseIrpf, descontoIrpf, liquido } = this.state;

    return (
      <div className="container">
        <h1 className="center-align">React Salário</h1>
        <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="myInput" type="number" onChange={this.handlerInputValue} />
                  <label htmlFor="myInput">Salário Bruto</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s3">
                  <input type="text" value={this.format(baseInss)} readOnly />
                  <label>Base INSS</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.format(descontoInss)} readOnly />
                  <label>Desconto INSS</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.format(baseIrpf)} readOnly />
                  <label>Base IRPF</label>
                </div>
                <div className="input-field col s3">
                  <input type="text" value={this.format(descontoIrpf)} readOnly />
                  <label>Desconto IRPF</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s3">
                  <input type="text" value={this.format(liquido)} readOnly />
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
              <Bar value={this.porcentagemLiquido(descontoInss)} color={'orange'} />
              <Bar value={this.porcentagemLiquido(descontoIrpf)} color={'red'} />
              <Bar value={this.porcentagemLiquido(liquido)} color={'green'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
