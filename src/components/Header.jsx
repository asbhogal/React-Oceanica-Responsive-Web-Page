import navLogo from "../assets/logos/OceanicaLogo.svg";
import { useState } from "react";

const Header = () => {

    const   [active, setActive] = useState("HeaderMenu"),
            [toggle, setToggle] = useState("NavbarToggle");

    const navToggle = () => {
        active === "HeaderNavLinks" 
        ? setActive("HeaderNavLinks NavActive") 
        : setActive("HeaderNavLinks");

        toggle === "NavbarToggle"
        ? setToggle("NavbarToggle ToggleActive")
        : setToggle("NavbarToggle");
    };

    return (
        <header className="Header">
            <img src={ navLogo }></img>
            <nav className="Navbar">
                <ul className={ active }>
                    <li className="HeaderMenuItem">
                        Home
                    </li>
                    <li className="HeaderMenuItem">
                        Tours
                    </li>
                    <li className="HeaderMenuItem">
                        Contact
                    </li>
                </ul>
                <button className={ toggle } onClick={ navToggle }>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                </button>
            </nav>
            <button className="HeaderCTA">
                Start a Journey
            </button>
        </header>
    )
};

export default Header;