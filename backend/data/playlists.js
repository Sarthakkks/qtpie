const playlists = [
  {
    id: "1",
    name: "QtPie Playlist",
    description: "Your custom local songs",
    // BIG playlist cover at the top-left
    cover: "/songs/cover1.jpg",   // 👈 relative path, NOT http://localhost:3000
    trackIds: [1, 2]
  }
];

module.exports = playlists;
