import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      const data = response.data;
      setProducts(data);
      setFilteredProducts(data);
      const allCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(["all", ...allCategories]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    try {
      let filtered;
      if (category === "all") {
        filtered = products;
      } else {
        const response = await axios.get(
          `http://localhost:5000/products/category/${category}`
        );
        filtered = response.data;
      }
      setFilteredProducts(filtered);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
