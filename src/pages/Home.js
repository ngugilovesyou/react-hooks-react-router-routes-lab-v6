import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() =>{
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMovies(data))
    .catch(error => console.error(error))
  }, [])
  const movieList = movies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id}/>)
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
