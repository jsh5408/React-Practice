import styles from "./Layout.module.css";
import Header from "./Header";
import Navigation from "./Navigation";

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Navigation />
        </div>
    )
}

export default Layout;