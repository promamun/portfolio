import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import MainBanner18 from '../../assets/images/main-banner/18.png'

class Slider extends Component {
    render() {
        const MainBanner = {
            backgroundImage: `url('images/main-banner/4.jpg')`,
        };
        const BannerIcon = {
            backgroundImage: `url(images/main-banner/banner-icon.png)`
        };
        const CrossIcon = {
            backgroundImage: `url(images/main-banner/cross-icon.png)`
        };
        const BannerIcon1 = {
            backgroundImage: `url(images/main-banner/banner-icon-1.png)`
        };
        const BannerIcon2 = {
            backgroundImage: `url(images/main-banner/banner-icon-2.png)`
        };const BannerIcon3 = {
            backgroundImage: `url(images/main-banner/banner-icon-3.png)`
        };const BannerIcon4 = {
            backgroundImage: `url(images/main-banner/banner-icon-4.png)`
        };const BannerIcon5 = {
            backgroundImage: `url(images/main-banner/banner-icon-5.png)`
        };const BannerIcon6 = {
            backgroundImage: `url(images/main-banner/banner-icon-6.png)`
        };const BannerIcon7 = {
            backgroundImage: `url(images/main-banner/banner-icon-7.png)`
        };const BannerIcon8 = {
            backgroundImage: `url(images/main-banner/banner-icon-8.png)`
        };const BannerIcon9 = {
            backgroundImage: `url(images/main-banner/banner-icon-9.png)`
        };const BannerIcon10 = {
            backgroundImage: `url(images/main-banner/banner-icon-10.png)`
        };
        return (
            <>
                <section className="banner-section banner-slider" style={MainBanner}>
                    <div className="pattern-layer-one" style={CrossIcon}/>
                    <div
                        className="pattern-layer-two"
                        style={BannerIcon5}
                    />
                    <div
                        className="pattern-layer-three"
                        style={BannerIcon6}
                    />
                    <div
                        className="pattern-layer-four"
                        style={BannerIcon}
                    />
                    <div
                        className="pattern-layer-five"
                        style={BannerIcon1}
                    />
                    <div
                        className="pattern-layer-six"
                        style={BannerIcon2}
                    />
                    <div
                        className="pattern-layer-seven"
                        style={BannerIcon8}
                    />
                    <div
                        className="pattern-layer-eight"
                        style={BannerIcon7}
                    />
                    <div
                        className="pattern-layer-nine"
                        style={BannerIcon10}
                    />
                    <div
                        className="pattern-layer-ten"
                        style={BannerIcon9}
                    />
                    <div
                        className="pattern-layer-eleven"
                        style={BannerIcon3}
                    />
                    <div
                        className="pattern-layer-tweleve"
                        style={BannerIcon4}
                    />
                    <OwlCarousel autoplay={true} items={1} loop={true} nav={true} className="main-slider-carousel owl-carousel owl-theme" >
                        <div className="slide">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="video-link">
                                                <a
                                                    href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                                                    data-fancybox="gallery"
                                                    data-caption=""
                                                ><span className="icon fa fa-play" aria-hidden="true"/><i className="ripple"/></a>
                                            </div>
                                            <h1>
                                                We bring you <br/>
                                                new customers
                                            </h1>
                                            <p>
                                                We build effective strategies to help you reach customers
                                                <br/>
                                                and prospects across the entire web.
                                            </p>
                                            <div className="btns-box">
                                                <a href="about.html" className="theme-btn btn-style-one"
                                                ><span className="txt">Get Started</span></a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column parallax-scene-2">
                                            <div className="image" data-depth="0.30">
                                                <img src={MainBanner18} alt="Main Banner"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="video-link">
                                                <a
                                                    href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                                                    data-fancybox="gallery"
                                                    data-caption=""
                                                ><span className="icon fa fa-play" aria-hidden="true"/><i className="ripple"/></a>
                                            </div>
                                            <h1>
                                                We bring you <br/>
                                                new customers
                                            </h1>
                                            <p>
                                                We build effective strategies to help you reach customers
                                                <br/>
                                                and prospects across the entire web.
                                            </p>
                                            <div className="btns-box">
                                                <a href="about.html" className="theme-btn btn-style-one"
                                                ><span className="txt">Get Started</span></a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column parallax-scene-2">
                                            <div className="image" data-depth="0.30">
                                                <img src={MainBanner18} alt="Main Banner"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="video-link">
                                                <a
                                                    href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                                                    data-fancybox="gallery"
                                                    data-caption=""
                                                ><span className="icon fa fa-play" aria-hidden="true"/><i className="ripple"/></a>
                                            </div>
                                            <h1>
                                                We bring you <br/>
                                                new customers
                                            </h1>
                                            <p>
                                                We build effective strategies to help you reach customers
                                                <br/>
                                                and prospects across the entire web.
                                            </p>
                                            <div className="btns-box">
                                                <a href="about.html" className="theme-btn btn-style-one"
                                                ><span className="txt">Get Started</span></a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column parallax-scene-2">
                                            <div className="image" data-depth="0.30">
                                                <img src={MainBanner18} alt="Main Banner"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
            </>
        );
    }
}

export default Slider;