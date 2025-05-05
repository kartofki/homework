import { useState } from "react";

export default function StackTask() {
    const [n, setN] = useState('');
    const [output, setOutput] = useState(null);

    const handleGenerate = () => {
        const num = parseInt(n);
        if(isNaN(num) || num < 10 || num > 100){
            alert('Въведи число между 10 и 100');
            return;
        }

        const stack = [];
        for (let i = 0; i < num; i++){
            stack.push(Math.floor(Math.random() * 101) + 1)
        }

        const even = stack.filter(x => x % 2 === 0);
        const odd = stack.filter(x => x % 2 !== 0).reverse();

        setOutput({
            original: stack,
            even,
            odd,
            result: [...even, ...odd],
        })
    }

    return (
        <div>
          <h2>Задача 2</h2>
          <input
            type="number"
            placeholder="Въведи число от 10 до 100"
            value={n}
            onChange={e => setN(e.target.value)}
          />
          <button onClick={handleGenerate}>Генерирай</button>
    
          {output && (
            <div>
              <p><b>Генерирани числа:</b> {output.original.join(' ')}</p>
              <p><b>Изход:</b> {output.result.join(' ')}</p>
            </div>
          )}
        </div>
      );
    }