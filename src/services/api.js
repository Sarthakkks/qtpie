import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000
});

export async function getFeaturedPlaylists() {
  const res = await api.get("/playlists");
  return res.data;
}

export async function getPlaylistById(id) {
  const res = await api.get(`/playlists/${id}`);
  return res.data;
}

export async function getAllTracks() {
  const res = await api.get("/tracks");
  return res.data;
}
