import React, {Component} from 'react';
import Mamun_pro_signature from '../../assets/images/resource/Mamun_Pro_Signature.png'
import {Link} from "react-router-dom";
import MamunPro from "../../assets/images/team/Mamun_Pro_Main.png";
import RamizImg from "../../assets/images/team/Ramiz.jpg";
import AvijitImg from "../../assets/images/team/Avijit.jpg";
import FarhanImg from "../../assets/images/team/Farhan.jpg";
import PopinImg from "../../assets/images/team/Popin.jpg";
import JeanBuagas from "../../assets/images/team/Jean_Buagas.png";
import Shakib from "../../assets/images/team/Shakib.jpg";
class TeamMembers extends Component {
    render() {
        const BgImg = {
          backgroundImage:`url(images/background/9.png)`
        };
        return (
            <div>
                <section className="team-section alternate">
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <h6 className="subtitle">Our Specialists Team</h6>
                            <h2>
                                Meet our expert team<br/>
                                Teamwork makes the dream work.
                            </h2>
                        </div>
                        <div className="row">
                            <div className="team-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={MamunPro} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <Link
                                                target="_blank"
                                                to="https://www.facebook.com/Mdmamun6160"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target="_blank" to="https://twitter.com/MamunPro">
                                                <i className="fab fa-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <a href="team.html">Mamun Pro</a>
                                        </h4>
                                        <span className="designation">
                      Project & Marketing Manager
                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-1 col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={RamizImg} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <Link to="/team">Ramij Ahmed</Link>
                                        </h4>
                                        <span className="designation">Technical Lead (MNC)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-2 col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={AvijitImg} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <Link to="/team">Avijit Samanta</Link>
                                        </h4>
                                        <span className="designation">Full-Stack Developer (MERN)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={FarhanImg} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <Link to="/team">Farhan Ahmed</Link>
                                        </h4>
                                        <span className="designation">Frontend Developer (React BootStrap Flex )</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={PopinImg} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <Link to="/team">Moinul Islam</Link>
                                        </h4>
                                        <span className="designation">PHP & Laraval Expert</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-2 col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={Shakib} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <Link target={'_blank'} to="https://www.facebook.com/muhammad.sakib.3139241">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target={'_blank'} to="https://twitter.com/MdSakib90893202">
                                                <i className="fab fa-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <Link to="/team">Muhammad Sakib</Link>
                                        </h4>
                                        <span className="designation">Digital Marketing Expert</span>
                                    </div>
                                </div>
                            </div>
                            <div className="team-block team-block-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <div className="image">
                                            <Link to="/team">
                                                <img src={JeanBuagas} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="social-links">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-dribbble" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="text-box">
                                        <h4 className="name">
                                            <Link to="/team">Jean S. Buagas</Link>
                                        </h4>
                                        <span className="designation">Marketing Assistant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="about-section style-two"
                    style={BgImg}
                >
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="content-box">
                                        <div className="sec-title text-left">
                                            <h2>
                                                Creative Strategies that <br/>
                                                Drive Profitable Outcomes
                                            </h2>
                                        </div>
                                        <h5>
                                            Over 5 years DTM helping companies reach their Website
                                            and branding goals.
                                        </h5>
                                        <p>
                                            Over the years, we have worked with Fortune 50s and
                                            brand-new startups. Our innovative and tailored solutions open the door to
                                            increased profitability for your business.
                                            With a blend of creativity, strategy, and expertise,
                                            we provide unique and impactful solutions that drive results.
                                            From captivating branding to targeted marketing campaigns,
                                            we empower your business to thrive in a competitive landscape.
                                            Experience the transformative power of creative solutions that
                                            deliver profits right to your door. Give us a call.
                                        </p>
                                        <div className="video-link">
                                            <a
                                                href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                                                data-fancybox="gallery"
                                                data-caption=""
                                            ><span className="icon fa fa-play" aria-hidden="true"/><i className="ripple"/></a>
                                            <span className="text-video">Watch Video</span>
                                            <figure>
                                                <img
                                                    src={Mamun_pro_signature}
                                                    alt="signature image"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="alphabet-img wow fadeInRight">
                                            <img
                                                src="images/resource/about-img-1.png"
                                                alt="about img"
                                            />
                                        </figure>
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

export default TeamMembers;