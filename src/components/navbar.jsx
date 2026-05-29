import "./navbar.css"

export default function Navbar() {
    return(
        <>
        <div className="navbar">
        <ul className="navbar-list">
            <li className="navbar-link"><a>Home</a></li>
            <li className="navbar-link"><a>Add Expenses</a></li>
            <li className="navbar-link"><a>Your Expenses</a></li>
            <li className="navbar-link"><a>Analytics</a></li>
            <li className="navbar-link"><a>Settings</a></li>
        </ul>

        <a className="navbar-sign-in">Sign in</a>
        </div>
        </>
    );
}