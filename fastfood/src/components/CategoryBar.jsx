import { categories } from '../data/products';

export default function CategoryBar({ current, setCategory }) {
  return (
    <div className="category-bar container">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={current === cat.id ? 'active' : ''}
          onClick={() => setCategory(cat.id)}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  );
}