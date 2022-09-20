const express = require('express');
const { products } = require('../../data/products');

const router = express.Router();



//RUTAS


router.get('/', (req, res) => {

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
    // const newProduct = {
    //   id: products.lastProductId + 1,
    //   name,
    //   price,
    //   thumbnail
    // };
    products.save(req.body);
    return res.json(newProduct);
  });
  
  router.put('/:productId', async(req, res) => {
    const { params: { productId }, body: { name, price, thumbnail} } = req;
    if ( !name || !price || !thumbnail) {
      return res.status(400).json({error: 'Wrong body format' });
    };
    // const productIndex = products.findIndex((product) => product.id === +productId);
    // if (productIndex < 0) return res.status(404).json({error: `Product with id: ${productId} does not exist!`});
    // const newProduct = {
    //   ...products[productIndex],
    //   name,
    //   price,
    //   thumbnail
    // };
    // products[productIndex] = newProduct;

    const update = await products.update(req);
    return res.json(update.then);
  });
  
  router.delete('/:productId', async(req, res) => {
    const { productId } = req.params;
    const itemDelete = await products.delete(productId);
    return res.json(itemDelete.then);
  });



module.exports = router;


