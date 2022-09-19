const products = [
  {
    id: 1,
    title: 'Escuadra',
    price: 323.45,
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg'
  }
];


class Products {
  static lastProductId = products[products.length - 1].id;

  constructor(){
    this.list = products;
  }

  getAll(){
    return this.list;
  }

  getById(productId){
    return this.list.find(product => product.id === +productId);
  }

  save(product){
    const { title, price, thumbnail} = product;
    if (!title || !price || !thumbnail){
      return null;
    }
    Products.lastProductId++;
    const newProduct = {
      id: Products.lastProductId,
      title,
      price,
      thumbnail
    };
    this.list.push(newProduct);
    return newProduct;
  }

  delete(productId){
    const deletId = this.list.find(product => product.id === +productId);

    if(deletId < 0){
      return null;
    }
    this.list.splice(deletId, 1);

    return deletId;
  }

  update(product){
    if(!product.title || !product.price || !product ){ 
      return null;
    } 

    const editId = this.list.findIndex(product => product.id === +product.id);

    if(editId < 0){
      return null;
    }
    
    const newProduct = {
      ...products[editId],
      title,
      price,
      thumbnail
    };

    product[editId] = newProduct;
    return newProduct;
  }

}


module.exports = {
  products
};


