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
    <div>
      <h2>Add New Product</h2>
      <ProductForm onSubmit={handleAddProduct} loading={false} />
    </div>
  );
}
