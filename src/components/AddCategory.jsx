import { PropTypes } from 'prop-types';
import { useState } from 'react';

export default function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        // onChange={e => setInputValue(e.target.value)}
        // onChange={e => onInputChange(e)}
        onChange={onInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};
