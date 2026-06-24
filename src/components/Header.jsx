function Header({username}) {
    return(
        <header className="header">
            <div>
                <h1>Expense Dashboard</h1>
                <p>Welcome, {username} 👋</p>
            </div>
            <div>
                <span>June 2026</span>
            </div>
        </header>
    );
}

export default Header;