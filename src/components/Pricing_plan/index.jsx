import React from "react";
import PricingPlans from "./websiteCreation";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
import PriceCategoryTwo from "./smMarketing";
import PriceCategoryThree from "./PaidAdsMarketing";
import WordPress from "./wordpress/WordPress";
import Shopify from "./shopify/Shopify";
import Laravel from "./laravel/Laravel";

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
      />
      <PriceCategoryTwo packageTitle="Social Media Marketing" />
      <PriceCategoryThree packageTitle="Paid Ads Marketing" />
      <WordPress packageTitle="Word Press" />
      <Shopify packageTitle="Shopify" />
      <Laravel packageTitle="Laravel" />
    </div>
  );
}
