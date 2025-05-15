import MovieCard from "../Components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "Jhon Wick", release_date: "2020" },
    { id: 2, title: "Jhonny English", release_date: "2020" },
    { id: 3, title: "Pretty", release_date: "2020" },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
