import React, {Component} from 'react';
import BroadCamp from "../broadCamp/BroadCamp";
import Team from "../home/team";
import TeamMain from './team'

class Index extends Component {
    render() {
        const BgImage={
            backgroundImage:`url(images/background/22.png)`
        }
        return (
            <div>
                <BroadCamp name={Team} bgImageStyle={BgImage}/>
                <TeamMain/>
                <Team/>
            </div>
        );
    }
}

export default Index;