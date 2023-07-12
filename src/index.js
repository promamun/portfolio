import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import PortfolioStandard from './components/portfolio-standard';
import PortfolioDetails from './components/portfolio-details';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import Layout from './components/layout'

class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/service" component={Service} />
							<Route path="/service-details" component={ServiceDetails} />
							<Route path="/portfolio-standard" component={PortfolioStandard} />
							<Route path="/portfolio-details" component={PortfolioDetails} />
							<Route path="/pricing" component={Pricing} />
							<Route path="/faq" component={Faq} />
							<Route path="/testimonial" component={Testimonial} />
							<Route path="/team" component={Team} />
							<Route path="/blog-grid" component={BlogGrid} />
							<Route path="/blog-list" component={BlogList} />
							<Route path="/blog-details" component={BlogDetails} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</Layout>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('bizkar'));
