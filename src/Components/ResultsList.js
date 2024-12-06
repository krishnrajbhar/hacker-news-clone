import React from "react";
import '../App.css'
const ResultsList = ({ results }) => {
  if (results.length === 0) {
    return <p className="p-4 text-gray-500 text-center">No results found.</p>;
  }

  return (
    <div className="main-page-text grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      {results.map((post) => (
        <div
          key={post.id}
          className="p-4 border rounded-md shadow hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="all-text">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.category}</p>
          <p className="mt-2 text-sm text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
