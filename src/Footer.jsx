export default function Footer({setShowPrivacy,setShowTerms,setShowAPIs}){
  return(
    <section className="footer">
      <div className="footer-container">
        <div className="footerTitle-container"> 
          <div className="footer-title">MEME_LAB</div>
          <div className="copyright">© 2024 MEME_LAB. STAY FUNKY.</div>
        </div>
        <div className="footerLinks-container">
          <ul className="footer-links">
            <li><a className="footer-link" onClick={()=> setShowPrivacy(true)}>Privacy</a></li>
            <li><a className="footer-link" onClick={()=> setShowTerms(true)}>Terms</a></li>
            <li><a className="footer-link" onClick={()=> setShowAPIs(true)}>APIs</a></li>
            <li><a className="footer-link" href="https://github.com/jotishnitr/meme-lab" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>

    </section>
  )
}