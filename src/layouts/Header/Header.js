import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light top-menu">
                        <a className="navbar-brand intro-text" href="#">QG</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category
                                </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Product Type 1</a>
                                        <a className="dropdown-item" href="#">Product Type 2</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Product Type 3</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control search-text" placeholder="Your Email" />
                                    <div className="input-group-append">
                                        <span className="input-group-text search-button"><FontAwesomeIcon icon={faSearch} /></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;