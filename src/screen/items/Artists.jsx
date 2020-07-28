import React from "react";
import "./songs.css";

// functional component Artists
const Artist = (props) => {
  return (
    <div className="col-md-6 song-container">
      <div className="song-img col-m-auto">
        <span className="song-title">{props.artist.name}</span>
        <i class="song-heart far fa-heart"></i>
        <img className="artist-img" src={props.artist.image} alt="" />
        <span>Follwers: {props.artist.followers}</span>
      </div>
    </div>
  );
};
export default Artist;
