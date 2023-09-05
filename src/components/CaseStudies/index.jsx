import React, { Component } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import CaseStudies from "./AllCaseStudies";
import { Helmet } from "react-helmet";

class Index extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Case Studies</title>
        </Helmet>
        <BroadCamp name={"Case-Studies"}/>
        <CaseStudies />
      </div>
    );
  }
}

export default Index;
