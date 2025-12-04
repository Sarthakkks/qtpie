🎧 QtPie – Spotify Clone (React + Tailwind + Custom Player)

QtPie is a modern, fully responsive Spotify-inspired music player built using React, Tailwind CSS, and a custom HTML5 audio engine.
It features authentication, dynamic greetings, playlists, custom song playback, next/prev controls, volume control, and a beautifully clean UI.

This project recreates the essential user experience of Spotify — optimized for learning, portfolio use, and personal customization.

🚀 Features
🎵 Music Player

Custom HTML5 audio player

Play / Pause

Next / Previous track

Volume control

Progress (seek) bar

Auto-play next track

Real-time UI updates

🎼 Playlists

Local playlist support

Featured playlists (static UI)

Clickable Spotify playlist cards → open in Spotify

Playlist cover images

Interactive hover UI

🔐 Authentication

Login

Signup

Persistent user session (localStorage)

Protected routes

Logout

👋 Dynamic Greeting

Automatically shows:

Good morning

Good afternoon

Good evening

Based on real system time + user’s name.

🎨 UI / UX

Clean Spotify-style layout

Sidebar navigation

Header with search placeholder

Bottom fixed music player

Fully responsive

Smooth dark theme

🛠 Tech Stack

React (Functional Components + Hooks)

React Router (Protected Routes + Navigation)

Context API (Auth + Player State)

Tailwind CSS (Custom styling + utility classes)

HTML5 Audio API (Song playback engine)

LocalStorage (Auth persistence)

📁 Project Structure
src
 ├─ components
 │   ├─ Layout.js
 │   ├─ Sidebar.js
 │   ├─ Navbar.js
 │   ├─ Player.js
 │   └─ TrackList / TrackItem
 ├─ pages
 │   ├─ Home.js
 │   ├─ Login.js
 │   ├─ Signup.js
 │   └─ Playlist.js
 ├─ context
 │   ├─ AuthContext.js
 │   └─ PlayerContext.js
 ├─ songs (local audio + covers)
 ├─ App.js
 ├─ App.css
 └─ index.js

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Sarthakkks/qtpie-spotify-clone.git

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm start

🎶 Adding Songs

Place audio files inside:

public/songs/


Example:

public/songs/laufey.mp3
public/songs/karan.mp3
public/songs/cover1.jpg
public/songs/cover2.jpg


Then register them in the local playlist (inside Playlist.js or track list file):

{
  id: 1,
  title: "From the Start",
  artist: "Laufey",
  audioUrl: "/songs/laufey.mp3",
  cover: "/songs/cover1.jpg"
}

🔗 Spotify Integration (UI Only)

Playlist cards link to real Spotify playlists:

{
  type: "external",
  url: "https://open.spotify.com/playlist/...."
}


When clicked → opens in a new tab.

🧪 Future Improvements

Search bar functionality

Multi-user system (backend)

Music streaming API integration

Animated transitions

Theme switching

Upload custom songs

💚 Contributing

Pull requests are welcome!
Feel free to open issues for feature requests or bugs.

🖤 Credits

Created with ❤️ by Sarthak.
A personal learning project inspired by Spotify’s design and experience.

📜 License

This project is open-source and available under the MIT License.
