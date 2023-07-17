import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { title: 'Avengers: Endgame', genre: 'Action', releaseYear: 2019 },
    { title: 'Bridesmaids', genre: 'Comedy', releaseYear: 2011 },
    { title: 'Parasite', genre: 'Drama', releaseYear: 2019 },
    { title: 'Black Widow', genre: 'Action', releaseYear: 2021 },
    { title: 'The Grand Budapest Hotel', genre: 'Comedy', releaseYear: 2014 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`Clicked on movie: ${title}`);
  };

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const uniqueGenres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className="container">
      <h1>Movie List</h1>
      <label htmlFor="genre-select">Filter by Genre:</label>
      <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
        <option value="All Genres">All Genres</option>
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} className="movie-box" onClick={() => handleMovieClick(movie.title)}>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-info">Genre: {movie.genre}</p>
            <p className="movie-info">Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
