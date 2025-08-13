async function loadProducts() {
  const response = await fetch('./sony-cameras.json');
  const data = await response.json();
  displayProducts(data);
}