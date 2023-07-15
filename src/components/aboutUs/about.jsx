import React, { Component } from "react";
import Traffics from "../home/Traffics";
import HappyClients from "../home/HappyClients";
import BroadCamp from "../broadCamp/BroadCamp";

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
      </div>
    );
  }
}

export default About;
