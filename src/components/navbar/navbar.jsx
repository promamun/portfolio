import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="main-header header-style-two">
                    <div className="auto-container">
                        <div className="header-lower">
                            <div className="main-box clearfix">
                                <div className="logo-box">
                                    <div className="logo">
                                        <Link to="/"
                                        ><img src="images/logo-2.png" alt="" title=""
                                        /></Link>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix">
                                    <div className="mobile-nav-toggler">
                                        <span className="icon flaticon flaticon-menu"/>
                                    </div>
                                    <nav className="main-menu navbar-expand-md">
                                        <div className="collapse show navbar-collapse clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li ><Link to="/">Home</Link></li>
                                                <li><Link to="/service">Services</Link></li>
                                                <li><Link to="/team">Team</Link></li>
                                                <li><Link to="/case-studies">Case Studies</Link></li>
                                                <li><Link to="/projects">Projects</Link></li>
                                                <li><Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <div className="outer-box">
                                        <Link to="/free-consultation" className="theme-btn btn-style-one">
                                            <span className="txt">Free Consultation</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header">
                        <div className="auto-container">
                            <div className="header-lower">
                                <div className="main-box clearfix">
                                    <div className="logo-box">
                                        <div className="logo">
                                            <Link to="/"
                                            ><img src="images/logo-2.png" alt="" title=""
                                            /></Link>
                                        </div>
                                    </div>
                                    <div className="nav-outer clearfix">
                                        <div className="mobile-nav-toggler">
                                            <span className="icon flaticon flaticon-menu"/>
                                        </div>
                                        <nav className="main-menu navbar-expand-md">
                                            <div className="collapse show navbar-collapse clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix">
                                                    <li ><Link to="/">Home</Link></li>
                                                    <li><Link to="/service">Services</Link></li>
                                                    <li><Link to="/team">Team</Link></li>
                                                    <li><Link to="/case-studies">Case Studies</Link></li>
                                                    <li><Link to="/projects">Projects</Link></li>
                                                    <li><Link to="/pricing">Pricing</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                        <div className="outer-box">
                                            <Link to="/free-consultation" className="theme-btn btn-style-one">
                                                <span className="txt">Free Consultation</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <div className="menu-backdrop"/>
                        <div className="close-btn"><span className="icon fas fa-times"/></div>
                        <nav className="menu-box">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img src="images/logo.png" alt="" title=""
                                /></Link>
                            </div>
                            <div className="menu-outer"/>
                            <div className="options-box clearfix">
                                <div className="social-box">
                                    <ul className="social-icons">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-pinterest-p"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-google-plus-g"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;