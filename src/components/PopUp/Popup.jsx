import React from 'react';
import './Popup.css';

const AnimalPopup = ({ animal, closePopup }) => {
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={closePopup}>X</button>
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={animal.name} />
        <p>{animal.description}</p>
        {animal.species && <p><strong>Species:</strong> {animal.species}</p>}
        {animal.family && <p><strong>Family:</strong> {animal.family}</p>}
        {animal.habitat && <p><strong>Habitat:</strong> {animal.habitat}</p>}
        {animal.place_of_found && <p><strong>Place of Found:</strong> {animal.place_of_found}</p>}
        {animal.diet && <p><strong>Diet:</strong> {animal.diet}</p>}
        {animal.wingspan_cm && <p><strong>Wingspan:</strong> {animal.wingspan_cm} cm</p>}
        {animal.weight_kg && <p><strong>Weight:</strong> {animal.weight_kg} kg</p>}
        {animal.breed_group && <p><strong>Breed Group:</strong> {animal.breed_group}</p>}
        {animal.size && <p><strong>Size:</strong> {animal.size}</p>}
        {animal.lifespan && <p><strong>Lifespan:</strong> {animal.lifespan}</p>}
        {animal.temperament && <p><strong>Temperament:</strong> {animal.temperament}</p>}
        {animal.colors && (
          <p><strong>Colors:</strong> {animal.colors.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default AnimalPopup;
