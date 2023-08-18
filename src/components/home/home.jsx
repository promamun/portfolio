import React, { Component } from "react";
import Slider from "./slider";
import AllService from "../services/AllService";
import Team from "../team/team";
import Progress from "./progress";
import Clients from "./clients";
import Traffics from "./Traffics";
import WhyChooseUs from "./WhyChooseUs";
import PricingPlans from "../Pricing_plan/websiteCreation";
import WebService from "../services/service";
import HappyClients from "./HappyClients";
import CaseStudies from "../CaseStudies/caseStudies";
import Testimonials from "./testimonials";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Slider />
        <Clients />
        <AllService />
        <Traffics />
        <WebService />
        <WhyChooseUs />
        <HappyClients />
        <PricingPlans />
        <Team />
        <Progress />
        <CaseStudies />
        <Testimonials />
      </div>
    );
  }
}

export default Home;
