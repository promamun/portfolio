import React, {Component} from 'react';
import Banner from './section-components/banner-v3';
import Service from './section-components/service-v2';
import AboutV3 from './section-components/about-v3';
import AboutV4 from './section-components/about-v4';
import Funfact from './section-components/funfact-v3';
import Video from './section-components/video-v2';
import AboutV5 from './section-components/about-v5';
import Testimonial from './section-components/testimonial-v3';
import Faq from './section-components/faq';
import Pricing from './section-components/pricing-v2';
import BlogPost from './section-components/blog-post-v2';
import Cta from './section-components/cta-v3';
import SocialCounter from './section-components/social-counter';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Service />
                <AboutV3 />
                <AboutV4 />
                <Funfact />
                <Video />
                <AboutV5 />
                <Testimonial />
                <Faq />
                <Pricing />
                <BlogPost />
                <Cta />
                <SocialCounter />
            </div>
        );
    }
}

export default Home;