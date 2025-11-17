import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <a className="card" href="/">
        <img className="image-card" src={product.img} alt={product.name} />
      </a>
      <div className="description-info">
        <h2 className="product-name">{product.name}</h2>
        <h3 className="product-price">${product.price}</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;