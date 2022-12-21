import { Project } from "../project";
import {project1Dooblydoo, project2Dooblydoo, project3Dooblydoo, project4Dooblydoo, project5Dooblydoo, project6Dooblydoo} from "../text/textStrings"

export function AboutPage() {
    return (
      <>
        <h2>Everything you need to know about me:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis
          voluptas tenetur voluptates itaque non, dolor eveniet cumque,
          perferendis laborum nulla qui dicta, iusto nesciunt quisquam
          repellendus minima sint fugiat! Velit rerum assumenda tempore eos
          accusamus architecto, voluptas blanditiis doloremque modi, alias qui
          quaerat et laudantium pariatur tempora, autem itaque sequi in vero
          error maxime quidem? Nisi optio inventore vel. Quod voluptas possimus
          voluptatem! Deserunt laudantium quo temporibus adipisci cum veritatis
          ab deleniti voluptatem ducimus. Earum ipsum possimus minima dolore
          suscipit accusantium? Tempore explicabo nulla animi doloremque,
          debitis repellendus! Facilis! Nisi consequatur laudantium odit iste
          eaque, incidunt blanditiis esse? Dignissimos, voluptatem quisquam.
          Cumque, esse dolore? Quasi nihil reprehenderit omnis beatae rerum
          neque voluptatibus, exercitationem quibusdam, quia cum ab tenetur eos?
          Omnis necessitatibus dolore cum harum distinctio obcaecati mollitia
          sed doloribus, modi culpa magnam a. Beatae veritatis maxime officiis
          hic deserunt at commodi, ad quos, aspernatur, pariatur consectetur sit
          accusantium eaque!
        </p>
        <br />
        <br />
        <br />
        <h2>Here are some of the projects I have done:</h2>
        <div className="project-showcase">
          <Project title="Title1" date="1999" dooblydoo={project1Dooblydoo} />
          <Project title="Title2" date="2001" dooblydoo={project2Dooblydoo} />
        </div>
        <div className="project-showcase">
          <Project title="Title3" date="2005" dooblydoo={project3Dooblydoo} />
          <Project title="Title4" date="2009" dooblydoo={project4Dooblydoo} />
        </div>
        <div className="project-showcase">
          <Project title="Title5" date="2012" dooblydoo={project5Dooblydoo} />
          <Project title="Title6" date="2016" dooblydoo={project6Dooblydoo} />
        </div>
      </>
    );
}