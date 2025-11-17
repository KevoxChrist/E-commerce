import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import "../styles/Products.css";
import visiVideo from "../assets/product_images/Visi_adv4.mp4";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("relevancy");
  const [lensType, setLensType] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    }
    loadProducts();
  }, []);

  // ---------- FILTER + SORT ----------
  const filteredProducts = products
    .filter((p) => (lensType ? p.type === lensType : true))
    .filter((p) => {
      if (sort === "100") return p.price < 100;
      if (sort === "300") return p.price < 300;
      return true;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  // ---------- GROUP BY CATEGORY ----------
  const categories = ["Cine", "Anamorphic", "Spherical", "Zoom", "Specialty"];
  const grouped = categories.map((cat) => ({
    name: cat,
    items: filteredProducts.filter((p) => p.type === cat),
  }));

  return (
    <main className="products-page">

      {/* VIDEO HEADER */}
      <section id="product-header">
        <video autoPlay muted loop>
          <source src={visiVideo} type="video/mp4" />
        </video>
      </section>

      <h1 id="all-products-text">ALL PRODUCTS</h1>

      {/* FILTER NAV */}
      <section className="product-nav">
        <div className="product-filter">

          <div className="sort-filter-container">
            <h4>SORT BY</h4>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="relevancy">---Select---</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="100">Under $100</option>
              <option value="300">Under $300</option>
            </select>
          </div>

          <div className="sort-filter-container">
            <h4>LENS TYPE</h4>
            <select value={lensType} onChange={(e) => setLensType(e.target.value)}>
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

      {/* PRODUCT CATEGORIES */}
      <div className="main-content">
        {grouped.map((cat) =>
          cat.items.length > 0 ? (
            <ProductGrid key={cat.name} title={cat.name} products={cat.items} />
          ) : null
        )}
      </div>

      <Footer />
    </main>
  );
}
