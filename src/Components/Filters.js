import React from "react";
import '../App.css'
const Filters = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All", "Stephen Hawking", "apple", "OpenAI","CrowdStrike","Windows blue-screening","My laptop blue-screened"];

  return (
    <div className="category flex flex-wrap gap-2 p-4 justify-center sm:justify-start">
      {categories.map((category) => (

          <button key={category}
          className={`sub-category px-4 py-2 rounded-md sm:px-6 sm:py-3 text-sm sm:text-base ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;
