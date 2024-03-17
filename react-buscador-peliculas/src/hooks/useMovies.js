import { useRef, useState, useMemo } from "react";
import { searchMovies } from "../service/movies";
// import withResult from "../mocks/with-result.json";


export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const previusSearch = useRef(search);
  

  const getMovies = useMemo(() => { 
    return async () => {

    if(search === previusSearch.current) return;

    try {
      previusSearch.current = search
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
      
    } catch (error) {
      throw new Error('Error searching Movies')
    }

  }
}, [search])


  // const sortedMovies = sort 
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies };
}
