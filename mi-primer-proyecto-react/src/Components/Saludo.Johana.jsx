import { useState } from 'react'
import './Saludo.Johana.css'

export default function SaludoJohana() {
  const [name, setName] = useState('Johana')

  return (
    <section className="saludo">
      <h2 className="saludo__title">¡Hola, {name}!</h2>
      <p className="saludo__extra">Bienvenida a tu app React de super junior developer.</p>

      <div className="saludo__box">
        <label htmlFor="name-input">Cambia tu nombre:</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Escribe tu nombre..."
        />
      </div>
    </section>
  )
}
