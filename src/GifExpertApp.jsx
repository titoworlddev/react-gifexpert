import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export default function GifExpertApp() {
  // const apiKey = 'QdsMasUyI1K1SjBSU9FBKKs9IEoyFwgx';
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = newCategory => {
    // Esto no se puede usar en un state porque estas mutandolo y ademas no hace el cambio de estado
    // categories.push(newCategory);
    // console.log(newCategory);
    // Tienes que usar la funcion que nos ofrece el hook useState para mandare un nuevo estado. OJO. Siempre un nuevo estado, no modificar el actual. En este caso le mandamos una copia del actual con lo nuevo agregado.
    // setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, newCategory]);

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gifs */}
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
      {/* GifItem */}
    </>
  );
}
