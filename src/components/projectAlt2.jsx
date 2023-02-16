export function ProjectAlt2(props) {
  return (
    <a href={props.link} className="links">
      <div className="project-right" id={props.id}>
        <h4 className="project-title">{props.title}</h4>
        <p>{props.date}</p>
        <p>{props.dooblydoo}</p>
      </div>
    </a>
  );
}