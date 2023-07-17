import React, {Component} from 'react';
import BroadCamp from "../broadCamp/BroadCamp";
import CaseStudies from "./AllCaseStudies";

class Index extends Component {
    render() {
        const BgImage={
            backgroundImage:`url(images/background/22.png)`
        };
        return (
            <div>
                <BroadCamp name={'Case-Studies'} bgImageStyle={BgImage}/>
                <CaseStudies/>
            </div>
        );
    }
}

export default Index;