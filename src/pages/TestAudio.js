import React from "react";

export default function TestAudio() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Audio Test</h1>
      <p>If you press play below and still hear nothing, the issue is outside React (system mute / browser / network).</p>
      <audio
        controls
        src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
      />
    </div>
  );
}
