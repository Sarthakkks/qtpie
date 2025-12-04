import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      {/* Logo - CLICKABLE */}
      <Link
        to="/"
        className="sidebar__logo"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer"
        }}
      >
        <span className="sidebar__logo-dot" />
        <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>QtPie</span>
      </Link>

      {/* Navigation */}
      <nav className="sidebar__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            "sidebar__nav-link" +
            (isActive ? " sidebar__nav-link--active" : "")
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/playlist/1"
          className={({ isActive }) =>
            "sidebar__nav-link" +
            (isActive ? " sidebar__nav-link--active" : "")
          }
        >
          My Playlist
        </NavLink>

        {/* EXTRA DEMO PAGES IF YOU WANT LATER */}
        {/* <NavLink to="/search">Search</NavLink> */}
        {/* <NavLink to="/library">Library</NavLink> */}
      </nav>

      {/* Footer Section */}
      <div className="sidebar__footer">
        {/* if user logged in */}
        {user ? (
          <>
            <div style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
              Logged in as <strong>{user.name}</strong>
            </div>
            <button
              onClick={logout}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "none",
                padding: "0.45rem 0.8rem",
                borderRadius: "0.4rem",
                cursor: "pointer",
                color: "white",
                width: "100%",
                textAlign: "center",
                fontSize: "0.9rem"
              }}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            {/* if not logged in */}
            <Link
              to="/login"
              style={{
                display: "block",
                textDecoration: "none",
                color: "white",
                padding: "0.5rem 0.8rem",
                borderRadius: "0.4rem",
                background: "rgba(255,255,255,0.08)",
                textAlign: "center"
              }}
            >
              Log in
            </Link>

            <Link
              to="/signup"
              style={{
                display: "block",
                marginTop: "0.5rem",
                textDecoration: "none",
                color: "#1DB954",
                textAlign: "center"
              }}
            >
              Sign up
            </Link>
          </>
        )}

        {/* App Footer */}
        <div
          style={{
            marginTop: "1rem",
            fontSize: "0.75rem",
            opacity: 0.6,
            textAlign: "center"
          }}
        >
          QtPie &copy; 2025
        </div>
      </div>
    </aside>
  );
}
