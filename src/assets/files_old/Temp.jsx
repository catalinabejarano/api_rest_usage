import { useEffect, useState } from "react"

export const CatGalleryFetch = () => {

  // Estado para almacenar las imágenes de gatitos, lo inicializamos con un array vacío
  const [cats, setCats] = useState([]);

  // Estado para manejar posibles errores
  const [error, setError] = useState(null);

  // Método para realizar la petición a la API con fetch
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

      // Convertimos la respuesta a formato JSON
      const data = await response.json();

      // Setear la variable de estado cats a través de su método setCats con los datos recibidos de la API
      setCats(data);

    } catch (error) {
      console.log('Error al realizar la solicitud', error); // Debugg
      setError('Error al realizar la solicitud');
    }
  };

  // useEffect ejecuta el método fetchData la primera vez que se monta el componente ( hace petición de la API)
  useEffect(() => {
    fetchData();
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
      <h2 className='text-center text-white mb-4'>Galería de Gatitos con Fetch</h2>
    </div>
  )
}

