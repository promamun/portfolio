import React, { Component } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import ContactFrom from "./ContactFrom";
import Location from "./location";
import { Helmet } from "react-helmet";

class Index extends Component {
  render() {
      const BgImage={
          backgroundImage:`url(/images/background/freeConsultation.png)`
      }
    return (
      <div>
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <BroadCamp name={"Contact US"} bgImageStyle={BgImage} />
        <ContactFrom />
        <Location />
      </div>
    );
  }
}

export default Index;
