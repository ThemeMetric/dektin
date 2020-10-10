import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="main-menu">
                <nav>
                    <ul id="navigation">
                        <li>
                            <Link className="active" to="/">
                                Home
                            </Link>
                            <ul className="submenu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/home2">Home 2</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/">Pages</Link>

                            <ul className="submenu">
                                <li>
                                    <Link to="/blogdetails">Blog Details</Link>
                                </li>
                                <li>
                                    <Link to="/">Elements 02</Link>
                                </li>
                                <li>
                                    <Link to="/">Elements 03</Link>
                                </li>
                                <li>
                                    <Link to="/">Elements 04</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="ht-right-btn">
                    <Link className="cbtn" to="/contact">
                        Get Trial Version
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
