export function LandingPage() {
    return (
      <div className="profile">
        <div className="ProfileInfo">
          <h2>Rasmus J. Brekke</h2>
          <h4>Frontend Developer</h4>
          <p>Hello, welcome to my website! I'm a front end developer from Bergen, Norway. Have a look around to learn more about me and
            my projects!
          </p>
        </div>
        <div className="ProfileImg">
          <img src="../images/Profilbilde.jpg" alt="Profilbilde*" />
          <p>*Profile picture does not show, reason unknown at moment</p>
        </div>
      </div>
    );
}