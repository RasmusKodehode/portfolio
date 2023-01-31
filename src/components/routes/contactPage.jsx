import linkedIn from "../images/linkedIn.svg";
import GitHub from "../images/GitHub.svg";

export function ContactPage() {
    return (
        <>
            <h2 className="title-about">Her er profilen min på LinkedIn: <a href="https://www.linkedin.com/in/rasmus-brekke-102838215/"><img src={linkedIn} alt="linkedin-logo" className="logo" /></a></h2>
            <h2 className="title-about">Her finner du prosjektene mine på GitHub: <a href="https://github.com/RasmusKodehode"><img src={GitHub} alt="github-logo" className="logo"/></a></h2>
        </>
    )
}