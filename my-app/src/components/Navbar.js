import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                Home
            </NavLink> | 
            <NavLink to="/players">
                 Characters
            </NavLink> | 
            <NavLink to="/createplayer">
                 Create a Character
            </NavLink>
        </div>
    )
}