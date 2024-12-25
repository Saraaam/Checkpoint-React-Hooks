// src/components/MovieForm.js
import React, { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add movie if all fields are filled
    if (title && description && posterURL && rating) {
      onAddMovie({ title, description, posterURL, rating: parseFloat(rating) });
      // Reset form after submission
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add a New Movie</h2>

      <div className="flex flex-wrap gap-6">
        {/* Movie Title */}
        <div className="flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="title">Movie Title</label>
          <input
            id="title"
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
        <div className="flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Poster URL */}
        <div className="flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="posterURL">Poster URL</label>
          <input
            id="posterURL"
            type="text"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Rating */}
        <div className="flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="rating">Rating</label>
          <input
            id="rating"
            type="number"
            placeholder="Rating (0-10)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-900 focus:outline-none"
      >
        Add Movie
      </button>
    </form>
  );
}

export default MovieForm;
