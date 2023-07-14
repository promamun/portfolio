import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import CLTIMG1 from "../../assets/images/clients/1.png";
import CLTIMG2 from "../../assets/images/clients/2.png";
import CLTIMG3 from "../../assets/images/clients/3.png";
import CLTIMG4 from "../../assets/images/clients/4.png";
import CLTIMG5 from "../../assets/images/clients/5.png";
import CLTIMG6 from "../../assets/images/clients/1.png";
import CLTIMG7 from "../../assets/images/clients/2.png";
import CLTIMG8 from "../../assets/images/clients/3.png";
import CLTIMG9 from "../../assets/images/clients/4.png";
import CLTIMG10 from "../../assets/images/clients/5.png";



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
                    <a href="#">
                      <img src={CLTIMG1} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG2} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG3} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG4} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG5} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG6} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG7} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG8} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG9} alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#">
                      <img src={CLTIMG10} alt="" />
                    </a>
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
