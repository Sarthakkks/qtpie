import React from "react";
import { usePlayer } from "../context/PlayerContext";

export default function TrackItem({ track }) {
  const { playTrack } = usePlayer();

  const handleClick = () => {
    playTrack(track);
  };

  return (
    <div className="track-item" onClick={handleClick}>
      <img
        src={track.cover}
        alt={track.title}
        className="track-item__cover"
      />
      <div className="track-item__main">
        <div className="track-item__title">{track.title}</div>
        <div className="track-item__artist">{track.artist}</div>
      </div>
      <div className="track-item__duration">{track.duration}</div>
    </div>
  );
}
