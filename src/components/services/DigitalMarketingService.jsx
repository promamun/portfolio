import React from 'react'

export default function DigitalMarketingService() {
    const BgImg = {
        backgroundImage:`url(images/background/17.png)`,
    }
    const Style = {
        visibility: 'visible',
        animationDuration: '1500ms',
    animationDelay: '0ms',
    animationName: 'fadeInLeft',
    }
  return (
    <>
        <section
            className="services-section style-three"
            style={BgImg}
        >
            <div className="upper-box">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h6 className="subtitle">Best Service Provider</h6>
                        <h2>
                            Our digital marketing solution <br/>
                            services for all
                        </h2>
                    </div>
                </div>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="service-block-six wow fadeInDown"
                            data-wow-delay="100ms"
                            data-wow-duration="100ms"
                        >
                            <div className="inner-box">
                                <div className="lower-content">
                                    <h4>
                                        <a href="service-detail.html"
                                        >Social Media <br/>
                                            Marketing</a
                                        >
                                    </h4>
                                    <p>
                                        Eorem ipsum dolorsit ameta odiut areaperspicis under
                                        water.
                                    </p>
                                </div>
                                <div className="image-box">
                                    <figure>
                                        <img src="images/services/16.png" alt="Service Image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="service-block-six wow fadeInDown"
                            data-wow-delay="300ms"
                            data-wow-duration="300ms"
                        >
                            <div className="inner-box">
                                <div className="lower-content">
                                    <h4>
                                        <a href="service-detail.html"
                                        >Adanced Media <br/>
                                            Analytics</a
                                        >
                                    </h4>
                                    <p>
                                        Eorem ipsum dolorsit ameta odiut areaperspicis under
                                        water.
                                    </p>
                                </div>
                                <div className="image-box">
                                    <figure>
                                        <img src="images/services/17.png" alt="Service Image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="service-block-six wow fadeInDown"
                            data-wow-delay="500ms"
                            data-wow-duration="500ms"
                        >
                            <div className="inner-box">
                                <div className="lower-content">
                                    <h4>
                                        <a href="service-detail.html"
                                        >Date Saveing <br/>
                                            Security</a
                                        >
                                    </h4>
                                    <p>
                                        Eorem ipsum dolorsit ameta odiut areaperspicis under
                                        water.
                                    </p>
                                </div>
                                <div className="image-box">
                                    <figure>
                                        <img src="images/services/18.png" alt="Service Image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                            className="service-block-six wow fadeInDown"
                            data-wow-delay="700ms"
                            data-wow-duration="700ms"
                        >
                            <div className="inner-box">
                                <div className="lower-content">
                                    <h4>
                                        <a href="service-detail.html"
                                        >Organic Long <br/>
                                            Term SEO</a
                                        >
                                    </h4>
                                    <p>
                                        Eorem ipsum dolorsit ameta odiut areaperspicis under
                                        water.
                                    </p>
                                </div>
                                <div className="image-box">
                                    <figure>
                                        <img src="images/services/19.png" alt="Service Image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}