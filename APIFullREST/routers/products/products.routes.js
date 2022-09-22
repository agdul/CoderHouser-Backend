const express = require('express');
const { products } = require('../../data/products');
const productos = require('../../data/data');
const router = express.Router();


const products = new Products(productos);
//RUTAS


router.get('/', (req, res) => {
  res.json(products.getAll());
});
  
  router.get('/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.getById(productId);
    if (!product) {
      return res.status(404).json({error: `Product with id: ${productId} does not exist!`});
    }
    return res.json(product);
  });
  
  router.post('/', (req, res) => {
    const { name, price, thumbnail} = req.body;
    if ( !name || !price || !thumbnail) {
      return res.status(400).json({error: 'Wrong body format' });
    }
    const newProduct = products.save({name, price, thumbnail});
    return res.json(newProduct);
  });
  
  router.put('/:productId', (req, res) => {
    const { params: { productId }, body: { name, price, thumbnail} } = req;
    if ( !name || !price || !thumbnail) {
      return res.status(400).json({error: 'Wrong body format' });
    };
   
    const update = products.update(productId, {name, price, thumbnail});
    return res.json(update);
  });
  
  router.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    const itemDelete = products.delete(productId);
    return res.json(itemDelete);
  });



module.exports = router;
module.exports = Products;
