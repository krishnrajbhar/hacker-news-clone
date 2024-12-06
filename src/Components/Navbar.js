import React from 'react'
import Filters from './Filters';
import ResultsList from './ResultsList';
import { useState } from 'react';
import {blogPosts} from '../Data/MockData'
import Logo from '../assets/logo.png'
import SearchBox from '../Components/SearchBox'
import '../App.css'

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResults = blogPosts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });  
  return (
<>
<div className='input-container'>
    <div className="main-container max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
    <img className="logo" src={Logo} alt="logo"/>
    <span className=" heading text-2xl text-center mb-6 sm:text-3xl">
      Search Hacker News
    </span>
    <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
</div>
    <div>
        <div className="main-text-page">   
            <Filters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
        
    <div className="data">    
        <a href="/"><ResultsList results={filteredResults} /></a>
    </div>
    </div>
    </div>
    
  </div> 
</>  
  )
}

export default Navbar;