import React from 'react';
import LoadMovieCard from './movieCard';

export default function LoadMovieList({ movies }) {
  return (
    <section>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movies.map(movie => (
          <LoadMovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
}