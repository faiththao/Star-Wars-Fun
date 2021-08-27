import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <li>
                <NavLink to="/" className="navlink">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/characters" className="navlink">
                    Characters
                </NavLink>
            </li>
            <li>
                <NavLink to="/createcharacter" className="navlink">
                    Create a Character
                </NavLink>
            </li>
        </div>
    )
}