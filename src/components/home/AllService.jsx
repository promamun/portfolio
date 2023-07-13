import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class AllService extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/background/2.png)`
        };
        const padding = {
            padding:'10px',
        };
        const options = {
            items: 4,
            navText:true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        };
        return (
            <div>
                <section
                    className="services-section style-two"
                    style={BgImage}
                >
                    <div className="upper-box">
                        <div className="auto-container">
                            <div className="sec-title text-center light">
                                <h6 className="subtitle">Seach Engine & Social Media Optmization</h6>
                                <h2>
                                    Full service <br/>
                                    digital marketing agency
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="services-box">
                        <div className="auto-container">
                            <OwlCarousel options={options} className="services-carousel owl-carousel owl-theme">
                                <div className="service-block-five" style={padding}>
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <a href="service-detail.html"
                                                ><img src="images/services/4.png" alt="Services Image"
                                                /></a>
                                            </figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4>
                                                <a href="service-detail.html">Social Media Marketing</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-block-five">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <a href="service-detail.html"
                                                ><img src="images/services/5.png" alt="Services Image"
                                                /></a>
                                            </figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4>
                                                <a href="service-detail.html">Adanced Media Analytics</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-block-five">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <a href="service-detail.html"
                                                ><img src="images/services/6.png" alt="Services Image"
                                                /></a>
                                            </figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4>
                                                <a href="service-detail.html">Organic Long Term SEO</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-block-five">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <a href="service-detail.html"
                                                ><img src="images/services/7.png" alt="Services Image"
                                                /></a>
                                            </figure>
                                        </div>
                                        <div className="lower-content">
                                            <h4>
                                                <a href="service-detail.html">Date Saveing Security</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AllService;