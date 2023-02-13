import {Outlet} from "react-router-dom";

import {Project} from "../project";
import {Project2} from "../project2";
import {ProjectAlt} from "../projectAlt";
import {ProjectAlt2} from "../projectAlt2";
import {project1Dooblydoo, project2Dooblydoo, project3Dooblydoo, project4Dooblydoo, project5Dooblydoo, project6Dooblydoo, aboutMeText, aboutMeText2} from "../text/textStrings"

export function AboutPage() {
    return (
      <div className="page">
        <h2 className="title-about">Alt du trenger å vite om meg:</h2>
        <p className="text-about">{aboutMeText}</p>
        <p className="text-about">{aboutMeText2}</p>
        <br />
        <br />
        <br />
        <h2 className="title-about">
          Her er de viktigste delene av utdanningen min:
        </h2>
        <div className="project-showcase">
          <div className="project-showcase-left">
            <div className="project">
              <h4>Kodehode</h4>
              <p>2022-</p>
              <p>
                Kurs for å bli frontend-utvikler, inneholdt alle de typiske
                språkene og rammeverkene fra HTML til React, i tillegg til Figma
                og litt backend server og databaser.
              </p>
            </div>
            <div className="project" id="below">
              <h4>Bachelorgrad i fysikk</h4>
              <p>2016-2019</p>
              <p>
                Inneholdt fag om de fleste felt innen fysikk, i tillegg til
                kalkulus, lineær algebra, og multivariabel kalkulus. Inneholdt
                også programmering i Python
              </p>
            </div>
          </div>
          <div className="project-showcase-right">
            <div className="project-right" id="above">
              <h4>Mastergrad i eksperimentell partikkelfysikk</h4>
              <p>2019-2021</p>
              <p>
                Inneholdt flere fag om subatomær fysikk, i tillegg til
                databehandling med Linux og programmering i C++
              </p>
            </div>
            <div className="project-right">
              <h4>Videregående skole</h4>
              <p>2013-2016</p>
              <p>
                Inneholdt blant annet Matte R1+R2, Fysikk 1+2, og Teknologi og
                forskningsfag
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="title-about">Her er noen av prosjektene mine:</h2>
        <div className="project-showcase">
          <div className="project-showcase-left">
            <ProjectAlt
              title="Masteroppgave"
              date="2021"
              dooblydoo={project1Dooblydoo}
              link="https://github.com/RasmusKodehode/Master-thesis-code"
              id="one"
            />
            <ProjectAlt
              title="Juleprosjekt"
              date="2023"
              dooblydoo={project3Dooblydoo}
              link="https://rasmuskodehode.github.io/christmas-project-2022/"
              id="three"
            />
            <ProjectAlt
              title="Backend server"
              date="2023"
              dooblydoo={project5Dooblydoo}
              link="https://github.com/RasmusKodehode/to-do-list-server"
              id="five"
            />
          </div>
          <div className="project-showcase-right">
            <ProjectAlt2
              title="Solsystemet"
              date="2022"
              dooblydoo={project2Dooblydoo}
              link="https://github.com/MadsKodehode/GruppeProjektSolar"
              id="two"
            />
            <Project2
              title="API project"
              date="2022"
              dooblydoo={project4Dooblydoo}
              link="/AboutPage/Project3"
              id="four"
            />
            <Project2
              title="Title6"
              date="2023"
              dooblydoo={project6Dooblydoo}
              link="/AboutPage/Project2"
              id="six"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="title-about">
          Her er noen andre erfaringer jeg har hatt:
        </h2>
        <div className="project-showcase">
          <div className="project-showcase-left">
            <div className="project">
              <h4>Butikkmedarbeider</h4>
              <p>2017-</p>
              <p>
                Oppgaver inneholdt kassearbeid, påfyll av varer, og ansvar for
                generell drift og stenging
              </p>
            </div>
            <div className="project" id="penultimate-project-mobile">
              <h4>Barneinstruktør</h4>
              <p>2018-2020</p>
              <p>
                Var intruktør for barneparti, organiserte og gjennomførte
                treningene, og sørget for at pensum ble gjennomgått
              </p>
            </div>
          </div>
          <div className="project-showcase-right" id="last-project-mobile">
            <div className="project-right" id="last-project">
              <h4>Taekwon-do</h4>
              <p>2007-2021</p>
              <p>Trente i Fana Taekwon-do klubb, fikk svart belte i 2019</p>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
}