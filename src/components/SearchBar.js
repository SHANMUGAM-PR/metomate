import React, { useState } from 'react';
import '../App.css';

const SearchBar = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSubmit(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-form">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">Get Weather</button>
    </form>
  );
};

export default SearchBar;
