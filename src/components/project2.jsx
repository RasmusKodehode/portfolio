import { Link } from "react-router-dom";


export function Project2(props) {
  return (
    <div className="project" id={props.id}>
      <Link to={props.link} className="link-style-when-clicked">
        <h4 className="project-title">{props.title}</h4>
        <p className="project-text">{props.date}</p>
        <p className="project-text">{props.dooblydoo}</p>
      </Link>
    </div>
  );
}
