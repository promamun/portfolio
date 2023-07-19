import React, { Component } from "react";
import Solutions from "../home/Solutions";
import AllService from "./service";
import Analytics from "./Analytics";
import ContactFrom from "../contact/ContactFrom";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";

class Index extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`,
    };
    return (
      <div>
        <Helmet>
          <title>Service</title>
        </Helmet>
        <BroadCamp name="Service" bgImageStyle={BgImage} />
        <Solutions />
        <AllService />
        <Analytics />
        <ContactFrom />
      </div>
    );
  }
}

export default Index;
