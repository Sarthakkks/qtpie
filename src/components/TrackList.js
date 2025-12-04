import React from "react";
import TrackItem from "./TrackItem";

export default function TrackList({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return <div className="track-list">No tracks.</div>;
  }

  return (
    <div className="track-list">
      {tracks.map((t) => (
        <TrackItem key={t.id} track={t} />
      ))}
    </div>
  );
}
