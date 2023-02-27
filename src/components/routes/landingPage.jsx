import Profilbilde from "../images/Profilbilde.jpg";
import bergen from "../images/bergen.jpg";
import rain from "../images/rain.jpg";
import {Outlet} from "react-router-dom";

import {Project} from "../project";
import {Project2} from "../project2";
import {ProjectAlt} from "../projectAlt";
import {ProjectAlt2} from "../projectAlt2";
import {project1Dooblydoo, project2Dooblydoo, project3Dooblydoo, project4Dooblydoo, project5Dooblydoo, project6Dooblydoo} from "../text/textStrings"

export function LandingPage() {
    return (
      <>
        <div className="profile">
          <div className="ProfileInfo">
            <div className="name-title">
              <h2 id="landing-name">Rasmus J. Brekke</h2>
              <h4 id="landing-title">Frontend Utvikler</h4>
            </div>
            <p id="landing-pitch">
              Hei, velkommen til hjemmesiden min! Jeg er en frontend utvikler
              fra Bergen. Ta en titt rundt for å lære mer om meg og det jeg har
              gjort!
            </p>
          </div>
          <div className="ProfileImg">
            <img src={Profilbilde} alt="Profilbilde" id="profile-image" />
          </div>
        </div>
        <div className="img-collection">
          <figure className="image-figure1">
            <img className="image" src={bergen} alt="on a sunny day" />
            <figcaption>
              <em>Noen ganger ser det sånn ut...</em>
            </figcaption>
          </figure>
          <figure className="image-figure2">
            <img className="image" src={rain} alt="on a rainy day" />
            <figcaption>
              <em>...men som oftest ser det sånn ut.</em>
            </figcaption>
          </figure>
        </div>
        <div className="project-section">
          <h2 className="title-about">Prosjekter</h2>
          <p className="indented-text">
            Her finner du noen av prosjektene mine:
          </p>
          <div className="project-showcase">
            <Project
              title="Masteroppgave"
              date="2021"
              dooblydoo={project1Dooblydoo}
              link="/Project1"
              id="one"
            />
            <ProjectAlt2
              title="Solsystemet"
              date="2022"
              dooblydoo={project2Dooblydoo}
              link="https://github.com/MadsKodehode/GruppeProjektSolar"
              id="two"
            />
            <ProjectAlt
              title="Juleprosjekt"
              date="2023"
              dooblydoo={project3Dooblydoo}
              link="https://rasmuskodehode.github.io/christmas-project-2022/"
              id="three"
            />
          </div>
          <div className="project-showcase">
            <Project2
              title="API project"
              date="2022"
              dooblydoo={project4Dooblydoo}
              link="/AboutPage/Project3"
              id="four"
            />
            <ProjectAlt
              title="Backend server"
              date="2023"
              dooblydoo={project5Dooblydoo}
              link="https://github.com/RasmusKodehode/to-do-list-server"
              id="five"
            />
          </div>
        </div>
        <Outlet />
      </>
    );
}