// ============================================
// ARCHIVO: ProductList.tsx
// Componente para gestionar productos
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectAllProducts,
  selectProductCount,
  productAdded,
  productRemoved,
  stockUpdated,
} from './productsSlice';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const count = useAppSelector(selectProductCount);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price && stock) {
      dispatch(productAdded(name, parseFloat(price), parseInt(stock)));
      setName('');
      setPrice('');
      setStock('');
    }
  };

  return (
    <div className="product-manager">
      {/* Formulario para agregar producto */}
      <form
        onSubmit={handleSubmit}
        className="product-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del producto"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio"
          min="0"
          step="0.01"
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          min="0"
        />
        <button type="submit">Agregar</button>
      </form>

      {/* Contador */}
      <div className="product-count">
        Total: <strong>{count}</strong> productos (ordenados por precio)
      </div>

      {/* Lista de productos */}
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="stock">Stock: {product.stock}</p>
            </div>
            <div className="product-actions">
              <button
                onClick={() =>
                  dispatch(stockUpdated({ id: product.id, amount: 1 }))
                }
                className="stock-btn">
                +
              </button>
              <button
                onClick={() =>
                  dispatch(stockUpdated({ id: product.id, amount: -1 }))
                }
                className="stock-btn"
                disabled={product.stock === 0}>
                -
              </button>
              <button
                onClick={() => dispatch(productRemoved(product.id))}
                className="delete-btn">
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="empty-message">No hay productos. ¡Agrega uno!</p>
      )}
    </div>
  );
};

export default ProductList;
