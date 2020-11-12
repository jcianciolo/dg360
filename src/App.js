import React, { useState } from 'react';
import Counter from './components/Counter';
import './index.css';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>Total: { total }</h1>
      <Counter firstBonus={1} lastBonus={2} perfectBonus={3} total={total} setTotal={setTotal} />
      <Counter firstBonus={2} lastBonus={2} perfectBonus={3} total={total} setTotal={setTotal} />
      <Counter firstBonus={3} lastBonus={2} perfectBonus={3} total={total} setTotal={setTotal} />
      <Counter firstBonus={3} lastBonus={2} perfectBonus={3} total={total} setTotal={setTotal} />
      <Counter firstBonus={3} lastBonus={2} perfectBonus={3} total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
