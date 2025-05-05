import { useState } from 'react';

function Node(value) {
  this.value = value;
  this.next = null;
}

export default function LinkedListTask() {
  const [n, setN] = useState('');
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    const num = parseInt(n);
    if (isNaN(num) || num < 10 || num > 100) {
      alert('Въведи число между 10 и 100');
      return;
    }

    let head = null, tail = null;
    const values = [];

    for (let i = 0; i < num; i++) {
      const val = Math.floor(Math.random() * 1000) + 1;
      values.push(val);
      const node = new Node(val);
      if (!head) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
    }

    const min = Math.min(...values);
    const avg = (values.reduce((a, b) => a + b) / values.length).toFixed(2);
    setOutput({ values, min, avg });
  };

  return (
    <div>
      <h2>Задача 1</h2>
      <input
        type="number"
        placeholder="Въведи число от 10 до 100"
        value={n}
        onChange={e => setN(e.target.value)}
      />
      <button onClick={handleGenerate}>Генерирай</button>

      {output && (
        <div>
          <p><b>Генерирани числа:</b> {output.values.join(' ')}</p>
          <p><b>Мин. елемент:</b> {output.min}</p>
          <p><b>Средна стойност:</b> {output.avg}</p>
        </div>
      )}
    </div>
  );
}
