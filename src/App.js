import React, { useState } from 'react';
import Counter from './components/Counter';
import './index.css';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h4>Putts Made</h4>
      <Counter firstBonus={2} lastBonus={2} perfectBonus={5} total={total} setTotal={setTotal} />
      <Counter firstBonus={2} lastBonus={3} perfectBonus={10} total={total} setTotal={setTotal} />
      <Counter firstBonus={3} lastBonus={4} perfectBonus={15} total={total} setTotal={setTotal} />
      <Counter firstBonus={5} lastBonus={6} perfectBonus={20} total={total} setTotal={setTotal} />
      <Counter final={true} firstBonus={8} lastBonus={10} perfectBonus={25} total={total} setTotal={setTotal} />
      <h1>Total: { total }</h1>
      <h1>Score: { (total * 2) }</h1>
    </div>
  );
}

export default App;
