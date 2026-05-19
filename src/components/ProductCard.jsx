import { Link } from 'react-router-dom';

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <img src={product.image || 'https://via.placeholder.com/200'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="card-actions">
        <Link to={`/shop/${product.id}`}>View</Link>
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </div>
  );
}
