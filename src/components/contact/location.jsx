import React, {Component} from 'react';

class Location extends Component {
    render() {
        return (
            <div>
                <section className="contact-page-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="contact-column col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-info">
                                    <div className="row">
                                        <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="flaticon flaticon-stopwatch"/>
                                                </div>
                                                <div className="text-box">
                                                    <h4>Time</h4>
                                                    <p>10:00am to 6:00pm <br/>Sunday Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="flaticon flaticon-pin"/>
                                                </div>
                                                <div className="text-box">
                                                    <h4>Location</h4>
                                                    <p>13005 Greenville Avenue California, TX 70240</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="flaticon flaticon-call"/>
                                                </div>
                                                <div className="text-box">
                                                    <h4>Email / Phone</h4>
                                                    <p>+1 (800) 581 3645 11</p>
                                                    <p><a href="#">mail@example.com</a></p>
                                                </div>
                                            </div>
                                        </div>
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

export default Location;