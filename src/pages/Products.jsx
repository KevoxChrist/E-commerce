import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import HeaderTwo from '../components/Header2';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceSort, setPriceSort] = useState('relevancy');
  const [typeSort, setTypeSort] = useState('');

  const url = 'http://localhost:5000';

  // Load products on component mount
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(`${url}/inventory`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    }
    loadProducts();
  }, []);

  // Handle filtering and sorting whenever sort options change
  useEffect(() => {
    let result = [...products];

    // Apply type filter first
    if (typeSort && typeSort !== '') {
      result = result.filter(product => product.type === typeSort);
    }

    // Apply price sort/filter
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
      case 'relevancy':
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(result);
  }, [priceSort, typeSort, products]);

  // Group products by category
  const groupedProducts = {
    Cine: filteredProducts.filter(p => p.type === 'Cine'),
    Anamorphic: filteredProducts.filter(p => p.type === 'Anamorphic'),
    Spherical: filteredProducts.filter(p => p.type === 'Spherical'),
    Zoom: filteredProducts.filter(p => p.type === 'Zoom'),
    Specialty: filteredProducts.filter(p => p.type === 'Specialty')
  };

  const renderProductCard = (product) => (
    <ProductCard key={product.name} product={product} />
  );

  const renderCategory = (categoryName, categoryProducts, displayName) => {
    if (categoryProducts.length === 0) return null;

    return (
      <section className={`${categoryName.toLowerCase()} product-container`}>
        <h1 className="category-title">{displayName}</h1>
        <div id={`${categoryName.toLowerCase()}-products`}>
          {categoryProducts.map(renderProductCard)}
        </div>
      </section>
    );
  };

  return (
    <>
      <HeaderTwo />
      <main className="hero">
        <section id="product-header">
        <video autoPlay muted loop>
          <source src="Product_Images/Visi_adv4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <h1 id="all-products-text">ALL PRODUCTS</h1>

      <section className="product-nav">
        <div className="product-filter">
          <div className="sort-filter-container">
            <h4>SORT BY</h4>
            <select 
              name="Sort By" 
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
              name="Lens Type" 
              className="price-sort"
              value={typeSort}
              onChange={(e) => setTypeSort(e.target.value)}
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
        {renderCategory('Cine', groupedProducts.Cine, 'Cine Lenses')}
        {renderCategory('Anamorphic', groupedProducts.Anamorphic, 'Anamorphic')}
        {renderCategory('Spherical', groupedProducts.Spherical, 'Spherical')}
        {renderCategory('Zoom', groupedProducts.Zoom, 'Zoom')}
        {renderCategory('Specialty', groupedProducts.Specialty, "Specialty / Collector's Picks")}
      </div>
      </main>
    </>
  );
}

export default Products;