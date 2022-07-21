import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ itemData }) {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterForm, setFilterForm] = useState("");
  

  function onItemFormSubmit(inputForm) {
    console.log(inputForm)
    setItems([...items, inputForm])
  }

  function onSearchChange(category) {
    setSelectedCategory(selectedCategory => category);
  }

  function onInputFilter(value) {
    setFilterForm(filterForm => value);
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && filterForm === "" ) {
      return true;
    } else if (filterForm === "") {
      return selectedCategory === item.category;
    } else {
      return item.name.toLowerCase().includes(filterForm.toLowerCase());
    }
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={onSearchChange} onInputFilter= {onInputFilter} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;