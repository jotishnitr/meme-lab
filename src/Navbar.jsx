import Gallery from "./Gallery";
import React from "react";
export default function Navbar({currentPage, setCurrentPage, setShowProfile}){
  
  return (
    <section className="navbar">
      <div className="title_navlinks">
      <div className="title">MEME_LAB</div>
      <div className="navLinks-wrap">
        <ul className="nav-links">
          <li><a className={currentPage === "gallery"? "nav-link active": "nav-link"} onClick={() => setCurrentPage("gallery")}>Gallery</a></li>
          <li><a className={currentPage === "templates"? "nav-link active": "nav-link"} onClick={() => setCurrentPage("templates")}>Studio</a></li>
          <li><a className={currentPage === "history"? "nav-link active": "nav-link"} onClick={() => setCurrentPage("history")}>History</a></li>
        </ul>
      </div>
      </div>

      <div className="createBtn_profile">
      <div className="createBtn-wrap" ><button className="createBtn" onClick={() => setCurrentPage("templates")}>CREATE MEME</button></div>
      <div className="profileIcon-wrap" onClick={() => setShowProfile(true)}  ><svg className="profile-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="8.5" r="3.2"></circle>
    <path d="M6.5 17.5c0-3.1 2.5-5.5 5.5-5.5s5.5 2.4 5.5 5.5"></path>
</svg></div>
     </div>

    </section>
  )
}
