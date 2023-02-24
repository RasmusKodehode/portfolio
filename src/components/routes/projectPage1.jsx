export function ProjectPage1() {
    return (
      <div className="project-page">
        <h1 className="indented-text">Masteroppgave</h1>
        <h3 className="indented-text">Periode: 2020-2021</h3>
        <h3 className="indented-text">Språk/rammeverk: C++</h3>
        <p className="indented-text">
          Masteroppgaven ble skrevet ved Universitetet i Bergen, Institutt for
          fysikk og teknologi. Forskningen ble gjort med data fra ATLAS
          eksperimentet og datasystemet til CERN i Geneve, Sveits.
        </p>
        <p className="indented-text">
          Oppgaven gikk ut på å studere Higgs-bosonet, som er ned til nå siste
          fundamentale partikkelen som har blitt bekreftet da den ble oppdaget i
          2012. På grunn av den store massen er Higgs-bosonet vanskelig å
          studere, fordi den veldig fort spaltes til mindre partikler, som gjør
          det vanskelig å sette sammen puslespillet igjen og lære mer om selve
          Higgs. Strategien min var derfor å satse på en sjeldnere måte Higgs
          kan spaltes på, hvor den etterlater to myoner som kan plukkes opp i
          detektoren. Det gjør det lettere å sette sammen brikkene for å komme
          tilbake til den opprinnelige Higgs-partikkelen. Utfordringen er at
          denne spaltingen er veldig skjelden, noe som gjør at veldig mye data
          trengs for å kunne se noe resultat.
        </p>
        <p className="indented-text">
          Du kan lese oppgaven i sin helhet{" "}
          <a href="https://bora.uib.no/bora-xmlui/handle/11250/2771475?show=full&locale-attribute=en" target="_blank">her</a>, og du kan se på koden som ble brukt <a href="https://github.com/RasmusKodehode/Master-thesis-code">her</a>.
        </p>
      </div>
    );
}