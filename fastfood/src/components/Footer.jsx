
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>🍔 FastFood</h3>
            <p>Eng yaxshi oshpazlar va yetkazib beruvchilar xizmatingizda. Issiq va mazali taomlar 60 daqiqada yetkazib beriladi.</p>
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
            <h4>Tez havolalar</h4>
            <ul>
              <li><a href="#">Bosh sahifa</a></li>
              <li><a href="#">Menyu</a></li>
              <li><a href="#">Yetkazib berish</a></li>
              <li><a href="#">Aloqa</a></li>
              <li><a href="#">Biz haqimizda</a></li>
            </ul>
          </div>

          {/* 3-ustun: Kontakt */}
          <div className="footer-col">
            <h4>Bog‘lanish</h4>
            <ul>
              <li>📍 Toshkent, O‘zbekiston</li>
              <li>📞 +998 90 123 45 67</li>
              <li>📧 info@fastfood.uz</li>
              <li>🕐 Dushanba-Shanba: 9:00 - 22:00</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ilovani yuklab oling</h4>
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
            <p className="app-note">🎉 Birinchi buyurtmada 10% chegirma</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 FastFood. Barcha huquqlar himoyalangan. ❤️ bilan tayyorlangan</p>
        </div>
      </div>
    </footer>
  );
}