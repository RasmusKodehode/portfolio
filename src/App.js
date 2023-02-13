import "./App.css";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import { Component3 } from "./components/component3";
import { LandingPage } from "./components/routes/landingPage";
import { ContactPage } from "./components/routes/contactPage";
import { AboutPage } from "./components/routes/aboutPage";
import {ErrorPage} from "./components/routes/404";

const linkStyle = {
  textDecoration: "none"
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" style={linkStyle}>Hjem</Link>
            <Link to="/aboutPage" style={linkStyle}>Om</Link>
            <Link to="/ContactPage" style={linkStyle}>Kontakt</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/AboutPage/Project1" element={<Component1 />} />
              <Route path="/AboutPage/Project2" element={<Component2 />} />
              <Route path="/AboutPage/Project3" element={<Component3 />} />              
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
