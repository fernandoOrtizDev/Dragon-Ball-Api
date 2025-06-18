import api from './api';

export const getCharacters = async (limit = 58) => {
  try {
    const response = await api.get(`/characters?limit=${limit}`);
    return response.data.items; 
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    throw error;
  }
};
