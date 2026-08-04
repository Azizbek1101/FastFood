
export default function Cart({ isOpen, onClose, cart, updateQty, total, products }) {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Savatcha</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛒</span>
              <p>Savatcha bo‘sh</p>
            </div>
          ) : (
            cart.map((item) => {
              const p = products.find((x) => x.id === item.id);
              if (!p) return null;
              return (
                <div key={item.id} className="cart-item">
                  <img src={p.image} alt={p.name} />
                  <div className="item-info">
                    <h4>{p.name}</h4>
                    <span className="item-price">{(p.price * item.qty).toLocaleString()} so‘m</span>
                  </div>
                  <div className="item-qty">
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <span>Jami:</span>
              <span className="total-price">{total.toLocaleString()} so‘m</span>
            </div>
            <button className="btn-checkout">Buyurtma berish</button>
          </div>
        )}
      </div>
    </div>
  );
}