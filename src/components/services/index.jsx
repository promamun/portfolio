import React, {Component} from 'react';
import Solutions from "../home/Solutions";
import AllService from "../home/AllService";
import BroadCamp from '../broadCamp/BroadCamp';

class Index extends Component {
    render() {
        const BgImage = {
            backgroundImage: `url(images/background/22.png)`
        };
        return (
            <div>
                <BroadCamp name="Service" bgImageStyle={BgImage} />
                <Solutions/>
                <AllService/>
            </div>
        );
    }
}

export default Index;