export default function ProductCard({ product, inCart, onToggleCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <span className="price">{product.price.toLocaleString()}</span>
          <button 
            className={inCart ? 'btn-in-cart' : 'btn-add'} 
            onClick={() => onToggleCart(product.id)}
          >
            {inCart ? '✓ Savatda' : '🛒'}
          </button>
        </div>
      </div>
    </div>
  );
}