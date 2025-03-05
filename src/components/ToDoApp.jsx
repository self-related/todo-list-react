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
        setNewItem(""); // input
    };

    /**@param {KeyboardEvent} event */
    const handleKeyDown = (event) => {
        if (event.key === "Enter")
            handleAddButtonClick();
    }

    /**@param {number} index */
    const handleDeleteButton = (removingItemIndex) => {
        const itemsNew = items.filter((_item, index) => index !== removingItemIndex);
        console.log(removingItemIndex)
        setItems(itemsNew);
    };

    const handleClearButtonClick = () => {
        const answer = window.confirm("Remove all items?");       
        if (answer) 
            setItems([]);
    };

    const handleMoveUpButton = (id) => {
        if (id === 0)
            return;

        const tempMovingItem = items[id];
        items[id] = items[id - 1];
        items[id - 1] = tempMovingItem;

        setItems([...items]);
    }

    const handleMoveDownButton = (id) => {
        if (id === items.length - 1)
            return;

        const tempMovingItem = items[id];
        items[id] = items[id + 1];
        items[id + 1] = tempMovingItem;

        setItems([...items]);
    }


    return (
        <div id="todo-app">
            <h1>ToDo List</h1>
            <div className="app-panel">
                <input type="text" onChange={handleInputEdit} value={newItem} onKeyDown={handleKeyDown} />
                <button onClick={handleAddButtonClick}>Add</button>
                <button onClick={handleClearButtonClick}>Clear</button>
            </div>
            
            <ol className="list">
                {
                    items.map((item, index) => (
                        <Item key={index} id={index} onDeleteItem={handleDeleteButton} onMoveUpButton={handleMoveUpButton} onMoveDownButton={handleMoveDownButton}>
                            {item}
                        </Item>
                    ))
                }
            </ol>
        </div>
    );
}