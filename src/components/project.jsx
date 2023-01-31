import { Link } from "react-router-dom";

export function Project(props) {
    return (
        <div className="project">
            <h4 className="project-title">{props.title}</h4>
            <p>{props.date}</p>
            <p>{props.dooblydoo}</p>
            <Link to={props.link}>Link to project</Link>
        </div>
    )
}