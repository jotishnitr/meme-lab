import React, { useRef } from "react";
import html2canvas from "html2canvas";
export default function History({history,setHistory}){

  const memeRefs = useRef({});
  

  const[historyDownloadingId,sethistoryDownloadingId]=React.useState(null);
 
  function clearHistory(){
    localStorage.removeItem("memeHistory");
    setHistory([]);
  }

  async function historyDownload(id) {
  try {
    sethistoryDownloadingId(id);

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
      sethistoryDownloadingId(null);
    }, 500);
  }
}

  if(history.length === 0){
  return (
    <section className="history">
    <div className="history-title-noItems">Recently Created</div>
    <div className="history-noItems">
      🎭 No custom memes downloaded yet.
Create your first meme and start building your collection.
    </div>
    </section>
  );
}
  return (
  <section className="history">
    <div className="history-head-container">
    <div className="history-title">
      Recently Created
    </div>
    <button className="clear-history" onClick={clearHistory}>Clear History</button>
    </div>

    <div className="history-grid">
      {history.map(meme => (
        <div
          className="history-picContainer"
          key={meme.id}
        >
          <div ref={el => memeRefs.current[meme.id] = el}>
          <img
            src={meme.image}
            alt="history meme"
            className="history-img"
          />
          <div className="history-topText">{meme.topText}</div>
          <div className="history-bottomText">{meme.bottomText}</div>
          </div>
          <div className="image-time">
            {meme.downloadedAt}
          </div>
          <button onClick={() => historyDownload(meme.id)} className="history-download">{historyDownloadingId === meme.id ?"DOWNLOADING ...":"DOWNLOAD  MEME"}</button>
        </div>
      ))}
    </div>

  </section>
);
  
}
