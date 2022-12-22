import {Outlet, Link} from "react-router-dom";

import { Project } from "../project";
import {project1Dooblydoo, project2Dooblydoo, project3Dooblydoo, project4Dooblydoo, project5Dooblydoo, project6Dooblydoo, aboutMeText} from "../text/textStrings"

export function AboutPage() {
    return (
      <>
        <h2>Everything you need to know about me:</h2>
        <p>{aboutMeText}</p>
        <br />
        <br />
        <br />
        <h2>Here are some of the projects I have done:</h2>
        <div className="project-showcase">
          <Project title="Title1" date="1999" dooblydoo={project1Dooblydoo}><Link to="Project1">link1</Link></Project>
          <Project title="Title2" date="2001" dooblydoo={project2Dooblydoo}><Link to="Project2">link2</Link></Project>
        </div>
        <div className="project-showcase">
          <Project title="Title3" date="2005" dooblydoo={project3Dooblydoo}><Link to="Project3">link3</Link></Project>
          <Project title="Title4" date="2009" dooblydoo={project4Dooblydoo} />
        </div>
        <div className="project-showcase">
          <Project title="Title5" date="2012" dooblydoo={project5Dooblydoo} />
          <Project title="Title6" date="2016" dooblydoo={project6Dooblydoo} />
        </div>
        <Outlet />
      </>
    );
}