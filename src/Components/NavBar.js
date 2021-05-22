import React from 'react'
import logo from '../Images/logo.png';
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <img src={logo} width="60" height="60" className="d-inline-block align-top" alt=""/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">
                                <p className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/vinilo">
                                <p className="nav-link" href="#">Vinilos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/cd">
                                <p className="nav-link" href="#">CDs</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <p className="navbar-brand" >
                    <CartWidget />
                </p>
            </nav>
        </div>
            
        )
    }

export default NavBar