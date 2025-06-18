import React from 'react';

export default function CharacterDescription({ description, closeDescription }) {
  return (
    <div className='character-card'>
      <div className='description-full'>
        <p className='description-text'>{description}</p>
        <button className='toggle-button' onClick={closeDescription}>
          Ocultar Descripción
        </button>
      </div>
    </div>
  );
}
