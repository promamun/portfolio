import React from 'react'
import BroadCamp from '../broadCamp/BroadCamp'
import {Helmet} from "react-helmet";

export default function ServiceDetails() {
  const BgImage = {
    backgroundImage: `url(/images/background/24.png)`
  };
  return (
    <>
      <Helmet>
        <title>Service</title>
      </Helmet>
      <BroadCamp name="Service" bgImageStyle={BgImage} />
      <div className="sidebar-page-container">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-side col-lg-12 col-md-12 col-sm-12">
                <div className="service-detail">
                  <div className="inner-box">
                    <div
                      className="image-box parallax-scene-2 wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="0ms"
                    >
                      <div className="image" data-depth="0.30">
                        <img src="/images/services/20.png" alt="" />
                      </div>
                    </div>
                    <h2>Financial Marketing</h2>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed
                        perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                      </p>
                      <div className="two-column row">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <img src="/images/services/21.jpg" alt="" />
                          </div>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <h4>Important Facts</h4>
                          <ul>
                            <li>The Problem</li>
                            <li>The Solution</li>
                            <li>The Skills</li>
                            <li>Statistics</li>
                            <li>Mathematics</li>
                            <li>SEO</li>
                            <li>Vision & Values</li>
                            <li>Leadership</li>
                            <li>Sustainability</li>
                          </ul>
                        </div>
                      </div>
                      <h4>Handover & Support</h4>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                      </p>
                      <ul className="single-list">
                        <li>Various Analysis Options</li>
                        <li>
                          Page Load Details (time, size, number of requests)
                        </li>
                        <li>Waterfall, Video and Report History</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
