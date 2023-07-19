import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Banner from "../../assets/images/main-banner/5.png";
import Banner1 from "../../assets/images/services/4.png";
import Button from "../contact/Button";

class ComingSoon extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url('images/main-banner/banner-bg.png')`
        };
        return (
            <div>
                <section
                    className="banner-section style-two"
                    style={BgImage}
                >
                    <div id="stars"/>
                    <div id="stars2"/>
                    <div id="stars3"/>
                    <div className="container-fluid">
                        <ul className="social-links">
                            <li>
                                <Link to="#"><i className="fab fa-facebook-f"/></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-pinterest-p"/></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-twitter"/></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fab fa-dribbble"/></Link>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="content-inner">
                                    <h1>This Page under construction. </h1>
                                    <p>
                                        stay tuned for something
                                        amazing!. During this time you can contact Us for Free Consultations.
                                    </p>
                                    <Button To={'/contact'} children={'Contact Us'} className={'theme-btn btn-style-one'} />
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="image-box">
                                    <img
                                        className="image-bg"
                                        src={Banner}
                                        alt="banner image"
                                    />
                                    <img
                                        className="image-vector"
                                        src={Banner1}
                                        alt="banner image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ComingSoon;