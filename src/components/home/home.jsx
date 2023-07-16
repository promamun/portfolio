import React, {Component} from 'react';
import Slider from './slider';
import AllService from "./AllService";
import Team from "./team";
import Progress from "./progress";
import Clients from "./clients";
import Traffics from "./Traffics";
import WhyChooseUs from "./WhyChooseUs";
import PricingPlans from "../Pricing_plan/index";
import Solutions from "./Solutions";
import HappyClients from "./HappyClients";
import CaseStudies from "./caseStudies";
import Testimonials from "./testimonials";

class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Clients/>
                <Solutions/>
                <Traffics/>
                <AllService/>
                <WhyChooseUs/>
                <HappyClients/>
                <PricingPlans/>
                <Team/>
                <Progress/>
                <CaseStudies/>
                <Testimonials/>
            </div>
        );
    }
}

export default Home;