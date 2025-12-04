import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const greeting = getGreeting();
  const displayName = user?.name || "there";

  const playlists = useMemo(
    () => [
      {
        id: "local-1",
        name: "QtPie Playlist",
        description: "Your custom local songs",
        cover: "/songs/cover1.jpg",
        type: "local"
      },
      {
        id: "spotify-lofi-beats",
        name: "lofi beats",
        description: "chill beats, lofi vibes.",
        cover:
          "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
      },
      {
        id: "spotify-chill-hits",
        name: "Chill Hits",
        description: "Kick back to the best chill hits.",
        cover:
          "https://images.pexels.com/photos/7131493/pexels-photo-7131493.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6"
      },
      {
        id: "spotify-todays-top-hits",
        name: "Today's Top Hits",
        description: "The hottest 50 tracks right now.",
        cover:
          "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
      },
      {
        id: "spotify-lofi-girl",
        name: "beats to relax / study to",
        description: "Classic Lofi Girl study playlist.",
        cover:
          "https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"
      },
      {
        id: "spotify-trending-india",
        name: "Trending Now India",
        description: "What India is listening to right now.",
        cover:
          "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/37i9dQZF1DXbVhgADFy3im"
      },
      {
        id: "spotify-top-india",
        name: "Top Songs – India",
        description: "Most played tracks this week in India.",
        cover:
          "https://images.pexels.com/photos/1449057/pexels-photo-1449057.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/37i9dQZEVXbMWDif5SCBJq"
      },
      {
        id: "spotify-indian-lofi",
        name: "Best Indian Lofi Hits",
        description: "Bollywood in lofi style.",
        cover:
          "https://images.pexels.com/photos/1047440/pexels-photo-1047440.jpeg?auto=compress&cs=tinysrgb&w=600",
        type: "external",
        url: "https://open.spotify.com/playlist/0Gug5ATgJnrG0C5q4Dh3Iq"
      }
    ],
    []
  );

  const handleClick = (pl) => {
    if (pl.type === "local") {
      navigate("/playlist/1");
    } else if (pl.url) {
      window.open(pl.url, "_blank", "noopener");
    }
  };

  return (
    <div>
      <h1 className="section-title">
        {greeting}, {displayName}
      </h1>

      {/* Optional subheading */}
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 600,
          marginBottom: "0.75rem"
        }}
      >
        Your playlists
      </h2>

      <div className="grid">
        {playlists.map((pl) => (
          <div
            key={pl.id}
            className="card"
            onClick={() => handleClick(pl)}
            style={{ cursor: "pointer" }}
          >
            <img src={pl.cover} alt={pl.name} className="card__image" />
            <div className="card__title">{pl.name}</div>
            <div className="card__subtitle">{pl.description}</div>
            {pl.type === "external" && (
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#1db954",
                  marginTop: "0.3rem"
                }}
              >
                Opens in Spotify ↗
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
