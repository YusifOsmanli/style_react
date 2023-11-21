import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <nav class="navbar bg-body-tertiary" id='navbar'>
            <div class="container-fluid">
                <a class="navbar-brand">Start Bootstrap</a>
                <form class="d-flex" role="search">
                    <button class="btn btn-primary" type="submit">Sign Up</button>
                </form>
            </div>
        </nav>
    )
}

export default Header