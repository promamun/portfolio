import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import image from '../../assets/images/clients/1.png'

class Clients extends Component {
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
                <section className="clients-section">
                    <div className="auto-container">
                        <div className="sponsors-outer">
                            <OwlCarousel options={options} className="sponsors-carousel owl-carousel owl-theme">
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
                            <ul className="sponsors-carousel owl-carousel owl-theme">

                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Clients;