<div align="center">

```
███╗   ███╗███████╗███╗   ███╗███████╗    ██╗      █████╗ ██████╗
████╗ ████║██╔════╝████╗ ████║██╔════╝    ██║     ██╔══██╗██╔══██╗
██╔████╔██║█████╗  ██╔████╔██║█████╗      ██║     ███████║██████╔╝
██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██╔══╝      ██║     ██╔══██║██╔══██╗
██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║███████╗    ███████╗██║  ██║██████╔╝
╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═════╝
```

**The internet's most unhinged meme studio. Built different. Stay funky.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-C3F400?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-00DBE9?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 🌐 Live Demo

<div align="center">

### 🚀 Try MEME_LAB Live

<a href="https://memelab-taupe.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/OPEN_MEME_LAB-00FF88?style=for-the-badge&logo=vercel&logoColor=black" alt="Live Demo">
</a>

<br><br>

🔗 https://memelab-taupe.vercel.app/

*No installation. No sign-up. Open the link and start creating memes instantly.*

</div>


---

## ⚡ What is MEME_LAB?

MEME_LAB is a **browser-based meme creation studio** — no accounts, no servers, no nonsense. Pick a template, slap some text on it, download it, and send it to your group chat. Your meme history lives in your browser and goes nowhere else.

> *"After 8 hours of debugging — missing semicolon found."*
> That's the energy.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Meme Studio** | Live canvas editor with top & bottom text overlay |
| 🖼️ **Template Roulette** | Pulls 100+ fresh templates from the Imgflip API |
| 🗂️ **Curated Gallery** | 10 hand-picked categories — Trending, Animals, Dark Humor, Gaming & more |
| 🕓 **Meme History** | Auto-saves your last 50 creations locally, no sign-up needed |
| 📥 **One-click Download** | HTML Canvas renders and exports your meme as a crisp PNG |
| 👤 **Meme Dashboard** | Quick stats — total memes made, last download time, history usage |
| 🔒 **Zero Data Collection** | Everything stays on your device. Always. |
| 📱 **Fully Responsive** | Looks sharp on desktop, tablet, and mobile |

---


## 🛠️ Tech Stack

```
Frontend    →  React 18 + Vite
Styling     →  Vanilla CSS  (Space Grotesk · Bricolage Grotesque · JetBrains Mono)
Rendering   →  HTML Canvas API via html2canvas
Storage     →  Web Storage API (localStorage)
```

### APIs Used

| API | Purpose |
|---|---|
| [Imgflip API](https://imgflip.com/api) | Meme templates for the Studio |
| [Unsplash API](https://unsplash.com/developers) | High-quality images in the Gallery |
| [Lorem Picsum](https://picsum.photos) | Placeholder images across gallery categories |
| [HTML Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | In-browser meme rendering & PNG export |
| [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) | Persistent local meme history |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/jotishnitr/meme-generator.git
cd meme-generator

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and start memeing. 🎭

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
meme-generator/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── App.jsx          # Root — routing, modals, history state
│   ├── Navbar.jsx       # Fixed top nav with page routing
│   ├── Hero.jsx         # Meme Studio — template picker + canvas editor
│   ├── Gallery.jsx      # Category gallery with download
│   ├── History.jsx      # localStorage meme archive
│   ├── Footer.jsx       # Links, privacy, terms, API credits
│   ├── galleryData.js   # Curated gallery meme dataset
│   └── index.css        # Global styles + responsive breakpoints
├── index.html
└── vite.config.js
```

---

## 🎨 Design System

MEME_LAB runs on a tight, opinionated token set:

```
Background     #131318   Dark base
Surface        #1B1B20   Card backgrounds
Lime           #C3F400   Primary action / highlights
Cyan           #00DBE9   Borders / accents
Olive          #556D00   Text on lime surfaces
Muted          #C4C9AC   Secondary text
```

Fonts: **Bricolage Grotesque** (display) · **Space Grotesk** (UI) · **JetBrains Mono** (labels)

---

## 🔒 Privacy

- No accounts. No passwords. No tracking.
- Meme history is stored **only** in your browser's localStorage.
- Downloaded memes go **directly** to your device — nothing is uploaded.
- Clearing browser data wipes your history. That's it.

---

## 🤝 Contributing

PRs are welcome! If you've got a spicy feature idea or found a bug:

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📜 License

MIT — do whatever you want. Just stay funky.

---

<div align="center">


Designed & built by **[Jotish](https://github.com/jotishnitr)** — fuelled by memes, caffeine & `#C3F400`

*© 2026 MEME_LAB. STAY FUNKY.*

</div>
