import { Outlet, Link, NavLink } from "react-router-dom";
import './Layout.css';

function LayoutPage() {
    return (
        <>
            <h3>Header</h3>
            <p>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/blog">Blog</a>
            </p>

            <p>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/blog">Blog</Link>
            </p>

            <p>
                <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/blog">Blog</NavLink>
            </p>

            <Outlet />

            <h3>Footer</h3>
        </>
    )
}

export default LayoutPage;