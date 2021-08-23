import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/players">
                Players
            </NavLink>
            <NavLink to="/create-player">
                Create a Player
            </NavLink>
        </div>
    )
}