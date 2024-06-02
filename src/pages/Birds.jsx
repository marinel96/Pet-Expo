import React, { useState, useEffect } from 'react';
import { fetchBirds } from '../api/fetchBirds';
import AnimalCard from '../components/AnimalCard/AnimalCard';
import AnimalPopup from '../components/PopUp/Popup';

function Birds() {
  const [birds, setBirds] = useState([]);
  const [selectedBird, setSelectedBird] = useState(null);

  useEffect(() => {
    const getBirds = async () => {
      const data = await fetchBirds();
      setBirds(data);
    };
    getBirds();
  }, []);

  const openPopup = (bird) => {
    setSelectedBird(bird);
  };

  const closePopup = () => {
    setSelectedBird(null);
  };

  return (
    <div>
      <h1>Birds</h1>
      <div className="animal-list">
        {birds.map((bird) => (
          <AnimalCard key={bird.id} animal={bird} openPopup={openPopup} />
        ))}
      </div>
      {selectedBird && (
        <AnimalPopup
          animal={selectedBird}
          type="birds"
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default Birds;
