import { useState } from 'react';

export default function BinaryConverter() {
  const [num, setNum] = useState('');
  const [binary, setBinary] = useState('');

  const handleConvert = () => {
    let k = parseInt(num);
    if (isNaN(k) || k <= 0) {
      alert("Въведи естествено число (по-голямо от 0)");
      return;
    }

    let result = ''
    do {
      result = (k % 2) + result;
      k = Math.floor(k / 2)
    } while (k > 0)

    setBinary(result)
  };

  return (
    <div>
      <h2>Задача 3</h2>
      <input
        type="number"
        placeholder="Въведи естествено число"
        value={num}
        onChange={e => setNum(e.target.value)}
      />
      <button onClick={handleConvert}>Преобразувай</button>
      {binary && <p><b>Двоично:</b> {binary}</p>}
    </div>
  );
}