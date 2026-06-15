import Navbar from "./Navbar"
import Gallery from "./Gallery";
import Hero from "./Hero"
import History from "./History"
import Footer from "./Footer"
import React from "react";
function App() {
  const [showProfile, setShowProfile] = React.useState(false);

  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const [showAPIs,setShowAPIs]=React.useState(false);
  const [history, setHistory] = React.useState(
  JSON.parse(localStorage.getItem("memeHistory")) || []
  );
  const [currentPage, setCurrentPage] = React.useState("templates");
  return (
    <>
    <div className="lime-glow"></div>
    <div className="cyan-glow"></div>
    <Navbar
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    setShowProfile={setShowProfile}
    />
    {currentPage === "templates" && (
  <Hero setHistory={setHistory}/>
)}

{currentPage === "gallery" && (
  <Gallery />
)}

{currentPage === "history" && (
  <History history={history}
  setHistory={setHistory}/>
)}

{showProfile && (
  <div
    className="profile-overlay"
    onClick={() => setShowProfile(false)}
  >
    <div
      className="profile-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowProfile(false)}
      >
        ✕
      </button>

      <h2>👤 Your Meme Dashboard</h2>

      <div className="profile-stat">
        <span>Custom Memes Downloaded</span>
        <strong>{history.length}</strong>
      </div>

      <div className="profile-stat">
        <span>Latest Download</span>
        <strong>
          {history.length > 0
            ? history[0].downloadedAt
            : "No downloads yet"}
        </strong>
      </div>

      <div className="profile-stat">
        <span>History Usage</span>
        <strong>{history.length}/50</strong>
      </div>
    </div>
  </div>
)}

{showPrivacy && (
  <div
    className="modal-overlay"
    onClick={() => setShowPrivacy(false)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowPrivacy(false)}
      >
        ✕
      </button>

      <h2>🔒 Privacy Policy</h2>

      <ul className="policy-list">
  <li>
    MEME_LAB does not collect, store, or share personal information.
  </li>

  <li>
    All custom meme history is stored locally in your browser using Local Storage.
  </li>

  <li>
    No accounts, passwords, or personal data are required to use the application.
  </li>

  <li>
    Downloaded memes are saved directly to your device and are not uploaded to any server.
  </li>

  <li>
    By using MEME_LAB, you acknowledge that your meme history is stored only on your device.
  </li>
</ul>

    </div>
  </div>
)}

{showTerms && (
  <div
    className="modal-overlay"
    onClick={() => setShowTerms(false)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowTerms(false)}
      >
        ✕
      </button>

      <h2>📜 Terms of Use</h2>

      <ul className="policy-list">
  <li>
    MEME_LAB is provided for personal and entertainment purposes.
  </li>

  <li>
    Users are responsible for any content they create, download, or share using the application.
  </li>

  <li>
    MEME_LAB does not claim ownership of user-generated memes.
  </li>

  <li>
    The application uses publicly available meme templates from external sources.
  </li>

  <li>
    The service is provided "as is" without warranties or guarantees of availability.
  </li>
</ul>

    </div>
  </div>

)}

{ showAPIs && (
  <div
    className="modal-overlay"
    onClick={() => setShowAPIs(false)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowAPIs(false)}
      >
        ✕
      </button>

      <h2>⚡ APIs Used</h2>

      <ul className="policy-list">
  <li>
    <strong>Imgflip API</strong> — Provides meme templates used in the Studio for creating custom memes.
  </li>

  <li>
    <strong>Unsplash API</strong> — Supplies high-quality images used throughout the Gallery section.
  </li>

  <li>
    <strong>Lorem Picsum API</strong> — Provides placeholder and sample images used in various gallery categories.
  </li>

  <li>
    <strong>HTML Canvas API</strong> — Enables meme rendering and image generation for downloads within the browser.
  </li>

  <li>
    <strong>Web Storage API (Local Storage)</strong> — Stores custom meme history locally on the user's device and preserves it across browser sessions.
  </li>
</ul>

    </div>
  </div>
)}


    <Footer
      setShowPrivacy={setShowPrivacy}
      setShowTerms={setShowTerms}    
      setShowAPIs={setShowAPIs}
    />
    </>
  )
}

export default App