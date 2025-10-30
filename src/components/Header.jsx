import { Link } from "react-router-dom";
import CitySelector from "./CitySelector";
import "../styles/components/header.css";

function Header() {

    const isActive = (path) => window.location.pathname === path;

    return (
        <header>
            <div className="header-logo">
                <img src="/logo.png" alt="Campus Party Planner Logo" className="header-logo__img"/>
                <div className="header-logo__text">
                    <h1>Campus Party Planner</h1>
                    <p>Ta source n°1 d'évènements étudiant</p>
                </div>
            </div>

            <div className="header-links">
                <Link to="/" className={`${
                                isActive("/") ? "active link" : "link"
                            }`}>Accueil</Link>
                <Link to="/stats" className={`${
                                isActive("/stats") ? "active link" : "link"
                            }`}>Statistiques</Link>
            </div>

            <CitySelector/>
        </header>
    );
}

export default Header;