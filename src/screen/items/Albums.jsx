import React from "react";
import "./songs.css";

// functional component Albums
const Albums = (props) => {
  return (
    <div className="col-md-6 song-container">
      <div className="song-img col-m-auto">
        <span className="song-title">{props.album.name}</span>
        <i class="song-heart far fa-heart"></i>
        <img className="a-img" src={props.album.image} alt="" />
        <span>songs:{props.album.songs}</span>
      </div>
    </div>
  );
};

export default Albums;
