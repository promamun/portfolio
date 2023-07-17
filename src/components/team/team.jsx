import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import MamunPro from "../../assets/images/team/Mamun_Pro_Main.png";
import RamizImg from "../../assets/images/team/Ramiz.jpg";
import AvijitImg from "../../assets/images/team/Avijit.jpg";
import PopinImg from "../../assets/images/team/Popin.jpg";
import FarhanImg from "../../assets/images/team/Farhan.jpg";
import TeameImage6 from "../../assets/images/team/4.jpg";
import TeameImage7 from "../../assets/images/team/4.jpg";
import TeameImage8 from "../../assets/images/team/4.jpg";

class Team extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/3.png)`,
    };
    return (
      <div>
        <section className="team-section">
          <div className="team-bg wow fadeInRight" style={BgImage} />
          <div className="auto-container">
            <div className="sec-title text-center">
              <h6 className="subtitle">Our Specialists TEAM</h6>
              <h2>
                Meet our expert team
                <br />
                Teamwork makes the dream work.
              </h2>
            </div>
            <OwlCarousel
                autoplay={true}
                items={4}
                className={'team-carousel owl-carousel owl-theme'}
            >
              <div className="team-block">
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
              <div className="team-block team-block-1">
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
              <div className="team-block team-block-2">
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
              <div className="team-block team-block-3">
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
                    <span className="designation">PHP & Laravel Expert</span>
                  </div>
                </div>
              </div>
              <div className="team-block">
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
                    <span className="designation">Frontend Developer (React.js,BootStrap,Flex)</span>
                  </div>
                </div>
              </div>
              <div className="team-block team-block-1">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link to="/team">
                        <img src={TeameImage6} alt="" />
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
                      <Link to="/team">Noah Michael</Link>
                    </h4>
                    <span className="designation">Market Manager</span>
                  </div>
                </div>
              </div>
              <div className="team-block team-block-2">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link to="/team">
                        <img src={TeameImage7} alt="" />
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
                      <Link to="/team">Emma William</Link>
                    </h4>
                    <span className="designation">General Manager</span>
                  </div>
                </div>
              </div>
              <div className="team-block team-block-3">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link to="team.html">
                        <img src={TeameImage8} alt="" />
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
                      <Link to="/team">Matthew David</Link>
                    </h4>
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
