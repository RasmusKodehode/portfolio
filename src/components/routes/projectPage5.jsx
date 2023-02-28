export function ProjectPage5() {
  return (
    <div className="project-page">
      <h1 className="indented-text">Backend Server</h1>
      <h3 className="indented-text">Periode: 2023</h3>
      <h3 className="indented-text">Språk/rammeverk: NodeJS, ExpressJS</h3>
      <p className="indented-text">
        En CRUD server med en oppgaveliste, hvor du kan se oppgavene, opprette en ny, redigere og slette oppgaver. Oppgavene lagres som JSON objekter i et array, og kommandoer gjøres via HTTP-requests.
      </p>
      <p className="indented-text">
        Du kan se prosjektet <a href="https://github.com/RasmusKodehode/to-do-list-server">her</a>.
      </p>
    </div>
  );
}
