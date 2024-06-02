import React, { useState, useEffect } from 'react';
import { fetchCats } from '../api/fetchCats';
import AnimalCard from '../components/AnimalCard/AnimalCard';
import AnimalPopup from '../components/PopUp/Popup';

function Cats() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    const getCats = async () => {
      const data = await fetchCats();
      setCats(data);
    };
    getCats();
  }, []);

  const openPopup = (cat) => {
    setSelectedCat(cat);
  };

  const closePopup = () => {
    setSelectedCat(null);
  };

  return (
    <div>
      <h1>Cats</h1>
      <div className="animal-list">
        {cats.map((cat) => (
          <AnimalCard key={cat.id} animal={cat} openPopup={openPopup} />
        ))}
      </div>
      {selectedCat && (
        <AnimalPopup
          animal={selectedCat}
          type="cats"
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default Cats;
