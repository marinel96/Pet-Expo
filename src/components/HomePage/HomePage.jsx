import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import AnimalCard from '../AnimalCard/AnimalCard';
import Popup from '../PopUp/Popup';
import './HomePage.css';

const HomePage = () => {
  const [searchedAnimal, setSearchedAnimal] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleSearchSelect = (animal) => {
    setSearchedAnimal(animal);
  };

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleClose = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="home-page">
      <SearchBar onSearchSelect={handleSearchSelect} />
      <h1>Welcome to Pet Expo</h1>
      <p>Your one-stop destination for finding the perfect pet.</p>
      {searchedAnimal && (
        <AnimalCard animal={searchedAnimal} onClick={handleCardClick} />
      )}
      {selectedAnimal && (
        <Popup animal={selectedAnimal} onClose={handleClose} />
      )}
    </div>
  );
};

export default HomePage;
