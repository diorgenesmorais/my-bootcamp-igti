import React from 'react';
import Preloader from './components/Preloader';
import Candidates from './components/Candidates';
import Header from './components/Header';

export default function App() {
  const [candidates, setCandidates] = React.useState([]);

  React.useEffect(() => {
    let interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
            .then(res => res.json())
            .then((json) => {
              setCandidates(json.candidates);
            })
            .catch(err => console.error('ERROR:', err));
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [candidates]);

  if (candidates.length === 0) {
    return (
      <Preloader />
    )
  }
  return (
    <div className="container">
      <Header>Votação</Header>
      <Candidates list={candidates} />
    </div>
  );
}
