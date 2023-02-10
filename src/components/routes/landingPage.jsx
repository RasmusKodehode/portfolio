import Profilbilde from "../images/Profilbilde.jpg";
import bergen from "../images/bergen.jpg";
import rain from "../images/rain.jpg";

export function LandingPage() {
    return (
      <div className="profile">
        <div className="ProfileInfo">
          <h2>Rasmus J. Brekke</h2>
          <h4>Frontend Utvikler</h4>
          <p>Hei, velkommen til hjemmesiden min! Jeg er en frontend utvikler fra Bergen.
            Ta en titt rundt for å lære mer om meg og det jeg har gjort!</p>
          <div className="img-collection">
            <figure>
              <img className="image" src={bergen} alt="on a sunny day" />
              <figcaption><em>Noen ganger ser det sånn ut...</em></figcaption>
            </figure>
            <figure>
              <img className="image" src={rain} alt="on a rainy day" />
              <figcaption><em>...men som oftest ser det sånn ut.</em></figcaption>
            </figure>
          </div>
        </div>
        <div className="ProfileImg">
          <img src={Profilbilde} alt="Profilbilde" id="profile-image" />
        </div>
      </div>
    );
}