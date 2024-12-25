import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieForm from './components/MovieForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'A heroic battle against chaos.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 9.0,
    },
    {
      title: 'Avatar',
      description: 'A visually stunning sci-fi adventure.',
      posterURL: 'https://i.etsystatic.com/39404512/r/il/0c5d97/4518135618/il_570xN.4518135618_f205.jpg',
      rating: 7.8,
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over years.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
      rating: 9.3,
    },
    {
      title: 'Forrest Gump',
      description: 'A simple man with a complex life.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
      rating: 8.8,
    },
    {
      title: 'The Godfather',
      description: 'A saga of an organized crime dynasty.',
      posterURL: 'https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys',
      rating: 9.2,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers a disturbing truth.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
      rating: 8.7,
    },
    {
      title: 'Interstellar',
      description: 'A journey beyond the stars to save humanity.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      rating: 8.6,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: uuidv4() }]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter ? movie.rating >= ratingFilter : true)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-8">My Movie App</h1>
      
      <Filter
        onTitleFilterChange={(value) => setTitleFilter(value)}
        onRatingFilterChange={(value) => setRatingFilter(value)}
      />
      
      <MovieForm onAddMovie={addMovie} />
      
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
