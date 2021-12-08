import {Link} from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <div>
            <ul className={styles.ul}>
            <li>
                <Link to="/todolist">ToDoList</Link>
            </li>
            <li>
                <Link to="/cointracker">CoinTracker</Link>
            </li>
            <li>
                <Link to="/coinconverter">CoinConverter</Link>
            </li>
            <li>
                <Link to="/movielist">MovieList</Link>
            </li>
            </ul>
        </div>
    )
}

export default Navigation;