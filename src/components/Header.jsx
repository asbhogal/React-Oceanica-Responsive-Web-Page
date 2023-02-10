import navLogo from "../assets/logos/OceanicaLogo.svg";

const Header = () => {
    return (
        <header className="Header">
            <img src={ navLogo }></img>
            <ul className="HeaderMenu">
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
            <button className="HeaderCTA">
                Start a Journey
            </button>
        </header>
    )
};

export default Header;