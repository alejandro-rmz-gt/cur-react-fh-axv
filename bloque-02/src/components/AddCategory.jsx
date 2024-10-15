import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // onNewCategory((categories) => {
    //   if (categories.includes(inputValue)) return categories;
    //   return [inputValue, ...categories];
    // });
    
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
