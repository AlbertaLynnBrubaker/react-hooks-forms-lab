import React from "react";

function Filter({ onSearchChange, onInputFilter }) {

  const handleInputFilter = (e) => {
    onInputFilter(e.target.value);
  }

  const handleCategoryChange = (e) => {
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleInputFilter}/>
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
