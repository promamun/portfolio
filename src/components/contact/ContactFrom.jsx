import React, {Component} from 'react';

class ContactFrom extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/main-banner/cross-icon.png)`
        };const BgImage1 = {
            backgroundImage: `url(images/main-banner/cross-icon-1.png)`
        };const BgImage2 = {
            backgroundImage: `url(images/main-banner/cross-icon-2.png)`
        };const BgImage3 = {
            backgroundImage: `url(images/main-banner/cross-icon-3.png)`
        };const BgImage4 = {
            backgroundImage: `url(images/main-banner/cross-icon-4.png)`
        };const BgImage5 = {
            backgroundImage: `url(images/main-banner/cross-icon-5.png)`
        };const BgImage6 = {
            backgroundImage: `url(images/main-banner/cross-icon-6.png)`
        };const BgImage7 = {
            backgroundImage: `url(images/main-banner/cross-icon-7.png)`
        };const BgImage8 = {
            backgroundImage: `url(images/main-banner/cross-icon-8.png)`
        };const BgImage9 = {
            backgroundImage: `url(images/main-banner/cross-icon-9.png)`
        };const BgImage10 = {
            backgroundImage: `url(images/main-banner/cross-icon-10.png)`
        };
        return (
            <div>
                <section className="contact-section altrenate">
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
                        style={BgImage5}
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
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title text-left">
                                        <h6 className="subtitle">Get in Touch</h6>
                                        <h2>Get Free SEO Analysis?</h2>
                                    </div>
                                    <div className="contact-form">
                                        <form
                                            method="post"
                                            action="https://expert-themes.com/html/sola/blog.html"
                                        >
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder="Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input
                                                        type="url"
                                                        name="website"
                                                        placeholder="Your Website"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                            name="message"
                            placeholder="Massage"
                        ></textarea>
                                                </div>
                                                <div
                                                    className="col-lg-12 col-md-12 col-sm-12 form-group text-left"
                                                >
                                                    <button
                                                        className="theme-btn btn-style-one"
                                                        type="submit"
                                                        name="submit-form"
                                                    >
                                                        <span className="txt">Send Now</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 text-right">
                                <div
                                    className="image-box parallax-scene-4 wow fadeInRight"
                                    data-wow-delay="100ms"
                                    data-wow-duration="100ms"
                                >
                                    <div className="image" data-depth="0.30">
                                        <img
                                            src="images/resource/contact-1.png"
                                            alt="ContactFrom Image"
                                        />
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

export default ContactFrom;