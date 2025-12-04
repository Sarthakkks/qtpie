// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const STORAGE_KEY = "qtpie_current_user";

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  else localStorage.removeItem(STORAGE_KEY);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = loadUser();
    if (u) setUser(u);
  }, []);

  const signup = async (name, email, password) => {
    // super simple demo: store a single user
    const newUser = { id: Date.now(), name, email, password };
    saveUser(newUser);
    setUser(newUser);
    return newUser;
  };

  const login = async (email, password) => {
    const stored = loadUser();
    if (!stored || stored.email !== email || stored.password !== password) {
      throw new Error("Invalid email or password");
    }
    setUser(stored);
    return stored;
  };

  const logout = () => {
    saveUser(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
