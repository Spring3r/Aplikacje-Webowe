import {Link} from "react-router-dom";
import styles from "./header.module.scss";
export default function Header(){
    return (
        <header className={styles.Header}>
            <ul>
                <li>
                    <Link to="/">Strona glowna</Link>
                </li>
                <li>
                    <Link to="/Posty">Posty</Link>
                </li>
                <li>
                    <Link to="/Kategorie">Kategorie</Link>
                </li>
            </ul>
        </header>
    )
}