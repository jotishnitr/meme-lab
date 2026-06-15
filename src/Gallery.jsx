import { galleryMemes } from "./galleryData";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
export default function Gallery() {
  const memeRefs = useRef({});
  const [downloadingId, setDownloadingId] = React.useState(null);
  

  const [selectedCategory,setSelectedCategory]=React.useState("Trending");
  const filteredMemes =
  selectedCategory === "All"
    ? galleryMemes
    : galleryMemes.filter(
        meme =>
          meme.category === selectedCategory
      );

  async function downloadMeme(id) {
  try {
    setDownloadingId(id);

    const canvas = await html2canvas(
      memeRefs.current[id],
      {
        useCORS: true,
        allowTaint: false
      }
    );

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");

    link.href = image;
    link.download = `meme-${id}.png`;

    link.click();
  }
  catch(error) {
    console.error(error);
  }
  finally {
    setTimeout(() => {
      setDownloadingId(null);
    }, 500);
  }
}
  
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-title">
        MEME GALLERY
      </h2>

      <div className="gallery-navbar">
        <ul className="category-list">
  <li onClick={() => setSelectedCategory("Trending")} className={selectedCategory === "Trending"? "category-item active": "category-item"}>🔥 Trending</li>
  <li onClick={() => setSelectedCategory("Reactions")} className={selectedCategory === "Reactions"? "category-item active": "category-item"}>😂 Reactions</li>
  <li onClick={() => setSelectedCategory("Animals")} className={selectedCategory === "Animals"? "category-item active": "category-item"}>🐱 Animals</li>
  <li onClick={() => setSelectedCategory("Movies&TV")} className={selectedCategory === "Movies&TV"? "category-item active": "category-item"}>🎬 Movies & TV</li>
  <li onClick={() => setSelectedCategory("Sports")} className={selectedCategory === "Sports"? "category-item active": "category-item"}>⚽ Sports</li>
  <li onClick={() => setSelectedCategory("Gaming")} className={selectedCategory === "Gaming"? "category-item active": "category-item"}>🎮 Gaming</li>
  <li onClick={() => setSelectedCategory("DarkHumor")} className={selectedCategory === "DarkHumor"? "category-item active": "category-item"}>💀 Dark Humor</li>
  <li onClick={() => setSelectedCategory("Relatable")} className={selectedCategory === "Relatable"? "category-item active": "category-item"}>🧠 Relatable</li>
  <li onClick={() => setSelectedCategory("Relationships")} className={selectedCategory === "Relationships"? "category-item active": "category-item"}>❤️ Relationships</li>
  <li onClick={() => setSelectedCategory("InternetClassics")} className={selectedCategory === "InternetClassics"? "category-item active": "category-item"}>🌎 Internet Classics</li>
        </ul>
      </div>

      <div className="gallery-grid">

        {filteredMemes.map(meme => (
          <div
            key={meme.id}
            className="gallery-card"
          >
            <div className="gallery-image-container" ref={el => memeRefs.current[meme.id] = el}>
            <img
              src={meme.image}
              alt="meme"
              className="gallery-img"
            />
            <div className="gallery-topText">{meme.topText}</div>
            <div className="gallery-bottomText">{meme.bottomText}</div>
            </div>
            <button className="gallery-download" onClick={() => downloadMeme(meme.id)}>
              {
  downloadingId === meme.id
    ? "DOWNLOADING..."
    : "DOWNLOAD MEME"
}
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}