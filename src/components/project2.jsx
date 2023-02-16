import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black"
};

export function Project2(props) {
  return (
    <Link to={props.link} style={linkStyle}>
      <div className="project-right" id={props.id}>
        <h4 className="project-title">{props.title}</h4>
        <p>{props.date}</p>
        <p>{props.dooblydoo}</p>
      </div>
    </Link>
  );
}
