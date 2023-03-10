import { useState, useEffect } from "react";
import {nanoid} from "nanoid";
import tronalddump from "./images/tronaldDump.png";
import cross from "./images/cross.png";

const mainUrl = "https://tronalddump.io/random/quote";

const favourites = [];

async function getAPI(callback) {
    const fetchRequest = await fetch(mainUrl);
    const fetchData = await fetchRequest.json();
    callback(fetchData);
}

export function Component3() {
    const [data, setData] = useState(null);
    const [favs, setFavs] = useState(() => {
        return JSON.parse(localStorage.getItem("items")) || favourites;
    })
    //const [favs, setFavs] = useState(favourites);

    useEffect(() => {
        //getAPI(setData);
        localStorage.setItem("items", JSON.stringify(favs));
        //localStorage.clear();
        }, [favs, data])

    const timeStamp = new Date();
    const year = timeStamp.getFullYear();
    const month = timeStamp.getMonth() + 1;
    const day = timeStamp.getDate();
    const hour = timeStamp.getHours();
    const minute = timeStamp.getMinutes();

    function generateTimeStamp() {
      return `${day < 10 ? `0${day}` : day}.${
        month < 10 ? `0${month}` : month
      }.${year}, ${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      }`;
    }

    function saveQuote(quote) {
      const newQuote = {"quote": quote, "timestamp": generateTimeStamp()}
      let duplicate = false;
      for (let item of favs) {
        if (item.quote === quote) {
            duplicate = true;
        }
      }
      if (duplicate) {
        alert("This quote is already saved!");
      } else {
        setFavs([...favs, newQuote]);
        console.log(favs);
      }
    }

    function deleteTweet(tweet) {
        setFavs(
            favs.filter((item) => {
                return item.quote !== tweet.quote;
            })
        )
    }

    const tweets = favs.map((tweet) => (
        <div className="tweet" key={nanoid()}>
            <div id="twitter-header">
                <img src={tronalddump} alt="tronaldDump" id="tronalddump" />
                <div id="twitter-tags">
                    <p id="twitter-name">Donald Trump</p>
                    <p id="twitter-handle">@tronalddump</p>
                </div>
                <button id="delete-button" onClick={() => {deleteTweet(tweet)}}><img src={cross} alt="cross" id="delete-cross" /></button>
            </div>
            <br />
            <p>{tweet.quote}</p>
            <br />
            <p id="timestamp">Saved on {tweet.timestamp}</p>
        </div>
    ));

    return (
        <div className="API-page">
            <h1 className="title-about">Get a quote of the dumbest things Donald Trump ever said!</h1>
            <button id="button-quote" onClick={() => getAPI(setData)}>Click for random quote</button>
            <p id="quote">{data ? data.value : ""}</p>
            <button id="save-quote" onClick={() => saveQuote(data.value)}>Save Quote</button>
            <div className="tweets-list">{tweets}</div>
        </div>
    )
}