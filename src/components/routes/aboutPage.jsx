import { aboutMeText, aboutMeText2 } from "../text/textStrings";
import javascript from "../images/javascript.jpg";
import F1 from "../images/F1.jpg";

export function AboutPage() {
  return (
    <>
      <div className="about-section">
        <h2 className="title-about">Alt du trenger å vite om meg:</h2>
        <p className="indented-text">{aboutMeText}</p>
        <p className="indented-text">{aboutMeText2}</p>
      </div>
      <div className="education-section">
        <h2 className="title-about">Utdanning</h2>
        <p className="indented-text">
          Her finner du de viktigste delene av utdanningen min:
        </p>
        <div className="project-showcase">
          <div className="education">
            <h4>Kodehode</h4>
            <p>2022-</p>
            <p>
              Kurs for å bli frontend-utvikler, inneholdt alle de typiske
              språkene og rammeverkene fra HTML til React, i tillegg til Figma
              og litt backend server og databaser.
            </p>
          </div>
          <div className="education">
            <h4>Mastergrad i eksperimentell partikkelfysikk</h4>
            <p>2019-2021</p>
            <p>
              Inneholdt flere fag om subatomær fysikk, i tillegg til
              databehandling med Linux og programmering i C++
            </p>
          </div>
          <div className="education">
            <h4>Bachelorgrad i fysikk</h4>
            <p>2016-2019</p>
            <p>
              Inneholdt fag om de fleste felt innen fysikk, i tillegg til
              kalkulus, lineær algebra, og multivariabel kalkulus. Inneholdt
              også programmering i Python
            </p>
          </div>
        </div>
        <div className="project-showcase">
          <div className="education">
            <h4>Videregående skole</h4>
            <p>2013-2016</p>
            <p>
              Inneholdt blant annet Matte R1+R2, Fysikk 1+2, og Teknologi og
              forskningsfag
            </p>
          </div>
        </div>
      </div>
      <div className="experience-section">
        <h2 className="title-about">Erfaring</h2>
        <p className="indented-text">
          Her er noen andre erfaringer jeg har hatt:
        </p>
        <div className="project-showcase">
          <div className="education">
            <h4>Butikkmedarbeider</h4>
            <p>2017-</p>
            <p>
              Oppgaver inneholdt kassearbeid, påfyll av varer, og ansvar for
              generell drift og stenging
            </p>
          </div>
          <div className="education">
            <h4>Taekwon-do</h4>
            <p>2007-2021</p>
            <p>Trente i Fana Taekwon-do klubb, fikk svart belte i 2019</p>
          </div>
          <div className="education">
            <h4>Barneinstruktør</h4>
            <p>2018-2020</p>
            <p>
              Var intruktør for barneparti, organiserte og gjennomførte
              treningene, og sørget for at pensum ble gjennomgått
            </p>
          </div>
        </div>
      </div>
      <div className="img-collection">
        <figure className="about-image-figure1">
          <img src={javascript} alt="coding" className="about-image" />
          <figcaption><em>Hvis jeg ikke ser på dette...</em></figcaption>
        </figure>
        <figure className="about-image-figure2">
          <img src={F1} alt="Formula 1" className="about-image" />
          <figcaption><em>...ser jeg sannsynligvis på dette</em></figcaption>
        </figure>
      </div>
    </>
  );
}
