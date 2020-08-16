import React, { Component } from 'react';
import Bar from './components/Bar/Bar';
import Input from './components/Input/Input';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      base: 0,
      inss: 0,
      irpf: 0,
      liquido: 100
    };
  }

  render() {
    const { base, inss, irpf, liquido } = this.state;
    return (
      <div className="container">
        <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <Input id="myInput" />
                  <label for="myInput">Salário Bruto</label>
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
              <Bar value={inss} color={'orange'} />
              <Bar value={irpf} color={'red'} />
              <Bar value={liquido} color={'green'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
