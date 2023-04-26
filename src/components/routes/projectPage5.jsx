export function ProjectPage5() {
  return (
    <div className="main-page">
      <div className="project-page">
        <h1 className="indented-text">Backend Server</h1>
        <h3 className="indented-text">Periode: 2023</h3>
        <h3 className="indented-text">Språk/rammeverk: NodeJS, ExpressJS</h3>
        <p className="indented-text">
          En CRUD server med en oppgaveliste. Serveren laster en nettside hvor du kan skrive inn oppgaver som blir lagret i oppgavelisten. Når du skriver inn en oppgave vil den sende en request til serveren, og du vil få en tilbakemelding på at oppgaven har blitt opprettet, fullført eller slettet. Hvis du skulle være uheldig og gå deg vill vil en 404-side bli lastet. Oppgavene blir lagret som objekter i et array i JSON format. Du kan også gjøre de samme tingene fra terminalen.
        </p>
        <p className="indented-text">
          Du kan se prosjektet <a href="https://github.com/RasmusKodehode/to-do-list-server" target="_blank" rel="noreferrer">her</a>.
        </p>
      </div>
    </div>
  );
}
