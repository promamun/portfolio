import React from "react";
import PricingPlans from "./PricingPlans";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
export default function index() {
  const BgImage = {
    backgroundImage: `url(images/background/22.png)`
  };
  return (
    <div>
      <Helmet>
        <title>Pricing Plans</title>
      </Helmet>
      <BroadCamp name={"Pricing Plans"} bgImageStyle={BgImage} />
      <PricingPlans
        pricingTitle={"Our Pricing Plans"}
        packageTitle={"Website Creation"}
      ></PricingPlans>
      <PricingPlans packageTitle={"Social Media Marketing"}></PricingPlans>
    </div>
  );
}
