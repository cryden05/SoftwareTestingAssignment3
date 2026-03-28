import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

function ProductForm({ productId, onProductSaved }) {
    const [product, setProduct] = useState({ name: '', category: '', stockLevel: 0, reorderThreshold: 10 });

    useEffect(() => {
        if (productId) {
            api.get(`/products/${productId}`)
                .then(res => setProduct(res.data))
                .catch(err => console.error(err));
        }
    }, [productId]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = productId ? api.put(`/products/${productId}`, product) : api.post('/products', product);
        request
            .then(() => {
                onProductSaved();
            })
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={product.name} onChange={handleChange} />
            <input name="category" placeholder="Category" value={product.category} onChange={handleChange} />
            <input name="stockLevel" type="number" placeholder="Stock Level" value={product.stockLevel} onChange={handleChange} />
            <input name="reorderThreshold" type="number" placeholder="Reorder Threshold" value={product.reorderThreshold} onChange={handleChange} />
            <button type="submit">{productId ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default ProductForm;