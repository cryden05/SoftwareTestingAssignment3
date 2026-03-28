import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import WarehouseForm from './WarehouseForm';

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);
  const [editingWarehouseId, setEditingWarehouseId] = useState(null);

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = () => {
    api.get('/warehouses')
      .then(res => setWarehouses(res.data))
      .catch(err => console.error(err));
  };

  const handleWarehouseSaved = () => {
    fetchWarehouses();
    setEditingWarehouseId(null);
  };

  const handleDelete = (id) => {
    api.delete(`/warehouses/${id}`)
      .then(() => fetchWarehouses())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Warehouses</h1>
      <button onClick={() => setEditingWarehouseId('new')}>Add Warehouse</button>
      {editingWarehouseId && <WarehouseForm warehouseId={editingWarehouseId === 'new' ? null : editingWarehouseId} onWarehouseSaved={handleWarehouseSaved} />}
      <ul>
        {warehouses.map(warehouse => (
          <li key={warehouse._id}>
            {warehouse.location} - Manager: {warehouse.managerId?.username || 'None'}
            <button onClick={() => setEditingWarehouseId(warehouse._id)}>Edit</button>
            <button onClick={() => handleDelete(warehouse._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseList;