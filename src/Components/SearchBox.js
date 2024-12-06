import React from "react";
import '../App.css'
import searchIcon from '../assets/search.png'
import algolia from '../assets/algolia.svg'
// import { NavLink, useNavigate } from "react-router-dom";
// import Login from "./Login";
const SearchBox = ({ searchQuery, setSearchQuery }) => {
  // const navigate = useNavigate();
  return (
<>
<div className="inputBox p-4">

      <div className="box1">
      <img className='search-logo' src={searchIcon} alt="search-icon" />
      <input
        type="text"
        placeholder="Search stories by title, url or author..."
        className="input-box w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="search-text">Search by</span>
      <img className="algolia-img" src={algolia} alt="algolia" />
    </div>
    </div>
    
    
</>
  );
};

export default SearchBox;
