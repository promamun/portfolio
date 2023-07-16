import React from "react";
import PricingPlans from "./PricingPlans";
import BroadCamp from "../broadCamp/BroadCamp";

export default function index() {
  const BgImage = {
    backgroundImage: `url(images/background/22.png)`
  };
  return (
    <div>
      <BroadCamp name={"Pricing Plans"} bgImageStyle={BgImage} />
      <PricingPlans
        pricingTitle={"Our Pricing Plans"}
        packageTitle={"Website Creation"}
      />
    </div>
  );
}
