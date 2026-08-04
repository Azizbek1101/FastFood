
import { useState } from 'react';

export default function Banner() {
  const [showToast, setShowToast] = useState(false);

  const handleOrderNow = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <h1>Har doim siz uchun<br />Maxsus taom</h1>
          <p>Eng yaxshi oshpazlar va yetkazib beruvchilar xizmatingizda. Issiq va mazali taomlar 60 daqiqada yetkazib beriladi.</p>
          <button className="btn-primary" onClick={handleOrderNow}>
            Buyurtma berish
          </button>
        </div>
        <div className="banner-image">
          <img src="/pngwing.com.png" alt="Taom" />
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <span>✅ Buyurtma qabul qilindi! Tez orada yetkazib beramiz.</span>
        </div>
      )}
    </section>
  );
}