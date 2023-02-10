import { Link } from "react-router-dom";

export function Project(props) {
    return (
      <div className="project">
        <h4 className="project-title"><Link to={props.link}>{props.title}</Link></h4>
        <p>{props.date}</p>
        <p>{props.dooblydoo}</p>
      </div>
    );
}