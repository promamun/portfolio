import React, {Component} from 'react';
import Slider from "./slider";
import Service from "./service";
import Testimonials from "./testimonials";
import CaseStudies from "./caseStudies";
import Progress from "./progress";
import Team from "./team";
import Clients from "./clients";
import AllService from "./AllService";
import Traffics from "./Traffics";
import WhyChooseUs from "./WhyChooseUs";
import PricingPlans from "./PricingPlans";
import Solutions from "./Solutions";
import HappyClients from "./HappyClients";

class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Clients/>
                <Solutions/>
                <HappyClients/>
                <Service/>
                <Traffics/>
                <AllService/>
                <WhyChooseUs/>
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