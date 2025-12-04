// backend/routes/trackRoutes.js
const express = require("express");
const tracks = require("../data/tracks");

const router = express.Router();

// GET /api/tracks
router.get("/", (req, res) => {
  res.json(tracks);
});

// GET /api/tracks/:id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const track = tracks.find((t) => t.id === id);
  if (!track) return res.status(404).json({ error: "Track not found" });
  res.json(track);
});

module.exports = router;
