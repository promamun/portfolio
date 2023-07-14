import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import CASEIMG1 from "../../assets/images/gallery/1.jpg";
import CASEIMG2 from "../../assets/images/gallery/2.jpg";
import CASEIMG3 from "../../assets/images/gallery/3.jpg";
import CASEIMG4 from "../../assets/images/gallery/4.jpg"

class CaseStudies extends Component {
    render() {
       
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
                        <OwlCarousel items={1} autoPlay={true} loop={true} nav={true} className="projects-carousel owl-carousel owl-theme">
                            <div className="project-block">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={CASEIMG1} alt=""/>
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
                                        <img src={CASEIMG2} alt=""/>
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
                                        <img src={CASEIMG3} alt=""/>
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
                                        <img src={CASEIMG4} alt=""/>
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