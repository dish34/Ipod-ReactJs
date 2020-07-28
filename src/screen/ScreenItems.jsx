import React from "react";
import "./screen.css";
import "./items/songs.css";
import Songs from "../screen/items/Songs";
import Albums from "../screen/items/Albums";
import SongPlayer from "../screen/items/player/player";
import Artist from "../screen/items/Artists";
import Playlist from "../screen/items/Playlist";

// Functional component Screen
const Screen = (props) => {
  const value = props.val;
  const okay = props.ok;
  // For the Songs active Screen
  if (okay === 1 && value === 0) {
    const { songs, player, songId } = props;
    // For the Player
    if (player === true) {
      return (
        <div className="screen">
          <SongPlayer
            songs={songs}
            songId={songId}
            play={props.play}
            isPlaySong={props.isPlaySong}
          ></SongPlayer>
        </div>
      );
    }
    return (
      <div className="screen">
        <div>Songs</div>
        <div className="row">
          {songs.map((song) => {
            return (
              <Songs
                song={song}
                id={song.id}
                handlePlayer={props.handlePlayer}
              ></Songs>
            );
          })}
        </div>
      </div>
    );
  } else if (okay === 1 && value === 1) {
    // For the Albums active list
    const { albums } = props;
    return (
      <div className="screen">
        <div>Album</div>
        <div className="row">
          {albums.map((album) => {
            return <Albums album={album} id={album.id}></Albums>;
          })}
        </div>
      </div>
    );
  } else if (okay === 1 && value === 2) {
    // For the Artist active List
    const { artists } = props;
    return (
      <div className="screen">
        <div>Artists</div>
        <div className="row">
          {artists.map((artist) => {
            return <Artist artist={artist} id={artist.id}></Artist>;
          })}
        </div>
      </div>
    );
  } else if (okay === 1 && value === 3) {
    // for the Playlist active list
    const { playlists } = props;
    return (
      <div className="screen">
        <div>Playlist</div>
        <div className="row">
          {playlists.map((playlist) => {
            return <Playlist playlist={playlist} id={playlist.id}></Playlist>;
          })}
        </div>
      </div>
    );
  } else {
    // for the screen to display songs,albums,artists,playlists lists
    return (
      <div className="screen">
        <div>HI</div>
        <div className="screen-bg">
          <div className="screen-left-side">
            <div className="left-title">iPod.js</div>
            <ul>
              <li className={`${value === 0 ? "active" : "unactive"}`}>
                Songs <i class="fas fa-chevron-right"></i>
              </li>
              <li className={`${value === 1 ? "active" : "unactive"}`}>
                Albums <i class="fas fa-chevron-right"></i>
              </li>
              <li className={`${value === 2 ? "active" : "unactive"}`}>
                Artists <i class="fas fa-chevron-right"></i>
              </li>
              <li className={`${value === 3 ? "active" : "unactive"}`}>
                Playlists <i class="fas fa-chevron-right"></i>
              </li>
            </ul>
          </div>
          <div className="screen-right-side"></div>
        </div>
      </div>
    );
  }
};

export default Screen;
