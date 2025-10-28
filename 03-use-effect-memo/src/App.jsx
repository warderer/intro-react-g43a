import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const listaDeUsuarios = [
    { id: 1, nombre: 'Angela', pais: 'Argentina' },
    { id: 2, nombre: 'Karla', pais: 'Colombia' },
    { id: 3, nombre: 'Lizbeth', pais: 'México' },
    { id: 4, nombre: 'Maycol', pais: 'Perú' },
    { id: 5, nombre: 'Melani', pais: 'Chile' },
    { id: 6, nombre: 'Pedro', pais: 'Venezuela' },
  ]

  // Estados para manejar usuarios
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(true)

  // Función que simula la llamada a la API
  const fetchUsuarios = () => {
    return new Promise((resolve) => {
      console.log('Cargando usuarios...')
      setTimeout(() => {
        resolve(listaDeUsuarios)
      }, 2500)
    })
  }

  // useEffect Lo usamos para cargar los datos (en este caso la lista de usuarios), una vez que el componente se monta (inicia por primera vez)
  useEffect(() => {
    setCargando(true)
    fetchUsuarios().then((data) => {
      setUsuarios(data)
      setCargando(false)
    })
  }, [])

  return (
    <>

    </>
  )
}

export default App
