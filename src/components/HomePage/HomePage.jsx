import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import AnimalCard from '../AnimalCard/AnimalCard';
import PopUp from '../PopUp/Popup';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import './HomePage.css';
import '../NavBar/NavBar';

const HomePage = () => {
  const [searchedAnimal, setSearchedAnimal] = React.useState(null);
  const [selectedAnimal, setSelectedAnimal] = React.useState(null);

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
      <p>Our very own, local, family-owned pet store, Pet Expo Distributors was recognized as a Pet Product News’ (PPN) 2023-2024 Full-Line Retailer of the Year! This national award was given at this year’s trade show, Super Zoo, in Las Vegas where the owner and multiple staff members were there to receive. The World Pet Association (WPA) hosts Super Zoo, which is North America’s largest pet retail event with more than 20,000 pet professionals, 1,100 exhibitors, and 65 educational sessions. The annual Retailer of the Year Awards showcase the best of the best in the industry. As a 2023-2024 Full-Line Retailer of the Year for PPN, Pet Expo will be featured in PPN’s August 2024 Issue and be added to PPN’s Retail </p>
      {searchedAnimal && (
        <AnimalCard animal={searchedAnimal} onClick={handleCardClick} />
      )}
      {selectedAnimal && (
        <PopUp animal={selectedAnimal} onClose={handleClose} />
      )}
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
