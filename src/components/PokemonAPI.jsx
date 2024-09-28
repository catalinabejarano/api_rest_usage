import { useState, useEffect } from 'react';
//import styled from './style.css';



export const PokemonAPI = () => {
  // Estado para guardar los datos de la API y manejar el estado de carga
  const [pokemons, setPokemons] = useState();
  const [error, setError] = useState(null);

  // Función para obtener los datos de la PokeAPI

    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu'); // Puedes cambiar "pikachu" por otro nombre o ID
      
        const data = await response.json();

        setPokemons(data); // Guardamos los datos en el estado

      } catch (error) {
      
        console.log('Error al realizar la solicitud', error); // Debugg
        setError('Error al realizar la solicitud');
      };
    };

    
  // useEffect ejecuta el método fetchData la primera vez que se monta el componente ( hace petición de la API)
    useEffect(() => {
        fetchPokemon();
      }, []);

      // Si hay error, mostramos el mensaje de error
  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  return (


<div className='container mt-5'>
    <h2 className='text-center text-white mb-4'>Galería de Pokemon con Fetch</h2>

    {/* Agregamos un contenedor scroll y altura fija */ }
  <div className='row overflow-auto vh-80' style={{ maxHeight: '80vh', overflowY: 'scroll'}}>
  
    {pokemons.map((pokemon, index) => (
      <div className='col-md-4 mb-4' key={index} >
        <div className='card h-100 d-flex flex-column'>
          <img src={pokemon.url} className='card-img-top img-fluid object-fit-cover' alt="Pokemon" />
          <div className='card-body'>
            <h5 className='card-title'>Pokemon {index + 1}</h5>
            <p className='card-text'>¡Un lindo Pokemon de nuestra galería!</p>
          </div>
        </div>
      </div>

    ))}
  </div>
</div>

  );
};


