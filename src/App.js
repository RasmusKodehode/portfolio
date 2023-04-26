import "./App.css";
import {HashRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import { Component3 } from "./components/component3";
import {ScrollToTop} from "./components/scrollToTop";
import { LandingPage } from "./components/routes/landingPage";
import { ProjectPage1 } from "./components/routes/projectPage1";
import { ProjectPage2 } from "./components/routes/projectPage2";
import { ProjectPage3 } from "./components/routes/projectPage3";
import { ProjectPage4 } from "./components/routes/projectPage4";
import { ProjectPage5 } from "./components/routes/projectPage5";
import { ProjectPage6 } from "./components/routes/projectPage6";
import { AboutPage } from "./components/routes/aboutPage";
import {ErrorPage} from "./components/routes/404";
import linkedIn from "./components/images/linkedIn.svg";
import GitHub from "./components/images/GitHub.svg";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link-style-when-clicked" : "link-style"
              }
            >
              Hjem
            </NavLink>
            <NavLink
              to="/aboutPage"
              className={({ isActive }) =>
                isActive ? "link-style-when-clicked" : "link-style"
              }
            >
              Om
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/Project1" element={<ProjectPage1 />} />
            <Route path="/Project2" element={<ProjectPage2 />} />
            <Route path="/Project3" element={<ProjectPage3 />} />
            <Route path="/Project4" element={<ProjectPage4 />} />
            <Route path="/Project4/project4" element={<Component3 />} />
            <Route path="/Project5" element={<ProjectPage5 />} />
            <Route path="/Project6" element={<ProjectPage6 />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/rasmus-brekke-102838215/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <figure>
                <img src={linkedIn} alt="linkedIn" />
                <figcaption>LinkedIn</figcaption>
              </figure>
            </a>
            <a
              href="https://github.com/RasmusKodehode"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <figure>
                <img src={GitHub} alt="GitHub" />
                <figcaption>GitHub</figcaption>
              </figure>
            </a>
          </div>
          <p>&#169; Rasmus J. Brekke, 2023</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
