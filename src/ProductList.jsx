// ProductList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([
    "Kamera",
    "Panggung",
    "Sound Sistem",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Kamera");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
      setFilteredProducts(
        response.data.filter((product) => product.category === selectedCategory)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryChange = async (selectedOption) => {
    setSelectedCategory(selectedOption.value);
    try {
      let response;
      if (selectedOption.value === "all") {
        response = await axios.get("http://localhost:5000/products");
      } else {
        response = await axios.get(
          `http://localhost:5000/products/category/${selectedOption.value}`
        );
      }
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  return (
    <div>
      <h2>Filter Produk</h2>
      <div style={{ width: "200px" }}>
        <Select
          options={categories.map((category) => ({
            value: category.toLowerCase(),
            label: category,
          }))}
          defaultValue={{ value: "kamera", label: "Kamera" }}
          onChange={handleCategoryChange}
        />
      </div>
      <h2>Daftar Produk</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
