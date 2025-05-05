import { useState } from 'react';

class Car {
  #brand;
  #model;
  #year;
  #color;
  #transmission;
  #horsepower;
  #fuel;
  #engineType;
  #engineSizeCc;
  #engineSizeL;
  #weight;
  #mileage;

  constructor(data) {
    this.#brand = data.brand
    this.#model = data.model
    this.#year = data.year
    this.#color = data.color
    this.#transmission = data.transmission
    this.#horsepower = data.horsepower
    this.#fuel = data.fuel
    this.#engineType = data.engineType
    this.#engineSizeCc = data.engineSizeCc
    this.#engineSizeL = data.engineSizeL
    this.#weight = data.weight
    this.#mileage = data.mileage
  }

  getInfo() {
    return {
      Марка: this.#brand,
      Модел: this.#model,
      'Година на производство': this.#year,
      Цвят: this.#color,
      'Скоростна кутия': this.#transmission,
      'Мощност (к.с.)': this.#horsepower,
      'Гориво': this.#fuel,
      'Тип на мотора': this.#engineType,
      'Кубатура (cc)': this.#engineSizeCc,
      'Кубатура (L)': this.#engineSizeL,
      'Тегло (kg)': this.#weight,
      'Изминати километри': this.#mileage
    }
  }
}

export default function CarClassTask() {
  const [form, setForm] = useState({
    brand: '', model: '', year: '', color: '', transmission: '',
    horsepower: '', fuel: '', engineType: '', engineSizeCc: '',
    engineSizeL: '', weight: '', mileage: ''
  })

  const [output, setOutput] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    const car = new Car(form)
    setOutput(car.getInfo())
  }

  return (
    <div>
      <h2>Задача 4: Клас Коли</h2>
      {Object.keys(form).map(key => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <input
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px' }}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Покажи информация</button>

      {output && (
        <div style={{ marginTop: '20px' }}>
          <h3>Информация за колата:</h3>
          <ul>
            {Object.entries(output).map(([k, v]) => (
              <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}