import React, {Component} from 'react';
import Slider from "./slider";
import Service from "./service";
import Testimonials from "./testimonials";
import CaseStudies from "./caseStudies";
import Progress from "./progress";
import Team from "./team";
import Clients from "./clients";
import AllService from "./AllService";

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