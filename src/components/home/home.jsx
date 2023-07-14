import React, {Component} from 'react';
import Slider from './slider';
import Service from "./service";
import AllService from "./AllService";
import Team from "./team";
import Progress from "./progress";
import Clients from "./clients";
import CaseStudies from "./caseStudies";
import Testimonials from "./testimonials";

class Home extends Component {
    render() {
        return (
            <div>
            <Slider/>
            <Service/>
            <AllService/>
            <Team/>
            <Progress/>
            <Clients/>
            <CaseStudies/>
            <Testimonials/>
            </div>
        );
    }
}

export default Home;