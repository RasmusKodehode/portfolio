import { Link, Outlet } from "react-router-dom";

export function ProjectPage4() {
  return (
    <div className="main-page">
      <div className="project-page">
        <h1 className="indented-text">API Prosjekt</h1>
        <h3 className="indented-text">Periode: 2022</h3>
        <h3 className="indented-text">Språk/rammeverk: React</h3>
        <p className="indented-text">Tester APIen TronaldDump som serverer idiotiske sitater fra Donald Trump.
        Siden inneholder en knapp som fetcher og viser et tilfeldig sitat.</p>
        <p className="indented-text">
          Du kan se prosjektet <Link to="/Project4/project4">her</Link>.
        </p>
        <Outlet />
      </div>
    </div>
  );
}
