import { PropTypes } from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export default function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {images.map(image => (
          // Podemos directamente pasarle todas las propiedades del objeto image con el rest y entonces recibirlas directamente en el componente
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
