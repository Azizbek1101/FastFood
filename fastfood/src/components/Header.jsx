// src/components/Header.jsx
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
    <header
      style={{
        background: '#1a1a1a',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        padding: '15px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#e74c3c',
              flexShrink: 0,
            }}
          >
            🍔 <span style={{ color: '#ffffff' }}>FastFood</span>
          </div>

          {/* Qidiruv */}
          <form
            onSubmit={handleSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#2d2d2d',
              borderRadius: '30px',
              padding: '4px 4px 4px 18px',
              flex: 1,
              maxWidth: '400px',
              border: '2px solid transparent',
              transition: '0.3s',
            }}
          >
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                padding: '10px 0',
                fontSize: '14px',
                flex: 1,
                outline: 'none',
                color: '#ffffff',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#e74c3c',
                border: 'none',
                color: '#fff',
                borderRadius: '30px',
                padding: '10px 22px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: '0.3s',
              }}
            >
              🔍
            </button>
          </form>

          {/* Savatcha tugmasi */}
          <button
            onClick={onCartOpen}
            style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              fontSize: '26px',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '50%',
              color: '#ffffff',
              transition: '0.3s',
            }}
          >
            🛒
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#e74c3c',
                  color: '#fff',
                  borderRadius: '50%',
                  padding: '2px 8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}