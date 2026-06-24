import { Link } from "react-router-dom";

function Sidebar() {
    return(
        <aside className="sidebar">
            <h3>Menu</h3>

            <ul>
                <li><Link to="/dashboard">🏠 Dashboard</Link></li>
                <li><Link to="/expenses">💰 Expenses</Link></li>
                <li><Link to="/settings">⚙ Settings</Link></li>
            </ul>
        </aside>
    );
}

export default Sidebar;