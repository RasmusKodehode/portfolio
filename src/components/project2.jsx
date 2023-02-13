import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

export function Project2(props) {
  return (
    <div className="project-right" id={props.id}>
      <h4 className="project-title">
        <Link to={props.link} style={linkStyle}>{props.title}</Link>
      </h4>
      <p>{props.date}</p>
      <p>{props.dooblydoo}</p>
    </div>
  );
}
