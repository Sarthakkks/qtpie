import React, { useEffect, useRef, useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import formatTime from "../utils/formatTime";

export default function Player() {
  const {
    currentTrack,
    isPlaying,
    setIsPlaying,
    playNext,
    playPrev,
  } = usePlayer();

  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // 0–1

  // load song when currentTrack changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.audioUrl;
    audio.load();
    setProgress(0);
    setDuration(0);

    audio.onloadedmetadata = () => {
      setDuration(audio.duration || 0);
    };
  }, [currentTrack]);

  // play / pause when isPlaying changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && currentTrack) {
      audio
        .play()
        .catch((err) => {
          console.error("Play failed:", err);
          setIsPlaying(false);
        });
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack, setIsPlaying]);

  // update volume when slider changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(audio.currentTime || 0);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const value = Number(e.target.value);
    audio.currentTime = value;
    setProgress(value);
  };

  const togglePlay = () => {
    if (!currentTrack) return;
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    playNext();      // context will change currentTrack and keep playing
  };

  const handlePrev = () => {
    playPrev();
  };

  return (
    <div className="player">
      <div className="player__inner">
        {currentTrack ? (
          <>
            <div className="player__info">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="player__cover"
              />
              <div>
                <div className="player__title">{currentTrack.title}</div>
                <div className="player__artist">{currentTrack.artist}</div>
              </div>
            </div>

            <div className="player__controls">
              <div className="player__buttons">
                <button className="player__btn" onClick={handlePrev}>
                  ⏮
                </button>
                <button
                  className="player__btn player__btn--primary"
                  onClick={togglePlay}
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>
                <button className="player__btn" onClick={handleNext}>
                  ⏭
                </button>
              </div>

              <div className="player__timebar">
                <span className="player__time">{formatTime(progress)}</span>
                <div className="player__seek">
                  <input
                    type="range"
                    min="0"
                    max={duration ? Math.floor(duration) : 0}
                    value={progress}
                    onChange={handleSeek}
                  />
                </div>
                <span className="player__time">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* volume on the right */}
            <div style={{ width: 140, textAlign: "right", fontSize: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span role="img" aria-label="volume">
                  🔊
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  style={{ width: "90px" }}
                />
              </div>
            </div>
          </>
        ) : (
          <span style={{ fontSize: "0.85rem", color: "#bbb" }}>
            Click a track to play.
          </span>
        )}
      </div>

      {/* hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
