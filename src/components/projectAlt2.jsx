export function ProjectAlt2(props) {
  return (
    <div className="project" id={props.id}>
      <a href={props.link} className="links">
        <h4 className="project-title">{props.title}</h4>
        <p className="project-text">{props.date}</p>
        <p className="project-text">{props.dooblydoo}</p>
      </a>
    </div>
  );
}