import Profilbilde from "../images/Profilbilde.jpg";

export function LandingPage() {
    return (
      <div className="profile">
        <div className="ProfileInfo">
          <h2>Rasmus J. Brekke</h2>
          <h4>Frontend Utvikler</h4>
          <p>Hei, velkommen til hjemmesiden min! Jeg er en frontend utvikler fra Bergen.
            Ta en titt rundt for å lære mer om meg og det jeg har gjort!</p>
        </div>
        <div className="ProfileImg">
          <img src={Profilbilde} alt="Profilbilde" className="image" />
        </div>
      </div>
    );
}