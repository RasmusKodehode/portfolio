import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

export function Project(props) {
    return (
      <div className="project" id={props.id}>
        <Link to={props.link} style={linkStyle}>
          <h4 className="project-title">{props.title}</h4>
          <p>{props.date}</p>
          <p>{props.dooblydoo}</p>
        </Link>
      </div>
    );
}