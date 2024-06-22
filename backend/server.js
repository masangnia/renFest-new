const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

let products = [];

app.post("/api/products", (req, res) => {
  const newProducts = req.body;
  products = products.concat(newProducts);
  res.status(201).send({ message: "Products added successfully" });
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
