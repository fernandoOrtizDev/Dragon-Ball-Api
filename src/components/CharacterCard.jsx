import React, { useState } from 'react';
import './../styles/CharacterCard.css';
import CharacterDescription from './CharacterDescription';

export default function CharacterCard({ characterData }) {
  const [descripcion, setDescripcion] = useState(false);

  if (!characterData) {
    return <h1>Cargando personaje...</h1>;
  }

  if (descripcion) {
    return (
      <CharacterDescription
        description={characterData?.description}
        closeDescription={() => setDescripcion(false)}
      />
    );
  }

  return (
    <div className='character-card'>
      <div className='images-container'>
        <img
          className='character-image'
          src={characterData.image}
          alt="Personaje Image"
        />
      </div>

      <div className='character-info'>
        <h2>{characterData.name}</h2>

        <div className='info-block'>
          <span className='info-title'>Raza:</span>
          <span className='info-value'>{characterData.race}</span>
        </div>

        <div className='info-block'>
          <span className='info-title'>ID:</span>
          <span className='info-value'>{characterData.id}</span>
        </div>

        <div className='info-block'>
          <span className='info-title'>KI:</span>
          <span className='info-value'>{characterData.ki}</span>
        </div>

        <div className='info-block'>
          <span className='info-title'>KI Total:</span>
          <span className='info-value'>{characterData.maxKi}</span>
        </div>

        <div className='info-block'>
          <span className='info-title'>Afiliación:</span>
          <span className='info-value'>{characterData.affiliation}</span>
        </div>

        <button
          className='toggle-button'
          onClick={() => setDescripcion(true)}
        >
          Ver Descripción
        </button>
      </div>
    </div>
  );
}
