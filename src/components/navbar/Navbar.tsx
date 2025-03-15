import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "@styles/navbar/navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <ul className={`navbar_links ${isOpen ? "open" : ""}`}>
                <li>
                    <a className="links" href="#">Home</a>
                </li>
                <li>
                    <a className="links" href="#">Servicios</a>
                </li>
                <li>
                    <a className="links" href="#">Proyectos</a>
                </li>
                <li>
                    <a className="links" href="#">Contacto</a>
                </li>
            </ul>
            <button className="navbar_toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
}

export default Navbar;