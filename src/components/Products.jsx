import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceSort, setPriceSort] = useState('relevancy');
  const [typeFilter, setTypeFilter] = useState('');

  // Load products on mount
  useEffect(() => {
    fetch('/product.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error loading products:', error));
  }, []);

  // Handle filtering and sorting
  useEffect(() => {
    let result = [...products];

    // Apply type filter
    if (typeFilter && typeFilter !== '') {
      result = result.filter(product => product.type === typeFilter);
    }

    // Apply price sorting/filtering
    switch (priceSort) {
      case 'low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'high':
        result.sort((a, b) => b.price - a.price);
        break;
      case '100':
        result = result.filter(product => product.price < 100);
        break;
      case '300':
        result = result.filter(product => product.price < 300);
        break;
      default:
        // relevancy - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [priceSort, typeFilter, products]);

  // Group products by category
  const groupedProducts = {
    Cine: filteredProducts.filter(p => p.type === 'Cine'),
    Anamorphic: filteredProducts.filter(p => p.type === 'Anamorphic'),
    Spherical: filteredProducts.filter(p => p.type === 'Spherical'),
    Zoom: filteredProducts.filter(p => p.type === 'Zoom'),
    Specialty: filteredProducts.filter(p => p.type === 'Specialty')
  };

  return (
    <main className="hero">
      {/* Video Header */}
      <section id="product-header">
        <video autoPlay muted loop>
          <source src="/Product_Images/Visi_adv4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <h1 id="all-products-text">ALL PRODUCTS</h1>

      {/* Filters */}
      <section className="product-nav">
        <div className="product-filter">
          <div className="sort-filter-container">
            <h4>SORT BY</h4>
            <select 
              className="price-sort" 
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
            >
              <option value="relevancy">---Select---</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="100">Under $100</option>
              <option value="300">Under $300</option>
            </select>
          </div>

          <div className="sort-filter-container">
            <h4>LENS TYPE</h4>
            <select 
              className="price-sort"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">---Select---</option>
              <option value="Spherical">Spherical</option>
              <option value="Anamorphic">Anamorphic</option>
              <option value="Cine">Cine</option>
              <option value="Zoom">Zoom</option>
              <option value="Specialty">Specialty</option>
            </select>
          </div>
        </div>
      </section>

      <div className="main-content">
        {/* Cine Lenses */}
        {groupedProducts.Cine.length > 0 && (
          <section className="cine product-container">
            <h1 className="category-title">Cine Lenses</h1>
            <div id="cine-products">
              {groupedProducts.Cine.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Anamorphic */}
        {groupedProducts.Anamorphic.length > 0 && (
          <section className="anamorphic product-container">
            <h1 className="category-title">Anamorphic</h1>
            <div id="anamorphic-products">
              {groupedProducts.Anamorphic.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Spherical */}
        {groupedProducts.Spherical.length > 0 && (
          <section className="spherical product-container">
            <h1 className="category-title">Spherical</h1>
            <div id="spherical-products">
              {groupedProducts.Spherical.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Zoom */}
        {groupedProducts.Zoom.length > 0 && (
          <section className="zoom product-container">
            <h1 className="category-title">Zoom</h1>
            <div id="zoom-products">
              {groupedProducts.Zoom.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Specialty */}
        {groupedProducts.Specialty.length > 0 && (
          <section className="specialty product-container">
            <h1 className="category-title">Specialty / Collector's Picks</h1>
            <div id="specialty-products">
              {groupedProducts.Specialty.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Products;