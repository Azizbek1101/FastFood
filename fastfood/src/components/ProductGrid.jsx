import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ category, cart, onToggleCart, searchTerm }) {
  const filtered = products.filter((p) => {
    if (category !== 'all' && p.category !== category) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase().trim();
      return p.name.toLowerCase().includes(term) || 
             p.description.toLowerCase().includes(term);
    }
    return true;
  });

  return (
    <section className="product-grid container">
      <h2>Our Awesome Food</h2>
      <p>Want delicious meal, but no time we will deliver it hot and yummy Foodies will love our foof</p>
      {filtered.length === 0 ? (
        <div className="no-results">
          <p>🔍 Hech qanday taom topilmadi</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={cart.some((item) => item.id === product.id)}
              onToggleCart={onToggleCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}