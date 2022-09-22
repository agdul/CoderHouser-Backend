class Products {
    //static lastProductId = list[list.length - 1].id;
  
    constructor(){
      this.list = [];
      this.id = 0;
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
      
      const newProduct = {...product, id: ++this.id};
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
  
module.exports = Products
