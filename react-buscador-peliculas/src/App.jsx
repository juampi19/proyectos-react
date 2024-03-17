
import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true);



  useEffect(()=> {

    if(isFirstInput.current) {
      isFirstInput.current = search === '' 
      return;
    }

    if(search === '') {
      setError('No se puede mostrar una pelicula vacía')
      return
    }

    if(search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return
    }

    setError(null)
  }, [search])


  return {search, setSearch, error}
}


  
  function App() {

    const [sort, setSort] = useState(false)
    
    const {search, setSearch, error} = useSearch();
    const { movies, getMovies } = useMovies({ search, sort })
    

    const hasMovies = movies?.length > 0

    const handleSort = () => {
      setSort(!sort)
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      getMovies();

    }

    const handleChange = (e) => {
      
      setSearch(e.target.value)
    }

    

  

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Avengers, Star Wars, The Matrix ..."
            name="query"
            value={search}
            onChange={handleChange}
          />
          <input type="checkbox" 
            onChange={handleSort}
            checked={sort}
          />
          <button type="submit"
            
          >Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }} >{error}</p>}
      </header>

      <main>
        {
          hasMovies
            ? (
              <Movies movies={movies}/>
            )
            : (
              <h1>Sin Resultado</h1>
            )
        }
      </main>
    </div>
  );
}

export default App;
