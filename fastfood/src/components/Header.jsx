import { useState } from 'react';

export default function Header({ cartCount, onCartOpen, onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          🍔 <span>FastFood</span>
        </div>
        <nav className="nav">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('delivery'); }}>Delivery</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('shop'); }}>Shop</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </nav>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Qidirish..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
        <button className="cart-btn" onClick={onCartOpen}>
          🛒
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}