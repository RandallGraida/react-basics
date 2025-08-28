import React from 'react';

export default function LoadMovieCard({ movie }) {
  const { title, year, rating, genre, trailerUrl } = movie;

  return (
    <li
      style={{
        border: '1px solid #ccc',
        marginBottom: '0.5rem',
        padding: '0.5rem',
        borderRadius: '4px'
      }}
    >
      <h2>{title} ({year})</h2>
      <p>Genre: {genre}</p>
      <p>
        Rating: {rating} {rating > 8.5 ? '🔥' : '⭐'}
      </p>
      {trailerUrl && (
        <p>
          <a href={trailerUrl} target="_blank" rel="noreferrer">
            🎬 Watch Trailer
          </a>
        </p>
      )}
    </li>
  );
}