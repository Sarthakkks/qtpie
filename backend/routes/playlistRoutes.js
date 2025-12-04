// backend/routes/playlistRoutes.js
const express = require("express");
const playlists = require("../data/playlists");
const tracks = require("../data/tracks");

const router = express.Router();

function withTracks(playlist) {
  const playlistTracks = playlist.trackIds
    .map((id) => tracks.find((t) => t.id === id))
    .filter(Boolean);
  return { ...playlist, tracks: playlistTracks };
}

router.get("/", (req, res) => {
  const minimal = playlists.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    cover: p.cover
  }));
  res.json(minimal);
});

router.get("/:id", (req, res) => {
  const id = String(req.params.id);
  const playlist = playlists.find((p) => p.id === id);
  if (!playlist) return res.status(404).json({ error: "Playlist not found" });
  res.json(withTracks(playlist));
});

module.exports = router;
