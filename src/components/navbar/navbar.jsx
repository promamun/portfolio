import React, {Component} from 'react';
import {Link} from "react-router-dom";
import DTM from '../../assets/images/dtm.png'

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
                                        ><img height={75} width={142} src={DTM} alt="" title=""
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
                                                <li><Link to="/">Home</Link></li>
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
                                            ><img height={75} width={142} src={DTM} alt="" title=""
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
                                                    <li><Link to="/">Home</Link></li>
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
                </header>
            </div>
        );
    }
}

export default Navbar;
