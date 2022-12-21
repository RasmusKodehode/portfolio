export function Project(props) {
    return (
        <div className="project">
            <h4>{props.title}</h4>
            <p>{props.date}</p>
            <p>{props.dooblydoo}</p>
        </div>
    )
}