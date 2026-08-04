import { useState } from 'react';

export default function Header({ cartCount, onCartOpen, onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();          
    if (onSearch) {
      onSearch(searchValue);      
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            🍔 <span>FastFood</span>
          </div>

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
      </div>
    </header>
  );
}