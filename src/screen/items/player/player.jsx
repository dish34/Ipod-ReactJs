import React from "react";
import "./player.css";
import Music from "./music";
// Conponent for playing Songs
const SongPlayer = (props) => {
  const { songs, songId, isPlaySong } = props;
  if (isPlaySong === true) {
    return <Music song={songs[songId - 1]}></Music>;
  } else {
    return (
      <div className="player-container">
        <img className="player-image" src={songs[songId - 1].image} alt="" />
        <div className="player">
          <input
            id="playBtn"
            class="audiobtn"
            type="button"
            value="▶️"
            onClick={props.play}
          ></input>
        </div>
      </div>
    );
  }
};

export default SongPlayer;
