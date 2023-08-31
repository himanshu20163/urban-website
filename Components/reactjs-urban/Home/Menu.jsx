import React from 'react'
import './menu.css';
import logo from '../logo.png'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='header-container'>
            <div className="container">
                <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-light " id="urban-navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src={logo} height="75px" width="100px"></img>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#urban-menu" aria-controls="urban-menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="urban-menu">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/aboutus" class="nav-link active" aria-current="page" href="#">About us</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/products" class="nav-link active" aria-current="page" href="#">products</Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <button class="btn btn-outline-success enquiry-btn"  type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Menu