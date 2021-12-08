import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">
                <h1>React Practice</h1>
            </Link>
        </div>
    )
}

export default Header;