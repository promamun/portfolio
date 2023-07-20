import { Link } from "react-router-dom";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import CIMG1 from "../../assets/images/clients/client-1.png";
import CIMG2 from "../../assets/images/clients/client-2.png";
import CIMG3 from "../../assets/images/clients/client-3.png";
import CIMG4 from "../../assets/images/clients/client-4.png";
import CIMG5 from "../../assets/images/clients/client-5.png";
import CIMG6 from "../../assets/images/clients/1.png";
import CIMG7 from "../../assets/images/clients/4.png";
import CIMG8 from "../../assets/images/clients/5.png";

class Clients extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url('images/background/7.png')`
    };
    return (
      <div>
        <section className="clients-section style-two" style={BgImage}>
          <div className="container-fluid">
            <div className="sponsors-outer">
              <OwlCarousel
                items={5}
                autoplay={true}
                loop={true}
                className="sponsors-carousel owl-carousel owl-theme"
              >
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG1} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG2} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG3} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG4} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG5} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG6} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG7} alt="" />
                    </Link>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <Link to="#">
                      <img src={CIMG8} alt="" />
                    </Link>
                  </figure>
                </li>
              </OwlCarousel>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Clients;
