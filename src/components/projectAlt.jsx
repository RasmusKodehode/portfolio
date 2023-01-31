export function ProjectAlt(props) {
  return (
    <div className="project">
      <h4 className="project-title">{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.dooblydoo}</p>
      <a href={props.link}>Link to project</a>
    </div>
  );
}
