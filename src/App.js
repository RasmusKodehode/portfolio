import "./App.css";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import { Component3 } from "./components/component3";
import { LandingPage } from "./components/routes/landingPage";
import { ContactPage } from "./components/routes/contactPage";
import { AboutPage } from "./components/routes/aboutPage";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutPage">About</Link>
            <Link to="/ContactPage">Contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
