import React from 'react';
import LoadMovieList from './components/movieList';

const movies = [
  { id: 1, title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi', trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0' },
  { id: 2, title: 'The Nun', year: 2008, rating: 5.4, genre: 'Action', trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY' },
  { id: 3, title: 'Interstellar', year: 2014, rating: 8.6, genre: 'Sci-Fi' },
  { id: 4, title: 'Parasite', year: 2019, rating: 8.6, genre: 'Thriller', trailerUrl: 'https://www.youtube.com/watch?v=5xH0HfJHsaY' },
  { id: 5, title: 'The Conjuring', year: 1999, rating: 7.5, genre: 'Sci-Fi' }
];

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Movie Explorer</h1>
      <LoadMovieList movies={movies} />
    </div>
  );
}