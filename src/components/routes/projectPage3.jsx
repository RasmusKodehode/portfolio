export function ProjectPage3() {
  return (
    <div className="project-page">
      <h1 className="indented-text">Juleprosjekt</h1>
      <h3 className="indented-text">Periode: 2022-2023</h3>
      <h3 className="indented-text">Språk/rammeverk: React</h3>
      <p className="indented-text">En nettside der du kan være med å telle ned til jul, og poste hilsninger mens du gleder deg til jul.
      Siden inneholder en nedtelling som teller ned til julaften, samt et tekstfelt hvor du kan skrive en melding som vises på skjermen med et timestamp. Meldingene lagres i localstorage, så de blir værende selv om du refresher siden eller stenger ned maskinen.</p>
      <p className="indented-text">
        Du kan se prosjektet <a href="https://rasmuskodehode.github.io/christmas-project-2022/">her</a>.
      </p>
    </div>
  );
}
