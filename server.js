import express from "express";
import data from "./data.js";

const app = express();

app.get('/api/v1/products', (req, res) => {
  res.send(data.products)
});

app.get('/api/v1/products/slug/:slug', (req, res) => {
  const product = data.products.find(x => x.slug === req.params.slug);
  product ?
    res.send(product)
    : res.status(404).send({message: 'Product not found'});
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});