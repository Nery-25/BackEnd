
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;






// Listar todos os produtos (READ)
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// Listar um produto por ID (READ)
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  res.status(200).json(product);
});

// Listar produtos por nome (READ v2)
app.get('/products/search', (req, res) => {
  const { name } = req.query;
  let filteredProducts = [];

  if (!name) {
    return res.status(400).json({ message: 'Informe o nome do produto para filtrar' });
  }

  filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));

  if (filteredProducts.length === 0) {
    return res.status(404).json({ message: 'Nenhum produto encontrado com esse nome' });
  }

  res.status(200).json(filteredProducts);
});

/* // Criar um novo produto (CREATE)
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = idCounter++;
  products.push(newProduct);

  res.status(201).json(newProduct);
}); */

// Atualizar um produto (UPDATE)
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id); // Analisa se o argumento é uma string, se não for é converitdo em String
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  const updatedProduct = req.body;
  products[productIndex] = updatedProduct;

  res.status(200).json(updatedProduct);
});

// Excluir um produto (DELETE)
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  products.splice(productIndex, 1); // Altera  o array removendo  a posição do 

  res.status(204).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));