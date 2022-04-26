import {Link} from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <div>
            <ul className={styles.ul}>
            <li className={styles.li}>
                <Link to="/todolist">ToDoList</Link>
            </li>
            <li className={styles.li}>
                <Link to="/cointracker">CoinTracker</Link>
            </li>
            <li className={styles.li}>
                <Link to="/coinconverter">CoinConverter</Link>
            </li>
            <li className={styles.li}>
                <Link to="/movielist">MovieList</Link>
            </li>
            <li className={styles.li}>
                <Link to="/toggle">Toggle</Link>
            </li>
            </ul>
        </div>
    )
}

export default Navigation;