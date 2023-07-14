import React, {Component} from 'react';
import BroadCamp from "../broadCamp/BroadCamp";
import ContactFrom from "./ContactFrom";
import Location from "./location";

class Index extends Component {
    render() {
        const BgImage = {
            backgroundImage:`url(images/background/22.png)`
        };
        return (
            <div>
                <BroadCamp name={'Contact US'} bgImageStyle={BgImage}/>
                <ContactFrom/>
                <Location/>
            </div>
        );
    }
}

export default Index;