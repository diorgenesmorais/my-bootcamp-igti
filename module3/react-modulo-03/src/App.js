import React from 'react';
import Card from './components/Card';

export default function App() {
  
  const [amount, setAmount] = React.useState(1000);
  const [rate, setRate] = React.useState(1);
  const [month, setMonth] = React.useState(1);

  const handleAmount = ({target}) => {
    setAmount(Number(target.value));
  }

  const handleRate = ({target}) => {
    setRate(Number(target.value));
  }

  const handleMonth = ({target}) => {
    setMonth(Number(target.value));
  }

  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>React - Juros Compostos</h1>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <input id="montante" type="number" step="100" autoFocus value={amount} onChange={handleAmount} />
              <label htmlFor="montante" className="active">Montante inicial</label>
            </div>
            <div className="input-field col s4">
              <input id="taxa" type="number" step="0.1" value={rate} onChange={handleRate} min="-12" max="12" />
              <label htmlFor="taxa" className="active">Taxa de juros mensal</label>
            </div>
            <div className="input-field col s4">
              <input id="mes" type="number" step="1" value={month} onChange={handleMonth} min="1" />
              <label htmlFor="mes" className="active">Período (mensal)</label>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <Card />
      </div>
    </div>
  );
}
