import { func } from "prop-types";
import { useState } from "react";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    /* console.log(target.value); */
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    //setCategory((categories) => categories.concat(inputValue));
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: func,
};
