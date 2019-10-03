import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery title="CA Lotto" numBalls={6} maxNum={99} />
    </div>
  );
}

export default App;
