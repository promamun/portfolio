import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import image from '../../assets/images/clients/1.png'

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
                            <OwlCarousel items={5} autoplay={true} loop={true} className="sponsors-carousel owl-carousel owl-theme">
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src={image} alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/2.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/3.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/4.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/5.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/1.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/2.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/3.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/4.png" alt=""/></a>
                                    </figure>
                                </li>
                                <li className="slide-item">
                                    <figure className="image-box">
                                        <a href="#"><img src="images/clients/5.png" alt=""/></a>
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
