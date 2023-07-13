import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class CaseStudies extends Component {
    render() {
        const options = {
            items: 4,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        };
        return (
            <div>
                <section className="projects-section">
                    <div className="auto-container">
                        <div className="sec-title text-left">
                            <h6 className="subtitle">Explore Case Studies</h6>
                            <h2>
                                Solid results of our <br/>
                                different case studies
                            </h2>
                        </div>
                    </div>
                    <div className="inner-container">
                        <OwlCarousel options={options} className="projects-carousel owl-carousel owl-theme">
                            <div className="project-block">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src="images/gallery/1.jpg" alt=""/>
                                    </figure>
                                    <div className="overlay-box">
                                        <a href="project-detail.html"><i className="fa fa-link"/></a>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <span className="tag">Digital</span>
                                    <h3><a href="project-detail.html">Mobile App Vister</a></h3>
                                </div>
                            </div>
                            <div className="project-block">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src="images/gallery/2.jpg" alt=""/>
                                    </figure>
                                    <div className="overlay-box">
                                        <a href="project-detail.html"><i className="fa fa-link"/></a>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <span className="tag">Business</span>
                                    <h3><a href="project-detail.html">Digital Work</a></h3>
                                </div>
                            </div>
                            <div className="project-block">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src="images/gallery/3.jpg" alt=""/>
                                    </figure>
                                    <div className="overlay-box">
                                        <a href="project-detail.html"><i className="fa fa-link"/></a>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <span className="tag">Digital PR</span>
                                    <h3><a href="project-detail.html">Innovative Interface</a></h3>
                                </div>
                            </div>
                            <div className="project-block">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src="images/gallery/4.jpg" alt=""/>
                                    </figure>
                                    <div className="overlay-box">
                                        <a href="project-detail.html"><i className="fa fa-link"/></a>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <span className="tag">SEO Marketing</span>
                                    <h3><a href="project-detail.html">Opertray Division</a></h3>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </div>
        );
    }
}

export default CaseStudies;