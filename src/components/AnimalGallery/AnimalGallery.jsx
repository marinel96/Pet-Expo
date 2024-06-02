import React, { useState, useEffect } from 'react';
import { fetchBirds } from '../../api/fetchBirds';
import { fetchCats } from '../../api/fetchCats';
import { fetchDogs } from '../../api/fetchDogs';
import AnimalCard from '../AnimalCard/AnimalCard';
import PopUp from '../PopUp/Popup';
import './AnimalGallery.css';

const AnimalGallery = ({ type }) => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      switch (type) {
        case 'birds':
          data = await fetchBirds();
          break;
        case 'cats':
          data = await fetchCats();
          break;
        case 'dogs':
          data = await fetchDogs();
          break;
        default:
          data = [];
      }
      setAnimals(data);
    };
    fetchData();
  }, [type]);

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleClose = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="animal-gallery">
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} onClick={handleCardClick} />
      ))}
      {selectedAnimal && (
        <PopUp animal={selectedAnimal} onClose={handleClose} />
      )}
    </div>
  );
};

export default AnimalGallery;
