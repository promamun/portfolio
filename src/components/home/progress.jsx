import React, {Component} from 'react';

class Progress extends Component {
    render() {
        return (
            <div>
                <section className="progress-sec">
                    <div className="progress-bg"/>
                    <div className="container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="content-box">
                                    <div className="sec-title text-left">
                                        <h6 className="subtitle">Our Benefits</h6>
                                        <h2>
                                            Get more visiter on <br/>
                                            your website
                                        </h2>
                                        <p>
                                            As a leader in SEO, web design, ecommerce, website
                                            conversion,& Internet marketing services, our firm prides.
                                        </p>
                                    </div>
                                    <div className="progress-levels">
                                        <div
                                            className="progress-box wow fadeInLeft"
                                            data-wow-delay="0ms"
                                            data-wow-duration="0ms"
                                        >
                                            <div className="progress-header clearfix">
                                                <div className="box-title">DIGITAL STRATEGY</div>
                                                <div className="progress-percentage">
                                                    <div className="count-box">
                                                        <span
                                                            className="count-text"
                                                            data-speed="2000"
                                                            data-stop="70"
                                                        >0</span>%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" data-width="70"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="progress-box wow fadeInLeft"
                                            data-wow-delay="0ms"
                                            data-wow-duration="0ms"
                                        >
                                            <div className="progress-header clearfix">
                                                <div className="box-title">FINANCIAL SERVICES</div>
                                                <div className="progress-percentage">
                                                    <div className="count-box">
                                                        <span
                                                            className="count-text"
                                                            data-speed="2000"
                                                            data-stop="55"
                                                        >0</span>%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" data-width="55"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="progress-box wow fadeInLeft"
                                            data-wow-delay="0ms"
                                            data-wow-duration="0ms"
                                        >
                                            <div className="progress-header clearfix">
                                                <div className="box-title">CONSULTING</div>
                                                <div className="progress-percentage">
                                                    <div className="count-box"><span
                                                        className="count-text"
                                                        data-speed="2000"
                                                        data-stop="65"
                                                    >0</span>%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" data-width="65"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-cloumn col-lg-6 col-md-12 col-sm-12">
                                <div className="image-box">
                                    <figure>
                                        <img
                                            src="images/resource/progress-1.png"
                                            alt="progress image"
                                        />
                                    </figure>
                                    <div className="animated-img-1"/>
                                    <div className="animated-img-2"/>
                                    <div className="animated-img-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Progress;