import React from "react";

function Filter({ onTitleFilterChange, onRatingFilterChange, onSearch }) {
  return (
    <div className="flex justify-center mb-6 space-x-4">
      {/* Title Filter Input */}
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleFilterChange(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      
      {/* Rating Filter Input */}
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        onChange={(e) => onRatingFilterChange(e.target.value)}
        className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      {/* Search Button */}
      <button
        onClick={onSearch}
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search
      </button>
    </div>
  );
}

export default Filter;
