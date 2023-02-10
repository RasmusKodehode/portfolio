export function ProjectAlt2(props) {
  return (
    <div className="project-right">
      <h4 className="project-title">
        <a href={props.link}>{props.title}</a>
      </h4>
      <p>{props.date}</p>
      <p>{props.dooblydoo}</p>
    </div>
  );
}
