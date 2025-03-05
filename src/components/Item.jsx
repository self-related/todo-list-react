import "./Item.css";

/**
 * @callback OnDeleteItem
 * @param {number} id
 * 
 * @function Item
 * @param {{onDeleteItem: OnDeleteItem, id: number, children: String}} 
 */

export default function Item({onDeleteItem, id, children}) {

    return (
        <li className="item">{children} <button onClick={() => onDeleteItem(id)} className="delete-item">X</button></li>
    );
}