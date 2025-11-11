import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  // Lógica para obtener los personajes de la API de Rick and Morty
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCharacters()
  }, [])

  if (loading) return <h2>Cargando personajes...</h2>

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div className='characters-grid'>
        {characters.map((character) => (
          <Link to={`/characters/${character.id}`} key={character.id} className='character-card'>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Characters
