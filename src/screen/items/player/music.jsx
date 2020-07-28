import React from "react";

// Component to play youtube songs
const Music = (props) => {
  let songsrc = `https://www.youtube.com/embed/${props.song.src}`;
  return (
    <iframe
      title={props.song.id}
      width="500"
      height="315"
      src={`${songsrc}`}
      frameborder="0"
      allow=" encrypted-media;"
    ></iframe>
  );
};

export default Music;
