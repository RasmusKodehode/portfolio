export function ProjectAlt(props) {
  return (
    <div className="project" id={props.id}>
      <h4 className="project-title">
        <a href={props.link} className="links">{props.title}</a>
      </h4>
      <p>{props.date}</p>
      <p>{props.dooblydoo}</p>
    </div>
  );
}
