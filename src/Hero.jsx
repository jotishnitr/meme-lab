import logo from "./assets/logo.svg";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
export default function Hero({ setHistory }){

  const memeRef=useRef(null);

  const [isDownloading,setIsDownloading]=React.useState(false);

  const [isGenerating, setIsGenerating] = React.useState(false);

  const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/1g8my4.jpg"
  })
  const [allMemeImages,setAllMemeImages]=React.useState([]);

  const filteredMemes = allMemeImages.filter(
  meme =>
    meme.width > 500 &&
    meme.height > 500 &&
    !meme.name.includes("Blank")
);

  React.useEffect(()=>{
     fetch("https://api.imgflip.com/get_memes")
       .then(res => res.json())
       .then(data => setAllMemeImages(data.data.memes))

  },[])

  function getMemeImg(){
    
    if(allMemeImages.length===0){
      return;
    }

    setIsGenerating(true);

    
    const randomNumber=Math.floor(Math.random()*filteredMemes.length);
    const url = filteredMemes[randomNumber].url;
    setMeme(prevMeme => {
      return{
        ...prevMeme,
        randomImage:url
      }
    })

    
    setIsGenerating(false);

  }
  function handleChange(event){
    const {name,value}=event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value
    }))
  }
  async function downloadMeme(){

    setIsDownloading(true);

    const canvas=await html2canvas(memeRef.current,{
      useCORS:true,
      allowTaint:false,
    });
    const image=canvas.toDataURL("image/png");
    const link=document.createElement("a");
    link.href=image;
    link.download="my-meme.png";
    link.click();

    setIsDownloading(false);

    const history =
    JSON.parse(
      localStorage.getItem("memeHistory")
    ) || [];

    history.unshift({
      id: Date.now(),
      image: meme.randomImage,
      topText: meme.topText,
      bottomText: meme.bottomText,
      downloadedAt: new Date().toLocaleString()
    });

    if(history.length > 50){
      history.pop();
    }

    localStorage.setItem(
      "memeHistory",
    JSON.stringify(history)
    );

    setHistory(history);

  }

  return(
  <section className="hero">
    <div className="container-wrap">
    <div className="container">

        <div className="header">
        <div className="title-box">
          <div ><img className="container-icon" src={logo}></img></div>
          <h1>Meme Generator</h1>
        </div>
        <div className="tagline">MEME_LAB Studio</div>
        </div>

        <div className="main-section">
          <div className="input-container">
            <div className="input-wrap">
              <div className="input-text">TOP TEXT</div>
              <input 
               type="text" 
               placeholder="AFTER 8 HOURS OF DEBUGGING"
               name="topText"
               value={meme.topText}
               onChange={handleChange}
               ></input>
            </div>
            <div className="input-wrap">
              <div className="input-text">BOTTOM TEXT</div>
              <input 
               type="text" 
               placeholder="MISSING SEMICOLON FOUND"
               name="bottomText"
               value={meme.bottomText}
               onChange={handleChange}
               ></input>
            </div>
          </div>

        <div className="getImg-container"><button className="getImg-btn" onClick={getMemeImg}>{isGenerating?"GENERATING...":"GET A NEW MEME IMAGE"}</button></div>
        <div className="getImg-container"><button className="getImg-btn" onClick={downloadMeme}>{isDownloading?"DOWNLOADING...":"DOWNLOAD MEME"}</button></div>

        <div className="pic-wrap">
        <div className="pic-container" ref={memeRef}>
          <div className="image-container">
            <img 
             className="img"
             src={meme.randomImage} 
             alt="meme"
             crossOrigin="anonymous"
             ></img></div>
          <div className="top-text">{meme.topText}</div>
          <div className="bottom-text">{meme.bottomText}</div>
        </div>
        </div>
        </div>

    </div>
    <div className="duplicate-container"></div>
    </div>
  </section>
  )
}
