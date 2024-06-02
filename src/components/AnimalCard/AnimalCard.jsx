import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ animal, openPopup }) => {
  return (
    <div className="animal-card" onClick={() => openPopup(animal)}>
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
    </div>
  );
};

export default AnimalCard;
