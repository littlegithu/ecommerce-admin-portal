const API_URL = 'http://localhost:4000/products';

export async function getProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createProduct(product) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return res.json();
}

export async function updateProduct(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
