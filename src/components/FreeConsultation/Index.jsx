import React, {Component} from 'react';
import ComingSoon from "../ComingSoon/ComingSoon";
import CaseStudies from "../CaseStudies/caseStudies";
import {Helmet} from "react-helmet";

class Index extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Free Consultations
                    </title>
                </Helmet>
                <ComingSoon/>
                <CaseStudies/>
            </div>
        );
    }
}

export default Index;