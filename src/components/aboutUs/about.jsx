import React, {Component} from 'react';
import Traffics from "../home/Traffics";
import HappyClients from "../home/HappyClients";
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/background/22.png)`
        };
        return (
            <div>
                <section
                    className="page-title"
                    style={BgImage}
                >
                    <div id="stars"/>
                    <div id="stars2"/>
                    <div id="stars3"/>
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="title-box">
                                <h1>About Us</h1>
                                <ul className="bread-crumb clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Traffics/>
                <HappyClients/>
            </div>
        );
    }
}

export default About;