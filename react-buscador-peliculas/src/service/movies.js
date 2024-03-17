
export const searchMovies = async ({ search }) => {
  if (search === "") return;
  // setResponseMovies(withResult)

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=bf1e3a38&s=${search}`
    );
    const data = await response.json();

    const movies = data.Search;

    return  movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));
  } catch (error) {
    throw new Error('Error searching movies')
  }
};
