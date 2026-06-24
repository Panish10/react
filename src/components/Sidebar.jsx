import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    return(
        <aside className="sidebar">
            <h3>Menu</h3>

            <ul>
                <li><NavLink to="/dashboard" className={({isActive})=>isActive ? "active" : ""}>🏠 Dashboard</NavLink></li>
                <li><NavLink to="/expenses" className={({isActive})=>isActive ? "active" : ""}>💰 Expenses</NavLink></li>
                <li><NavLink to="/settings" className={({isActive})=>isActive ? "active" : ""}>⚙ Settings</NavLink></li>
            </ul>
        </aside>
    );
}

export default Sidebar;