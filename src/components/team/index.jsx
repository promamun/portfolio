import React, { Component } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import TeamMembers from "./TeamMembers";
import Manager from "./manager";
import { Helmet } from "react-helmet";

class Index extends Component {
  render() {
    const BgImage = {
      backgroundImage: `url(images/background/22.png)`,
    };
    return (
      <div>
        <Helmet>
          <title>Team Page</title>
        </Helmet>
        <BroadCamp name={"Team"} bgImageStyle={BgImage} />
        <Manager />
        <TeamMembers />
      </div>
    );
  }
}

export default Index;
