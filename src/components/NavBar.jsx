import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img src="images/logo.png" alt="TiendaElectro" width="105" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="page" to={"/category/mouse"}>Mouse</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname="page" to={"/category/camaras"}>Cámaras</NavLink>
                            </li>
                            <li className="nav-item">   
                                <NavLink className="nav-link" activeclassname="page" to={"/category/teclados"}>Teclados</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar;