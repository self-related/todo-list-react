import "./Item.css";

/**
 * @callback onDeleteItem - delete item from list
 * @param {number} id
 * 
 * @callback onMoveUpButton - move up item
 * @param {number} id
 * 
 * @callback onMoveDownButton - move down item
 * @param {number} id
 *
 * @function Item
 * @param {{
 *  onDeleteItem: onDeleteItem, 
 *  onMoveUpButton: onMoveUpButton,
 *  onMoveDownButton: onMoveDownButton,
 *  id: number,
 *  children: String
 * }} 
 */

export default function Item({onDeleteItem, onMoveUpButton, onMoveDownButton, id, children}) {

    return (
        <div className="item">
            <li>{children}</li>
            <div className="item-control">
                <button className="move-item" onClick={() => onMoveUpButton(id)}>↑</button>
                <button className="move-item" onClick={() => onMoveDownButton(id)}>↓</button>
                <button onClick={() => onDeleteItem(id)} className="delete-item">X</button>
            </div>
        </div>
    );
}