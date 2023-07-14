import React, {Component} from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <div>
                <section className="faq-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src="images/resource/faq-img.png" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title text-left">
                                        <h6 className="subtitle">Why Choose Us</h6>
                                        <h2>
                                            Work with a dedicated <br/>
                                            SEO company
                                        </h2>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Keyword & Market Research
                                                <div className="icon fa fa-arrow-circle-up"/>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <p>
                                                        Sole always works to stay on top of the latest trends
                                                        and best practices to apply to your company projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                Designing & Interactive Content
                                                <div className="icon fa fa-arrow-circle-up"/>
                                            </div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <p>
                                                        Sole always works to stay on top of the latest trends
                                                        and best practices to apply to your company projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Social Media Promotion
                                                <div className="icon fa fa-arrow-circle-up"/>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <p>
                                                        Sole always works to stay on top of the latest trends
                                                        and best practices to apply to your company projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Digital PR & Penalty Recovery
                                                <div className="icon fa fa-arrow-circle-up"/>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <p>
                                                        Sole always works to stay on top of the latest trends
                                                        and best practices to apply to your company projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WhyChooseUs;