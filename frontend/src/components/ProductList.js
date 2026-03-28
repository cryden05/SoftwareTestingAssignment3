import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import ProductForm from './ProductForm';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        api.get('/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    };

    const handleProductSaved = () => {
        fetchProducts();
        setEditingProductId(null);
    };

    const handleDelete = (id) => {
        api.delete(`/products/${id}`)
            .then(() => fetchProducts())
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Products</h1>
            <button onClick={() => setEditingProductId('new')}>Add Product</button>
            {editingProductId && <ProductForm productId={editingProductId === 'new' ? null : editingProductId} onProductSaved={handleProductSaved} />}
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.stockLevel}
                        <button onClick={() => setEditingProductId(product._id)}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;