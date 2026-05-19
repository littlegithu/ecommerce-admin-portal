import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, updateProduct } from '../services/api';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [editPrice, setEditPrice] = useState('');

  useEffect(() => {
    getProduct(id).then(p => {
      setProduct(p);
      setEditPrice(p.price);
    });
  }, [id]);

  const handleUpdatePrice = async () => {
    const updated = await updateProduct(id, { price: parseFloat(editPrice) });
    setProduct(updated);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="detail-page">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Current price: ${product.price}</p>
      <div className="edit-price">
        <input type="number" value={editPrice} onChange={e => setEditPrice(e.target.value)} />
        <button onClick={handleUpdatePrice}>Update Price</button>
      </div>
    </div>
  );
}
