import React, { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [queue, setQueue] = useState([]);      // all tracks in current playlist
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack =
    currentIndex >= 0 && currentIndex < queue.length
      ? queue[currentIndex]
      : null;

  // called when user clicks a track
  const playTrack = (track) => {
    if (!track) return;
    let index = queue.findIndex((t) => t.id === track.id);

    // if track not in queue, put it there
    if (index === -1) {
      const newQueue = [...queue, track];
      setQueue(newQueue);
      index = newQueue.length - 1;
    }

    setCurrentIndex(index);
    setIsPlaying(true);      // 🔥 auto-play
  };

  const playNext = () => {
    setCurrentIndex((idx) => {
      if (queue.length === 0) return idx;
      const next = idx + 1;
      if (next >= queue.length) return idx; // no wrap, just stop at last
      return next;
    });
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentIndex((idx) => {
      if (queue.length === 0) return idx;
      const prev = idx - 1;
      if (prev < 0) return idx;
      return prev;
    });
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider
      value={{
        queue,
        setQueue,       // so Playlist can set the queue
        currentTrack,
        currentIndex,
        isPlaying,
        setIsPlaying,
        playTrack,
        playNext,
        playPrev,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
