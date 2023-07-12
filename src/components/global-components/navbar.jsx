import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="site-header-two site-header-two__home-three go-top">
                    <nav className="main-nav__two stricky">
                        <div className="container">
                            <div className="main-nav__logo-box">
                                <Link to="/">
                                    <img src={"assets/images/logo-full-light.png"} alt='test' />
                                </Link>
                            </div>{/* /.main-nav__logo-box */}
                            <div className="main-nav__main-navigation">
                                <ul className=" main-nav__navigation-box">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li >
                                        <a href="#">Services</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Work</a>
                                        <ul>
                                            <li><Link to="/portfolio-standard">Portfolio Standard</Link></li>
                                            <li><Link to="/portfolio-full">Portfolio Full</Link></li>
                                            <li><Link to="/portfolio-masonary">Portfolio Masonary</Link></li>
                                            <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        </ul>{/* /.sub-menu */}
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>{/* /.main-nav__main-navigation */}
                            <div className="main-nav__right">
                                <a href="#" className="side-menu__toggler"><span /></a>
                            </div>{/* /.main-nav__right */}
                        </div>{/* /.container */}
                    </nav>{/* /.main-nav__one */}
                </header>
            </div>
        );
    }
}

export default Navbar;