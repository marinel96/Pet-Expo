import React, { useState, useEffect } from 'react';
import { fetchBirds } from '../../api/fetchBirds';
import { fetchCats } from '../../api/fetchCats';
import { fetchDogs } from '../../api/fetchDogs';
import AnimalCard from '../AnimalCard/AnimalCard';
import AnimalPopup from '../PopUp/Popup';
import './SearchBar.css';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      const [dogs, cats, birds] = await Promise.all([fetchDogs(), fetchCats(), fetchBirds()]);
      return [...dogs, ...cats, ...birds];
    };

    const searchAnimals = async () => {
      if (query.length === 0) {
        setResults([]);
        return;
      }

      const allAnimals = await fetchAnimals();
      const filteredAnimals = allAnimals.filter(animal => animal.name.toLowerCase().includes(query.toLowerCase()));
      setResults(filteredAnimals);
    };

    searchAnimals();
  }, [query]);

  const handleSelect = (animal) => {
    setSelectedAnimal(animal);
  };

  const closePopup = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for an animal..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="search-results">
        {results.map(animal => (
          <AnimalCard key={animal.id} animal={animal} openPopup={handleSelect} />
        ))}
      </div>
      {selectedAnimal && (
        <AnimalPopup
          animal={selectedAnimal}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default SearchBar;
