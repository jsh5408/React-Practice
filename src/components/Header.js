import {Link} from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <div>
            <Link to="/" className={styles.link}>
                <h1>React Practice</h1>
            </Link>
        </div>
    )
}

export default Header;