import React from "react";
import PricingPlans from "./PricingPlans";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
import PriceCategoryTwo from "./PriceCategoryTwo";
import PriceCategoryThree from "./PriceCategoryThree";
export default function index() {
  const BgImage = {
    backgroundImage: `url(images/background/22.png)`
  };
  return (
    <div>
      <Helmet>
        <title>Pricing Plans</title>
      </Helmet>
      <BroadCamp name="Pricing Plans" bgImageStyle={BgImage} />
      <PricingPlans
        pricingTitle="Our Pricing Plans"
        packageTitle="Website Creation"
      ></PricingPlans>
      <PriceCategoryTwo packageTitle="Social Media Marketing"></PriceCategoryTwo>
      <PriceCategoryThree packageTitle="Paid Ads Marketing"></PriceCategoryThree>
    </div>
  );
}
