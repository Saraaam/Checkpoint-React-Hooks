// src/components/MovieList.js
import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-black p-4 rounded-lg shadow-lg flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Movie Poster */}
          <div className="w-full flex justify-center mb-4">
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-64 h-auto object-cover mb-4 rounded-md aspect-w-2 aspect-h-3"
            />
          </div>

          {/* Movie Details */}
          <h3 className="text-blue-50 text-xl font-semibold mb-2 text-center">{movie.title}</h3>
          <p className="text-gray-200 mb-4 text-center">{movie.description}</p>
          <p className="text-green-700 text-center">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
