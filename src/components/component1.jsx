import {useState} from "react"

export function Component1() {
    const [state, setState] = useState(false)

    return (
        <h1 onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>The state is currently <span>{state ? "true" : "false"}</span>. Hover over it to change!</h1>
    )
}