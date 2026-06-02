import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <div className="navbar">

            <ul className="navbar-list">

                <li className="navbar-link">
                    <Link to="/">Home</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/add">Add Expense</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/expenses">Your Expenses</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/analytics">Analytics</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/">Settings</Link>
                </li>

            </ul>

            <a className="navbar-sign-in">
                Sign in
            </a>

        </div>
    );
}