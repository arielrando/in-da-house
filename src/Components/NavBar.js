import React from 'react'
import logo from '../Images/logo.png';
import CartWidget from './CartWidget'


const NavBar = ({stockCarrito}) => {
    return(
        <div className="NavBar">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="60" height="60" className="d-inline-block align-top" alt=""/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CDs y Vinilos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Merch</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#">
                    <CartWidget carritoNumber={stockCarrito}/>
                </a>
            </nav>

        </div>
            
        )
    }

export default NavBar