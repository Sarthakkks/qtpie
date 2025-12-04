import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistById } from "../services/api";
import TrackList from "../components/TrackList";
import { usePlayer } from "../context/PlayerContext";

export default function Playlist() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const { setQueue } = usePlayer();           // 👈 get setQueue from context

  useEffect(() => {
    getPlaylistById(id)
      .then(setPlaylist)
      .catch(() => setPlaylist(null));
  }, [id]);

  // whenever playlist changes, update the player queue
  useEffect(() => {
    if (playlist && playlist.tracks) {
      setQueue(playlist.tracks);
    }
  }, [playlist, setQueue]);

  if (!playlist) {
    return <div>Loading playlist...</div>;
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <img
          src={playlist.cover}
          alt={playlist.name}
          style={{
            width: 140,
            height: 140,
            borderRadius: "0.75rem",
            objectFit: "cover",
            background: "#333",
          }}
        />
        <div style={{ alignSelf: "flex-end" }}>
          <div style={{ fontSize: "0.8rem", textTransform: "uppercase" }}>
            Playlist
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              margin: "0.3rem 0",
              fontWeight: 800,
            }}
          >
            {playlist.name}
          </h1>
          <div style={{ fontSize: "0.85rem", color: "#ccc" }}>
            {playlist.description}
          </div>
        </div>
      </div>

      <TrackList tracks={playlist.tracks} />
    </div>
  );
}
