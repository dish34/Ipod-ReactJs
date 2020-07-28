import React from "react";
import "./songs.css";

// functional component Songs
const Songs = (props) => {
  const { song } = props;
  return (
    <div className="col-md-6 song-container">
      <div className="song-img col-m-auto">
        {props.song.name}
        <img
          className="s-img"
          src={props.song.image}
          alt=""
          onClick={() => props.handlePlayer(song)}
        />
      </div>
      <i class="far fa-heart"></i>
    </div>
  );
};

export default Songs;
