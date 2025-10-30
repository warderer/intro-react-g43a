import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  // Estado para guardar lo que se escribe en el Input
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder='Buscar GIFs...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className='search-button'
        onClick={() => handleSearch(searchTerm)}
      >
        Buscar
      </button>
    </div>

  )
}
export default SearchBar
