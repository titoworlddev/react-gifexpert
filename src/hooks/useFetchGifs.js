import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    // Puesto que el useEffect tiene que tener como primer argumento una funcion callback, no podemos hacer esa funcion async. Por lo tanto debemos usar el then o extraer esa logica a una funcion async porque si le ponemos async al callback del useEffect ya no seria una funcion sino una promesa.
    // getGifs(category).then(newImages => setImages(newImages));
    getImages();

    // Si dejas las dependencias vacias, solo se va a ejecutar la primera vez que se renderiza el componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images,
    isLoading
  };
};
