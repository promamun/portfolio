import React, {Component} from 'react';
import ComingSoon from "../ComingSoon/ComingSoon";
import CaseStudies from "../CaseStudies/caseStudies";

class Index extends Component {
    render() {
        return (
            <div>
                <ComingSoon/>
                <CaseStudies/>
            </div>
        );
    }
}

export default Index;