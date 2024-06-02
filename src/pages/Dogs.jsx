import React, { useState, useEffect } from 'react';
import { fetchDogs } from '../api/fetchDogs';
import AnimalCard from '../components/AnimalCard/AnimalCard';
import AnimalPopup from '../components/PopUp/Popup';

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    const getDogs = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    getDogs();
  }, []);

  const openPopup = (dog) => {
    setSelectedDog(dog);
  };

  const closePopup = () => {
    setSelectedDog(null);
  };

  return (
    <div>
      <h1>Dogs</h1>
      <div className="animal-list">
        {dogs.map((dog) => (
          <AnimalCard key={dog.id} animal={dog} openPopup={openPopup} />
        ))}
      </div>
      {selectedDog && (
        <AnimalPopup
          animal={selectedDog}
          type="dogs"
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default Dogs;
