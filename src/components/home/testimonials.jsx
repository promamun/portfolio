import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class Testimonials extends Component {
    render() {
        const options = {
            items: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        };
        return (
            <div>
                <section className="testimonial-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="image-box">
                                    <figure>
                                        <img
                                            src="images/resource/testimonial.png"
                                            alt="Testimonial Image"
                                        />
                                    </figure>
                                </div>
                            </div>
                            <div className="testimonial-column col-lg-6 col-md-12 col-sm-12">
                                <div className="sec-title">
                                    <h6 className="subtitle">Testimonials</h6>
                                    <h2>
                                        What clients are saying <br/>
                                        for our work
                                    </h2>
                                </div>
                                <OwlCarousel options={options} className="testimonial-carousel owl-carousel owl-theme">
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="text">
                                                “Working with Reuss is always an absolute joy, both
                                                personally and professionally. Tommy is an amazing
                                                speaker; her experience, expertise and genuine passion for
                                                what she does is obvious in every word he says.”
                                            </div>
                                            <div className="icon-quote">
                                                <i className="flaticon flaticon-quote"/>
                                            </div>
                                            <div className="info-box">
                                                <div className="thumb">
                                                    <img src="images/resource/thumb.png" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <h4 className="name">Megan Mori</h4>
                                                    <span className="designation">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="text">
                                                “Working with Reuss is always an absolute joy, both
                                                personally and professionally. Tommy is an amazing
                                                speaker; her experience, expertise and genuine passion for
                                                what she does is obvious in every word he says.”
                                            </div>
                                            <div className="icon-quote">
                                                <i className="flaticon flaticon-quote"/>
                                            </div>
                                            <div className="info-box">
                                                <div className="thumb">
                                                    <img src="images/resource/thumb.png" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <h4 className="name">Megan Mori</h4>
                                                    <span className="designation">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="text">
                                                “Working with Reuss is always an absolute joy, both
                                                personally and professionally. Tommy is an amazing
                                                speaker; her experience, expertise and genuine passion for
                                                what she does is obvious in every word he says.”
                                            </div>
                                            <div className="icon-quote">
                                                <i className="flaticon flaticon-quote"/>
                                            </div>
                                            <div className="info-box">
                                                <div className="thumb">
                                                    <img src="images/resource/thumb.png" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <h4 className="name">Megan Mori</h4>
                                                    <span className="designation">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="text">
                                                “Working with Reuss is always an absolute joy, both
                                                personally and professionally. Tommy is an amazing
                                                speaker; her experience, expertise and genuine passion for
                                                what she does is obvious in every word he says.”
                                            </div>
                                            <div className="icon-quote">
                                                <i className="flaticon flaticon-quote"/>
                                            </div>
                                            <div className="info-box">
                                                <div className="thumb">
                                                    <img src="images/resource/thumb.png" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <h4 className="name">Megan Mori</h4>
                                                    <span className="designation">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Testimonials;