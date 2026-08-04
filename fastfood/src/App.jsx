import { useState } from 'react';
import { products } from './data/products';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './index.css';

function App() {
  // 1. HOLATLAR (STATE)
  const [category, setCategory] = useState('all');        // Joriy kategoriya
  const [cart, setCart] = useState([]);                   // Savatcha
  const [cartOpen, setCartOpen] = useState(false);        // Savatcha oynasi ochiqmi?
  const [searchTerm, setSearchTerm] = useState('');       // Qidiruv so'zi

  // 2. SAVATCHADAGI MAHSULOTLAR SONI
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // 3. SAVATCHAGA QO'SHISH / O'CHIRISH
  const toggleCart = (id) => {
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) => [...prev, { id, qty: 1 }]);
    }
  };

  // 4. MAHSULOT SONINI O'ZGARTIRISH
  const updateQty = (id, delta) => {
    setCart((prev) => {
      const newCart = prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            if (newQty <= 0) return null;
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter(Boolean); // null larni olib tashlaydi
      return newCart;
    });
  };

  // 5. JAMI SUM
  const total = cart.reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  // 6. QIDIRUV
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 7. RENDER
  return (
    <div>
      <Header 
        cartCount={cartCount} 
        onCartOpen={() => setCartOpen(true)}
        onSearch={handleSearch}
      />
      <Banner />
      <CategoryBar current={category} setCategory={setCategory} />
      <ProductGrid 
        category={category} 
        cart={cart} 
        onToggleCart={toggleCart}
        searchTerm={searchTerm}
      />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
        total={total}
        products={products}
      />
      <Footer />
    </div>
  );
}

export default App;