export function ProjectPage5() {
  return (
    <div className="main-page">
      <div className="project-page">
        <h1 className="indented-text">Backend Server</h1>
        <h3 className="indented-text">Periode: 2023</h3>
        <h3 className="indented-text">Språk/rammeverk: NodeJS, ExpressJS</h3>
        <p className="indented-text">
          En CRUD server med en oppgaveliste. Ved å skrive inn i terminalen kan du opprette, fullføre og slette oppgaver fra oppgavelisten. Oppgavene blir lagret som objekter i et array i JSON format. Serveren laster også inn en enkel nettside som en placeholder, og en 404-side hvis noe annet skrives inn i nettleseren.
        </p>
        <p className="indented-text">
          Du kan se prosjektet <a href="https://github.com/RasmusKodehode/to-do-list-server">her</a>.
        </p>
      </div>
    </div>
  );
}
