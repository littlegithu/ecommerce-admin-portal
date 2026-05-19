import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';
import ProductForm from '../components/ProductForm';

export default function AddProductPage() {
  const navigate = useNavigate();

  const handleAddProduct = async (productData) => {
    await createProduct(productData);
    navigate('/shop');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',    // horizontal centering
      alignItems: 'center',        // vertical centering (optional)
      minHeight: '80vh',           // ensures enough height to see the center
      padding: '1rem',
    }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Add New Product</h2>
        <ProductForm onSubmit={handleAddProduct} loading={false} />
      </div>
    </div>
  );
}