import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/home";
import Error404 from './components/404/NotFound'
import Projects from "./components/projects/projects";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />+
            <Route exact path="/projects" Component={Projects} />+
            {/* WHEN NO ROUTE FOUND */}
            <Route path="*" Component={Error404} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
