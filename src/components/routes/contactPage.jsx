import linkedIn from "../images/linkedIn.svg";
import GitHub from "../images/GitHub.svg";
import javascript from "../images/javascript.jpg";
import F1 from "../images/F1.jpg";

export function ContactPage() {
    return (
        <div className="page">
            <h2 className="title-about">Her er profilen min på LinkedIn: <a href="https://www.linkedin.com/in/rasmus-brekke-102838215/"><img src={linkedIn} alt="linkedin-logo" className="logo" /></a></h2>
            <h2 className="title-about">Her finner du prosjektene mine på GitHub: <a href="https://github.com/RasmusKodehode"><img src={GitHub} alt="github-logo" className="logo"/></a></h2>
            <div className="img-collection">
                <figure>
                    <img src={javascript} alt="coding" className="image" />
                    <figcaption>To ting jeg liker: Koding...</figcaption>
                </figure>
                <figure>
                    <img src={F1} alt="Formula 1" className="image" />
                    <figcaption>...og Racing</figcaption>
                </figure>
            </div>
        </div>
    )
}