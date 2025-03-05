import { useState } from "react";
import "./ToDoApp.css";
import Item from "./Item";

export default function ToDoApp() {

    const [items, setItems] = useState(["test1"]);
    const [newItem, setNewItem] = useState("");
    
    const handleInputEdit = (event) => {
        /**@type {HTMLInputElement} */
        const inputElement = event.target;
        
        setNewItem(inputElement.value);
    };

    const handleAddButtonClick = () => {
        if (newItem === "") 
            return;

        setItems([...items, newItem]);
    };

    /**@param {number} index */
    const handleDeleteButton = (removingItemIndex) => {
        const itemsNew = items.filter((_item, index) => index !== removingItemIndex);
        console.log(removingItemIndex)
        setItems(itemsNew);
    };


    return (
        <div id="todo-app">
            <h1>ToDo List</h1>
            <div className="app-panel">
                <input type="text" onChange={handleInputEdit} value={newItem} />
                <button onClick={handleAddButtonClick}>Add</button>
            </div>
            
            <ol className="list">
                {
                    items.map((item, index) => (
                        <Item key={index} id={index} onDeleteItem={handleDeleteButton}>
                            {item}
                        </Item>
                    ))
                }
            </ol>
        </div>
    );
}