import "./Item.css";

export default function Item({children}) {


    return (
        <li className="item">{children}</li>
    );
}