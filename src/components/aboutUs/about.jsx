import React, { Component } from "react";
import Traffics from "../home/Traffics";
import HappyClients from "../home/HappyClients";
import BroadCamp from "../broadCamp/BroadCamp";
import WhyChooseUs from "../home/WhyChooseUs";
import Testimonials from "../home/testimonials";
import { Helmet } from "react-helmet";

class About extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`,
    };
    return (
      <div>
        <Helmet>
          <title>About Page</title>
        </Helmet>
        <BroadCamp name="About Us" bgImageStyle={BgImage} />
        <Traffics />
        <HappyClients />
          <WhyChooseUs/>
          <Testimonials/>
      </div>
    );
  }
}

export default About;
