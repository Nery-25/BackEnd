
const products = [
{id: 1, name: 'Camiseta', price: 20.00, size: 'M'},   
{id: 2,name: 'Calça', price: 50.00, size: '32'},
{id: 3,name: 'Tênis',price: 80.00,size: '42'},
{id: 4,name: 'Boné',price: 15.00,size: 'One-size'},
{id: 5,name: 'Meia',price: 5.00,size:'39'}, 
{id: 6,name: 'Cinto',price: 25.00,size: '95 cm'}, 
{id: 7,name: 'Chapéu',price: 30.00,size: '58'},    
{id: 8,name: 'Óculos de Sol',price: 40.00,size: 'One-size'},
{id: 9,name: 'Cachecol',price: 18.00,size: 'One-size'},  
{id: 10,name: 'Luva',price: 10.00,size: 'M'}]


function insert(product) {
    const newProduct = product;
    newProduct.id = products.length + 1,
    products.push(newProduct);
  };
  
  module.exports = {
    insert,
  };