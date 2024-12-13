import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./filteredProducts.css";



const products = [
  { id: 1, name: "Laptop", brand: "Dell", category: "Electronics", price: 1000, rating: 4 },
  { id: 2, name: "Phone", brand: "Samsung", category: "Electronics", price: 800, rating: 5 },
  { id: 3, name: "Shoes", brand: "Nike", category: "Fashion", price: 150, rating: 4 },
  { id: 4, name: "TV", brand: "Sony", category: "Electronics", price: 1200, rating: 3 },
  { id: 5, name: "T-shirt", brand: "Adidas", category: "Fashion", price: 50, rating: 4 },
];

const AppTen = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    rating: 0,
    priceRange: [0, 2000],
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filters
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const filtered = products.filter((product) => {
      return (
        (newFilters.category ? product.category === newFilters.category : true) &&
        (newFilters.brand ? product.brand === newFilters.brand : true) &&
        (newFilters.rating ? product.rating >= newFilters.rating : true) &&
        product.price >= newFilters.priceRange[0] &&
        product.price <= newFilters.priceRange[1]
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-4">

      {/* Filters */}
      <div  >
        <div className="One">
          <label>Category</label>
          <select
            className="form-select"
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
        <div className="One">
          <label>Brand</label>
          <select
            className="form-select"
            onChange={(e) => handleFilterChange("brand", e.target.value)}
          >
            <option value="">All</option>
            <option value="Dell">Dell</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
          </select>
        </div>
        <div className="One">
          <label>Rating</label>
          <select
            className="form-select"
            onChange={(e) => handleFilterChange("rating", Number(e.target.value))}
          >
            <option value="0">All</option>
            <option value="3">3 & above</option>
            <option value="4">4 & above</option>
            <option value="5">5</option>
          </select>
        </div>
 
        <div className="One">
          <label>Price Range</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="2000"
            step="100"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange("priceRange", [0, Number(e.target.value)])
            }
          />
          <span>
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </span>
        </div>
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Brand: {product.brand}</p>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Rating: {product.rating} ★</p>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AppTen;


