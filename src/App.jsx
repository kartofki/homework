import { useState } from 'react';
import LinkedListTask from './components/LinkedListTask';
import StackTask from './components/StackTask';
import BinaryConverter from './components/BinaryConverter';
import CarClassTask from './components/CarClass';

function App() {
  const [active, setActive] = useState('linked');

  return (
    <div className="container">
      <h1>Домашна работа</h1>
      <div className="task-buttons">
        <button onClick={() => setActive('linked')}>Задача 1</button>
        <button onClick={() => setActive('stack')}>Задача 2</button>
        <button onClick={() => setActive('binary')}>Задача 3</button>
        <button onClick={() => setActive('car')}>Задача 4</button>
      </div>

      {active === 'linked' && <LinkedListTask />}
      {active === 'stack' && <StackTask />}
      {active === 'binary' && <BinaryConverter />}
      {active === 'car' && <CarClassTask />}
    </div>
  );
}

export default App;