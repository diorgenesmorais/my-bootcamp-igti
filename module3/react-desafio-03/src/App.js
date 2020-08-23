import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: []
    }

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('ERROR:', err));
    }, 1000);
  }

  render() {
    return <h1>Desafio 03</h1>;
  }
}
