import { Link } from "react-router-dom";
import CitySelector from "./CitySelector";
import "../styles/components/header.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const { isDarkMode, toggleDarkMode } = useContext(EventContext);
    const isActive = (path) => window.location.pathname === path;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="header-logo">
                <img src="/logo.png" alt="Campus Party Planner Logo" className="header-logo__img" />
                <div className="header-logo__text">
                    <h1>Campus Party Planner</h1>
                    <p>Ta source n°1 d'évènements étudiant</p>
                </div>
            </div>

            <div className="header-links">
                <Link to="/" className={`${isActive("/") ? "active link" : "link"
                    }`}>Accueil</Link>
                <Link to="/stats" className={`${isActive("/stats") ? "active link" : "link"
                    }`}>Statistiques</Link>
            </div>
            <div className="header-icons">
                <CitySelector />
                <button
                    className="theme-toggle-btn"
                    onClick={toggleDarkMode}
                    aria-label={isDarkMode ? "Passer au thème clair" : "Passer au thème sombre"}
                    title={isDarkMode ? "Passer au thème clair" : "Passer au thème sombre"}
                >
                    {isDarkMode ?
                        <LightModeIcon sx={{ fontSize: '1.2rem' }} /> :
                        <DarkModeIcon sx={{ fontSize: '1.2rem' }} />}
                </button>
                <button onClick={() => setIsOpen(true)} className="header--menu"><MenuIcon /></button>
                {isOpen && (
                <div className="popup">
                <div className="popup-header">
                    <img src="/logo.png" alt="Logo" />
                    <button
                    className="popup-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Fermer le menu"
                    >
                    <CloseIcon />
                    </button>
                </div>

                <div className="popup-content">
                    <h1>Campus Party Planner</h1>
                    <p>Ta source n°1 d'évènements étudiant</p>

                    <div className="header-links-mobile">
                    <Link
                        to="/"
                        className={`${isActive("/") ? "active link" : "link"}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/stats"
                        className={`${isActive("/stats") ? "active link" : "link"}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Statistiques
                    </Link>
                    </div>
                </div>
                </div>
            )}
            </div>
        </header>
    );
}

export default Header;