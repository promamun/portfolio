import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/home";
import Error404 from "./components/404/NotFound";
import Projects from "./components/projects/projects";
import About from "./components/aboutUs/about";
import Services from "./components/services";
import Contact from "./components/contact";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/team/index";
import Pricing from "./components/Pricing_plan/index";
import FreeConsultation from './components/FreeConsultation/Index'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/projects" Component={Projects} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/service" Component={Services} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/case-studies" Component={CaseStudies} />
            <Route exact path="/team" Component={Team} />
            <Route exact path="/pricing-plans" Component={Pricing} />
            <Route exact path="/free-consultation" Component={FreeConsultation} />
            {/* WHEN NO ROUTE FOUND */}
            <Route path="*" Component={Error404} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
