import { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../services/api';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(p => p.id !== id));
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}