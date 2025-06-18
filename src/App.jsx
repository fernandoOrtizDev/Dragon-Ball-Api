import { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import './styles/App.css';
import { getCharacters } from './api/characterService';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacterData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error al cargar los personajes: {error.message}</p>;

  return (
    <div className="container">
      <div className="grid-container">
        {characterData.map((personaje, id) => (
          <CharacterCard key={id} characterData={personaje} />
        ))}
      </div>
    </div>
  );
}

export default App;
