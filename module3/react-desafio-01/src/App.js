import React, { Component } from 'react';
import Bar from './components/Bar/Bar';
import Input from './components/Input/Input';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <form className="col s12">
                <div className="input-field col s12">
                  <Input />
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
              <Bar value={20} color={'orange'} />
              <Bar value={5} color={'red'} />
              <Bar value={75} color={'green'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
