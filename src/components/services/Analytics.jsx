import React, {Component} from 'react';

class Analytics extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/main-banner/cross-icon.png)`
        };const BgImage1 = {
            backgroundImage: `url(images/main-banner/banner-icon-1.png)`
        };const BgImage2 = {
            backgroundImage: `url(images/main-banner/banner-icon-2.png)`
        };const BgImage3 = {
            backgroundImage: `url(images/main-banner/banner-icon-3.png)`
        };const BgImage4 = {
            backgroundImage: `url(images/main-banner/banner-icon-4.png)`
        };const BgImage5 = {
            backgroundImage: `url(images/main-banner/banner-icon-5.png)`
        };const BgImage6 = {
            backgroundImage: `url(images/main-banner/banner-icon-6.png)`
        };const BgImage7 = {
            backgroundImage: `url(images/main-banner/banner-icon-7.png)`
        };const BgImage8 = {
            backgroundImage: `url(images/main-banner/banner-icon-8.png)`
        };const BgImage9 = {
            backgroundImage: `url(images/main-banner/banner-icon-9.png)`
        };const BgImage10 = {
            backgroundImage: `url(images/main-banner/banner-icon-10.png)`
        };
        return (
            <div>
                <section className="fun-fact-and-image">
                    <div
                        className="pattern-layer-one"
                        style={BgImage}
                    ></div>
                    <div
                        className="pattern-layer-two"
                        style={BgImage5}
                    ></div>
                    <div
                        className="pattern-layer-three"
                        style={BgImage6}
                    ></div>
                    <div
                        className="pattern-layer-four"
                        style={BgImage}
                    ></div>
                    <div
                        className="pattern-layer-five"
                        style={BgImage1}
                    ></div>
                    <div
                        className="pattern-layer-six"
                        style={BgImage2}
                    ></div>
                    <div
                        className="pattern-layer-seven"
                        style={BgImage8}
                    ></div>
                    <div
                        className="pattern-layer-eight"
                        style={BgImage7}
                    ></div>
                    <div
                        className="pattern-layer-nine"
                        style={BgImage10}
                    ></div>
                    <div
                        className="pattern-layer-ten"
                        style={BgImage9}
                    ></div>
                    <div
                        className="pattern-layer-eleven"
                        style={BgImage3}
                    ></div>
                    <div
                        className="pattern-layer-tweleve"
                        style={BgImage4}
                    ></div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-12">
                                <div
                                    className="image-box parallax-scene-3 wow fadeInLeft"
                                    data-wow-delay="100ms"
                                    data-wow-duration="100ms"
                                >
                                    <div className="image" data-depth="0.30">
                                        <img src="images/resource/fact-1.png" alt="Fact Image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="counter-colum col-lg-6 col-md-12">
                                <div className="counter-box">
                                    <div
                                        className="count-box wow fadeInUp"
                                        data-wow-delay="100ms"
                                        data-wow-duration="100ms"
                                    >
                                        <div className="count">
                    <span className="count-text" data-speed="5000" data-stop="140"
                    >0</span
                    ><i>m</i>
                                        </div>
                                        <h5 className="counter-title">Digital Global Audience Reach</h5>
                                    </div>
                                    <div
                                        className="count-box wow fadeInUp"
                                        data-wow-delay="400ms"
                                        data-wow-duration="400ms"
                                    >
                                        <div className="count">
                    <span className="count-text" data-speed="5000" data-stop="74"
                    >0</span
                    ><i>%</i>
                                        </div>
                                        <h5 className="counter-title">
                                            Of the audience is under 34 years
                                        </h5>
                                    </div>
                                    <div
                                        className="count-box wow fadeInUp"
                                        data-wow-delay="700ms"
                                        data-wow-duration="700ms"
                                    >
                                        <div className="count">
                    <span className="count-text" data-speed="5000" data-stop="1720"
                    >0</span
                    >
                                        </div>
                                        <h5 className="counter-title">
                                            Content pieces produced everyday
                                        </h5>
                                    </div>
                                    <div
                                        className="count-box wow fadeInUp"
                                        data-wow-delay="1000ms"
                                        data-wow-duration="1000ms"
                                    >
                                        <div className="count">
                    <span className="count-text" data-speed="5000" data-stop="96"
                    >0</span
                    ><i>%</i>
                                        </div>
                                        <h5 className="counter-title">Employee worldwide Satisfy</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Analytics;