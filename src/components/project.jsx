import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

export function Project(props) {
  return (
    <div className="project" id={props.id}>
      <Link to={props.link} style={linkStyle}>
        <div id={props.textId}>
          <h4 className="project-title">{props.title}</h4>
          <p className="project-text">{props.date}</p>
          <p className="project-text">{props.dooblydoo}</p>
        </div>
      </Link>
    </div>
  );
}
