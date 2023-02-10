import { Link } from "react-router-dom";

export function Project2(props) {
  return (
    <div className="project-right">
      <h4 className="project-title">
        <Link to={props.link}>{props.title}</Link>
      </h4>
      <p>{props.date}</p>
      <p>{props.dooblydoo}</p>
    </div>
  );
}
