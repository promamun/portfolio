import React, {Component} from 'react';

class Traffics extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/background/1.png)`
        };
        return (
            <div>
                <section
                    className="about-section"
                    style={BgImage}
                >
                    <div className="auto-container">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="alphabet-img wow fadeInRight">
                                            <img src="images/resource/about-img.png" alt="about img"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="content-column col-lg-5 offset-lg-1 col-md-12 col-sm-12"
                            >
                                <div className="inner-column wow fadeInLeft">
                                    <div className="content-box">
                                        <div className="sec-title text-left">
                                            <h6 className="subtitle">Grow Traffice & Increase Revenue</h6>
                                            <h2>
                                                Appear on the <br/>
                                                front page of google!
                                            </h2>
                                        </div>
                                        <p>
                                            We are full-service Internet marketing and SEO company
                                            offering innovative web marketing solutions to mid to large
                                            size companies across the globe. As a leader in SEO, web
                                            design, ecommerce, website conversion, and Internet
                                            marketing services, our firm prides ourselves.
                                        </p>
                                        <p>
                                            We have an ever-expanding trophy cabinet for our web design,
                                            SEO, and digital marketing work.
                                        </p>
                                        <div className="link-box">
                                            <a href="about.html" className="theme-btn btn-style-one"
                                            ><span className="txt">About More</span></a
                                            >
                                        </div>
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

export default Traffics;