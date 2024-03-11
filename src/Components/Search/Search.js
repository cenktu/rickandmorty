import React, { useState } from 'react';
import "./Search.css"
const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            <button className="search-button" type="search">Search</button>
        </form>
    );
};

export default Search;
