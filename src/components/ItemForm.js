import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [inputForm, setInputForm] = useState({
    id: "",
    name: "",
    category: "Produce"
  })

  const handleItemChange = (e) => {
    const name = e.target.name
    let value = e.target.value;
    
    setInputForm( {
      ...inputForm,
      id: uuid(),
      [name]: value
    })
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit(inputForm);
  }

  return (
    <form className="NewItem" onSubmit={handleInputSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={inputForm.category} onChange={handleItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
