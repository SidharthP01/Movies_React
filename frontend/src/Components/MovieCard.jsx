import React from "react";

function MovieCard({ movie }) {
  //  we want to pass a lot of movies so a movie prop is passed
  function onFavoriteClick() {
    alert("clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="{movie.url}" alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-button" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
