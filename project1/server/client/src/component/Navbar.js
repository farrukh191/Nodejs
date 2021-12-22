import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { userContetext } from '../App'

const Navbar = () => {

    // yha pr useContext state ki value change krha h jis ki help se hm login and logout navbar dekh parhe h
    // condition TRUE h logout btn nzr ayega OR agr FALSE ayga to login btn nzr aye ga
    const { state, dispatch } = useContext(userContetext);
    const Rendermenu = () => {
        if (state) {
            return (
                <>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            )
        }
        else {
            return (
                <>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/signup">Registration</Link>
                    </li>

                </>
            )
        }
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mr-auto" id="navbarNav">
                    <ul class="navbar-nav ">
                        <Rendermenu />
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Navbar;