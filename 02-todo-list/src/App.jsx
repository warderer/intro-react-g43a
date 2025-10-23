/* Paso 1. Importar useState de react */
import { useState } from 'react'
import './App.css'

function App () {
  /* Paso 2. Creo el estado donde se guardará la información del input */
  const [inputValue, setInputValue] = useState('')

  /* Paso 4. Creo una función que se ejecuta cuando se hace clic a agregar */
  const handleAdd = () => {
    console.log('Añadir Tarea:', inputValue)
  }

  return (
    <>
      <h1>Todo List</h1>
      {/* Paso 3. Uso un evento onChange para guardar la información del estado, apenas sea tecleada */}
      <input
        text='text'
        placeholder='Escribe una tarea...'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Añadir</button>
      {/* ul>li{Tarea $}*3>button{Eliminar} */}
      <ul>
        <li>Tarea 1<button>Eliminar</button></li>
        <li>Tarea 2<button>Eliminar</button></li>
        <li>Tarea 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}

export default App
