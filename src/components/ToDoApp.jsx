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
        setItems([...items, newItem]);
    };


    return (
        <div id="todo-app">
            <h1>ToDo List</h1>
            <div class="app-panel">
                <input type="text" onChange={handleInputEdit} value={newItem} />
                <button onClick={handleAddButtonClick}>Add</button>
            </div>
            
            <ol class="list">
                {items.map((item, index) => (<Item key={index} id={index}>{item}</Item>))}
            </ol>
        </div>
    );
}