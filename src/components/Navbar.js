import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar__left">
        <div className="navbar__pill">⟵</div>
        <div className="navbar__pill">⟶</div>
        <input
          className="navbar__search"
          placeholder="What do you want to listen to?"
        />
      </div>

      <div className="navbar__right">
        {user && <div className="navbar__user">{user.name}</div>}
        {user && (
          <button className="navbar__button" onClick={logout}>
            Log out
          </button>
        )}
      </div>
    </header>
  );
}
