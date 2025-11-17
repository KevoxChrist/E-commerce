import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeProductCard.css';

function HomeProductCard({ title, spec, image, position, productId }) {
  return (
    <Link 
      to="/products" 
      className={`product-card ${position || ''}`} 
      id={productId || ''}
    >
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-spec">{spec}</p>
        <span className="product-cta">SHOP NOW</span>
      </div>
      <div className="product-thumbnail">
        <img 
          src={image} 
          alt={title}
          id={productId ? `${productId}-img` : ''}
        />
      </div>
    </Link>
  );
}

export default HomeProductCard;