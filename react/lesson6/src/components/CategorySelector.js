import React from "react";

const CategorySelector = ({ options, value, onChange }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(el => (
      <option key={el} value={el}>
        {el}
      </option>
    ))}
  </select>
);

export default CategorySelector;
