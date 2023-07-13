import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';

class Team extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/background/3.png)`
        };
        const options = {
            items: 4,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        };
        return (
            <div>
                <section className="team-section">
                    <div
                        className="team-bg wow fadeInRight"
                        style={BgImage}
                    />
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <h6 className="subtitle">Our Specialists Worker</h6>
                            <h2>
                                Meet our expert team works <br/>
                                for your business
                            </h2>
                        </div>
                        <OwlCarousel className="team-carousel owl-carousel owl-theme"  options={options}>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/1.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Olivia Jayden</a></h4>
                                        <span className="designation">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-1">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/2.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Noah Michael</a></h4>
                                        <span className="designation">Market Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-2">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/3.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Emma William</a></h4>
                                        <span className="designation">General Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-3">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/4.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Matthew David</a></h4>
                                        <span className="designation">CEO of Company</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/1.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Olivia Jayden</a></h4>
                                        <span className="designation">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-1">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/2.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Noah Michael</a></h4>
                                        <span className="designation">Market Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-2">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/3.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Emma William</a></h4>
                                        <span className="designation">General Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-3">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/4.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Matthew David</a></h4>
                                        <span className="designation">CEO of Company</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/1.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Olivia Jayden</a></h4>
                                        <span className="designation">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-1">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/2.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Noah Michael</a></h4>
                                        <span className="designation">Market Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-2">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/3.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Emma William</a></h4>
                                        <span className="designation">General Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-3">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/4.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Matthew David</a></h4>
                                        <span className="designation">CEO of Company</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/1.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Olivia Jayden</a></h4>
                                        <span className="designation">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-1">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/2.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Noah Michael</a></h4>
                                        <span className="designation">Market Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-2">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/3.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Emma William</a></h4>
                                        <span className="designation">General Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-3">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <a href="team.html"
                                            ><img src="images/team/4.jpg" alt=""
                                            /></a>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"/></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"/></a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name"><a href="team.html">Matthew David</a></h4>
                                        <span className="designation">CEO of Company</span>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </div>
        );
    }
}

export default Team;