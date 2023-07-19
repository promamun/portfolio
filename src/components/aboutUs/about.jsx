import React, { Component } from "react";
import Traffics from "../home/Traffics";
import HappyClients from "../home/HappyClients";
import BroadCamp from "../broadCamp/BroadCamp";
import WhyChooseUs from "../home/WhyChooseUs";
import Testimonials from "../home/testimonials";

class About extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`
    };
    return (
      <div>
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
