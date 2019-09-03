import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
//import styled from 'styled-components'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/smartphone-shop/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/smartphone-shop/" className="nav-link">products</Link>
                    </li>
                </ul>
                <Link to="/smartphone-shop/cart" className="ml-auto">
                    <button className="navButton">
                        <i className="fas fa-cart-plus"> My Cart</i>
                    </button>
                </Link>
            </nav>
        )
    }
}

export default Navbar