
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>🍔 FastFood</h3>
            <p>The best restaruant with best chefs in the world made with love</p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Download App</h4>
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-download"
            >
              <i className="fa-brands fa-google-play"></i> Google Play
            </a>
            <a 
              href="https://www.apple.com/app-store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-download"
            >
              <i className="fa-brands fa-apple"></i> App Store
            </a>
            <p className="app-note">🎉 For first foof 50% discount</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 All rights reserved by Azizbek</p>
        </div>
      </div>
    </footer>
  );
}