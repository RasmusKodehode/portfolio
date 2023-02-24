import "./App.css";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import { Component3 } from "./components/component3";
import { LandingPage } from "./components/routes/landingPage";
import { ProjectPage1 } from "./components/routes/projectPage1";
import { ProjectPage2 } from "./components/routes/projectPage2";
import { ProjectPage3 } from "./components/routes/projectPage3";
import { ProjectPage4 } from "./components/routes/projectPage4";
import { ProjectPage5 } from "./components/routes/projectPage5";
import { AboutPage } from "./components/routes/aboutPage";
import {ErrorPage} from "./components/routes/404";
import linkedIn from "./components/images/linkedIn.svg";
import GitHub from "./components/images/GitHub.svg";

const linkStyle = {
  textDecoration: "none",
  color: "black",
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" style={linkStyle}>Hjem</Link>
            <Link to="/aboutPage" style={linkStyle}>Om</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/Project1" element={<ProjectPage1 />} />
            <Route path="/Project2" element={<Component2 />} />
            <Route path="/Project3" element={<Component3 />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/rasmus-brekke-102838215/" target="_blank" className="footer-icon"><figure><img src={linkedIn} alt="linkedIn" /><figcaption>LinkedIn</figcaption></figure></a>
            <a href="https://github.com/RasmusKodehode" target="_blank" className="footer-icon"><figure><img src={GitHub} alt="GitHub" /><figcaption>GitHub</figcaption></figure></a>
          </div>
          <p>Copyright Rasmus J. Brekke, 2023</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
