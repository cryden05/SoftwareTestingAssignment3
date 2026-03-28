import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

function WarehouseForm({ warehouseId, onWarehouseSaved }) {
    const [warehouse, setWarehouse] = useState({ location: '', managerId: '' });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users')
            .then(res => setUsers(res.data.filter(user => user.role === 'manager')))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (warehouseId) {
            api.get(`/warehouses/${warehouseId}`)
                .then(res => setWarehouse(res.data))
                .catch(err => console.error(err));
        }
    }, [warehouseId]);

    const handleChange = (e) => {
        setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = warehouseId ? api.put(`/warehouses/${warehouseId}`, warehouse) : api.post('/warehouses', warehouse);
        request
            .then(() => {
                onWarehouseSaved();
            })
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="location" placeholder="Location" value={warehouse.location} onChange={handleChange} />
            <select name="managerId" value={warehouse.managerId} onChange={handleChange}>
                <option value="">Select Manager</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.username}</option>
                ))}
            </select>
            <button type="submit">{warehouseId ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default WarehouseForm;