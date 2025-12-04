// src/App.js
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { PlayerProvider } from "./context/PlayerContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppInner() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH PAGES (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED PAGES (with Spotify-like layout) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/playlist/:id"
          element={
            <PrivateRoute>
              <Layout>
                <Playlist />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PlayerProvider>
        <AppInner />
      </PlayerProvider>
    </AuthProvider>
  );
}
