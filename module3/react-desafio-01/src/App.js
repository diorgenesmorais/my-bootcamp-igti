import React, { Component } from 'react';
import Bar from './components/Bar/Bar';

export default class App extends Component {
  render() {
    return (
      <Bar value={80} color={'red'} />
    );
  }
}
