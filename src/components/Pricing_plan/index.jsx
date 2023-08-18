import React from "react";
import PricingPlans from "./websiteCreation";
import BroadCamp from "../broadCamp/BroadCamp";
import { Helmet } from "react-helmet";
import CMS from "./websiteCMSCreation";
import FBMarketing from "./smMarketing";
import GoogleAds from "./GoogleAds";
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
      <PricingPlans pricingTitle="Our Pricing Plans" packageTitle="React Web App Development (MERN)"/>
        <CMS packageTitle="WordPress Web Application Development(CMS)"/>
        <Shopify packageTitle="Shopify Store Design(CMS)"/>
        <Laravel packageTitle="Laravel Web Application Development(PHP)" />
      <FBMarketing packageTitle="Facebook Marketing"/>
      <GoogleAds packageTitle="Google Ads Marketing"/>
    </div>
  );
}
