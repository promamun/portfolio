import React, {Component} from 'react';
import Solutions from "../home/Solutions";
import AllService from "../home/AllService";
import Analytics from "./Analytics";
import ContactFrom from "../contact/ContactFrom";
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
                <Analytics/>
                <ContactFrom/>
            </div>
        );
    }
}

export default Index;