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
                                        <a href="index.html"
                                        ><img src="images/logo-2.png" alt="" title=""
                                        /></a>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix">
                                    <div className="mobile-nav-toggler">
                                        <span className="icon flaticon flaticon-menu"/>
                                    </div>
                                    <nav className="main-menu navbar-expand-md">
                                        <div className="collapse show navbar-collapse clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                <li >
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li >
                                                    <Link to="/about">About</Link>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="service">Services</Link>
                                                </li>
                                                <li >
                                                    <Link to="/portfolio">Portfolio</Link>
                                                </li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <div className="outer-box">
                                        <div className="cart-box">
                                            <div className="dropdown">
                                                <button
                                                    className="cart-box-btn dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenu1"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                        <span className="flaticon flaticon-shopping-cart"></span
                        ><span className="total-cart">2</span>
                                                </button>
                                                <div
                                                    className="dropdown-menu pull-right cart-panel"
                                                    aria-labelledby="dropdownMenu1"
                                                >
                                                    <div className="cart-product">
                                                        <div className="inner">
                                                            <div className="cross-icon">
                                                                <span className="icon fa fa-remove"/>
                                                            </div>
                                                            <div className="image">
                                                                <img
                                                                    src="images/resource/products/1.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h3><a href="shop-single.html">Flying Ninja</a></h3>
                                                            <div className="quantity-text">Quantity 1</div>
                                                            <div className="price">$99.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product">
                                                        <div className="inner">
                                                            <div className="cross-icon">
                                                                <span className="icon fa fa-remove"/>
                                                            </div>
                                                            <div className="image">
                                                                <img
                                                                    src="images/resource/products/2.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h3>
                                                                <a href="shop-single.html">Patient Ninja</a>
                                                            </h3>
                                                            <div className="quantity-text">Quantity 1</div>
                                                            <div className="price">$99.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-total">
                                                        Sub Total: <span>$198</span>
                                                    </div>
                                                    <ul className="btns-boxed">
                                                        <li><a href="shoping-cart.html">View Cart</a></li>
                                                        <li><a href="checkout.html">CheckOut</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-box-outer">
                                            <button className="search-box-btn" id="one">
                                                <span className="flaticon flaticon-magnifier"/>
                                            </button>
                                            <div id="modal-container">
                                                <div className="modal-background">
                                                    <div className="modal">
                                                        <div className="form-container">
                                                            <h2>Search Here</h2>
                                                            <form
                                                                method="post"
                                                                action="https://expert-themes.com/html/sola/blog.html"
                                                            >
                                                                <div className="form-group">
                                                                    {/*<input*/}
                                                                    {/*    type="search"*/}
                                                                    {/*    name="field-name"*/}
                                                                    {/*    value=""*/}
                                                                    {/*    placeholder="Search Here"*/}
                                                                    {/*    required*/}
                                                                    {/*/>*/}
                                                                    <button type="submit" className="search-btn">
                                                                        <span className="fa fa-search"/>
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="nav-toggler">
                                            <span className="flaticon flaticon-menu"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header">
                        <div className="auto-container clearfix">
                            <div className="main-box clearfix">
                                <div className="logo-box">
                                    <div className="logo">
                                        <a href="index.html"
                                        ><img src="images/logo.png" alt="" title=""
                                        /></a>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix">
                                    <div className="mobile-nav-toggler">
                                        <span className="icon flaticon flaticon-menu"/>
                                    </div>
                                    <nav className="main-menu navbar-expand-md"/>
                                    <div className="outer-box">
                                        <div className="cart-box">
                                            <div className="dropdown">
                                                <button
                                                    className="cart-box-btn dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenu2"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                        <span className="flaticon flaticon-shopping-cart"></span
                        ><span className="total-cart">2</span>
                                                </button>
                                                <div
                                                    className="dropdown-menu pull-right cart-panel"
                                                    aria-labelledby="dropdownMenu2"
                                                >
                                                    <div className="cart-product">
                                                        <div className="inner">
                                                            <div className="cross-icon">
                                                                <span className="icon fa fa-remove"/>
                                                            </div>
                                                            <div className="image">
                                                                <img
                                                                    src="images/resource/products/1.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h3><a href="shop-single.html">Flying Ninja</a></h3>
                                                            <div className="quantity-text">Quantity 1</div>
                                                            <div className="price">$99.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product">
                                                        <div className="inner">
                                                            <div className="cross-icon">
                                                                <span className="icon fa fa-remove"/>
                                                            </div>
                                                            <div className="image">
                                                                <img
                                                                    src="images/resource/products/2.jpg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h3>
                                                                <a href="shop-single.html">Patient Ninja</a>
                                                            </h3>
                                                            <div className="quantity-text">Quantity 1</div>
                                                            <div className="price">$99.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-total">
                                                        Sub Total: <span>$198</span>
                                                    </div>
                                                    <ul className="btns-boxed">
                                                        <li><a href="shoping-cart.html">View Cart</a></li>
                                                        <li><a href="checkout.html">CheckOut</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="nav-toggler">
                                            <span className="flaticon flaticon-menu"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn"><span className="icon fas fa-times"/></div>
                        <nav className="menu-box">
                            <div className="nav-logo">
                                <a href="index.html"
                                ><img src="images/logo.png" alt="" title=""
                                /></a>
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