import React, { Component } from 'react';
import Preloader from './components/Preloader';

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
            .then((json) => {
              this.setState({
                candidates: json.candidates
              });
            })
            .catch(err => console.error('ERROR:', err));
    }, 1000);
  }

  render() {
    const { candidates } = this.state;
    if (candidates.length === 0) {
      return (
        <div className="container">
          <div className="row">
            <Preloader />
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <h1>Desafio 03</h1>
        {candidates.map(({ id, name, votes }) => {
          return (
            <p key={id}>{name} - {votes}</p>
          );
        })}
      </div>
    );
  }
}
