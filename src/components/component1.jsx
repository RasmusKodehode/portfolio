import {useState} from "react"

export function Component1() {
    const [state, setState] = useState(false)

    return (
        <div className="placeholder-projects">
            <h1 onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>The state is currently <span>{state ? "true" : "false"}</span>. Hover over it to change!</h1>
        </div>
    )
}