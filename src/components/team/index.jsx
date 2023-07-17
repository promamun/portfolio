import React, {Component} from 'react';
import BroadCamp from "../broadCamp/BroadCamp";
import TeamMembers from "./TeamMembers";
import Manager from './manager';

class Index extends Component {
    render() {
        const BgImage={
            backgroundImage:`url(images/background/22.png)`
        }
        return (
            <div>
                <BroadCamp name={'Team'} bgImageStyle={BgImage}/>
                <Manager/>
                <TeamMembers/>
            </div>
        );
    }
}

export default Index;