/* Paso 1. Importar useState de react */
import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

function App () {
  /* Paso 2. Creo el estado donde se guardará la información del input */
  const [inputValue, setInputValue] = useState('')

  /* Paso 5. Voy a crear un nuevo estado para manejar la lista de tareas */
  const [tasks, setTasks] = useState([])

  /* Paso 4. Creo una función que se ejecuta cuando se hace clic a agregar */
  /* Paso 6. Modifico la función de agregar tareas a la lista */
  const handleAdd = () => {
    // console.log('Añadir Tarea:', inputValue)
    setTasks([...tasks, inputValue])
    setInputValue('')
  }

  /* PAso 7. Crear una función para borrar */
  const deleteTodo = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex))
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
        {/* Paso 8. Renderizar la lista de tareas */}
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            todoName={task}
            handleDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </>
  )
}

export default App
