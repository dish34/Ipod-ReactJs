import React from "react";
import "./songs.css";

// functional component Playlist
const Playlist = (props) => {
  return (
    <div className="col-md-6 song-container">
      <div className="song-img col-m-auto">
        <span className="song-title">{props.playlist.name}</span>
        <i class="song-heart far fa-heart"></i>
        <img className="playlist-img" src={props.playlist.image} alt="" />
      </div>
    </div>
  );
};

export default Playlist;
