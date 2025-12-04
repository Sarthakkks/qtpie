const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const trackRoutes = require("./routes/trackRoutes");
const playlistRoutes = require("./routes/playlistRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// api routes
app.use("/api/tracks", trackRoutes);
app.use("/api/playlists", playlistRoutes);

// health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "QtPie backend running (no local media)" });
});

app.listen(PORT, () => {
  console.log(`QtPie backend listening on http://localhost:${PORT}`);
});
