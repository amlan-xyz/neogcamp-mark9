import "./styles.css";
import { useState } from "react";

const artistDb = {
  taylorSwift: [
    { song: "august", year: "2020" },
    { song: "blank space", year: "2014" }
  ],

  maroon5: [
    { song: "payphone", year: "2012" },
    { song: "wait", year: "2017" }
  ],

  jamesArthur: [
    { song: "say you won't let go", year: "2016" },
    { song: "september", year: "2021" }
  ]
};

export default function App() {
  const [selectedArtist, setArtist] = useState("taylorSwift");

  function artistClickHandler(artist) {
    setArtist(artist);
  }

  return (
    <div className="App">
      <h1>favourite songs</h1>
      <h4>Checkout my favourite songs. Select an artist to get set started</h4>

      <div className="button-div">
        {Object.keys(artistDb).map((artist) => (
          <button className="button" onClick={() => artistClickHandler(artist)}>
            {artist}
          </button>
        ))}
      </div>

      <hr></hr>

      <div>
        {artistDb[selectedArtist].map((artist) => (
          <div className="song-details">
            <h3>{artist.song}</h3>
            <small>
              {" "}
              <i>year of release : </i> {artist.year}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
