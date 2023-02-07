import { useState, useEffect } from "react";

const mainUrl = "https://tronalddump.io/random/quote";

async function getAPI(callback) {
    const fetchRequest = await fetch(mainUrl);
    const fetchData = await fetchRequest.json();
    callback(fetchData);
}

export function Component3() {
    const [data, setData] = useState(null);
    useEffect(() => {
        /*async function getAPI() {
            const fetchRequest = await fetch(mainUrl);
            const fetchData = await fetchRequest.json();
            setData(fetchData);*/
        getAPI(setData)
        }, [])

    return (
        <div className="placeholder-projects">
            <h1>Get a quote of the dumbest things Donald Trump ever said!</h1>
            <button id="button-quote" onClick={() => getAPI(setData)}>Click for random quote</button>
            <p>{data ? data.value : ""}</p>
        </div>
    )
}