import './header.css'

const Header = () => {
    return (
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    )
}

export default Header;