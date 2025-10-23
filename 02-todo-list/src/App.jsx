import './App.css'

function App () {
  return (
    <>
      <h1>Todo List</h1>
      <input text='text' placeholder='Escribe una tarea...' />
      <button>Añadir</button>
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
