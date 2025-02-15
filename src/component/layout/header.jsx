import './header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">User</NavLink></li>
            <li><NavLink to="/book">Product</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
        </ul>
    )
}

export default Header;