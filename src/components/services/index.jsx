import React, {Component} from 'react';
import Solutions from "../home/Solutions";
import {Link} from "react-router-dom";
import AllService from "../home/AllService";
import Analytics from "./Analytics";
import ContactFrom from "../contact/ContactFrom";

class Index extends Component {
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
                                <h1>Services</h1>
                                <ul className="bread-crumb clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Solutions/>
                <AllService/>
                <Analytics/>
                <ContactFrom/>
            </div>
        );
    }
}

export default Index;