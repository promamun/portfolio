import React, {Component} from 'react';

class Newsletter extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/resource/newsletter.png)`
        };
        return (
            <div>
                <section className="newsletter-section margin-bottom">
                    <div className="auto-container">
                        <div
                            className="inner-container"
                            style={BgImage}
                        >
                            <div className="row clearfix">
                                <div className="form-column col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h2>Subscribe for Newsletter</h2>
                                        <div className="emailed-form">
                                            <form
                                                method="post"
                                                action="https://expert-themes.com/html/sola/contact.html"
                                            >
                                                <div className="form-group">
                                                    <input
                                                        type="url"
                                                        name="url"
                                                        value=""
                                                        placeholder="Website URL *"
                                                        required
                                                    />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value=""
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="theme-btn btn-style-one buy-btn"
                                                    >
                                                        <span className="txt">Submit Now</span>
                                                    </button>
                                                </div>
                                            </form>
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

export default Newsletter;