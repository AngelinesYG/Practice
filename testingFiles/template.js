/* eslint-disable no-console */
// - has a POST route that accepts and stores a list of products
// - each product should have a name and a price - any products without a name or price should not be added to the list
const assert = require('assert');
// the product store just holds products, we decide where
// for now its memory, later on we can switch out to a database
class ProductStore {
  constructor() {
    this.products = [];
  }
  get(name) {
    return this.products.find(p => p.getName() === name);
  }
  add(product) {
    // you need to add some logic here to make sure the product is not a duplicate
    this.products.push(product);
  }
  addBulk(products) {
    // you need to add some logic here to make sure you don't add duplicates
    // you also need to make sure the list has at least 3 products but no more than 10
    this.products = this.products.concat(products);
  }
  list() {
    return this.products;
  }
  sortedList(sortedBy){
    // you need to do some logic here to allow a user to specify
    // how they want the list sorted - by name or by price
  }
  mostExpensiveList(){
    // you need to add some logic here to return the 3 most expensive products
  }
  leastExpensiveList(){
    // you need to add some logic here to return the 3 least expensive products
  }
}
class Product {
  constructor({ name, price }) {
    assert(name, 'name is required');
    assert(price, 'price is required');
    this.name = name;
    // you need to add some logic here to round the price to the nearest dollar
    this.price = price;
  }
  getName() { return this.name; }
  getPrice() { return this.price; }
}
const productStore = new ProductStore();
const milk = new Product({ name: 'milk', price: '2' });
const eggs = new Product({ name: 'eggs', price: '3' });
const bread = new Product({ name: 'bread', price: '1' });
productStore.add(milk);
productStore.add(eggs);
productStore.add(bread);
// or add products in bulk
// productStore.addBulk([milk, eggs, bread]);
console.log(productStore.get('eggs'));
productStore.list().forEach((product, idx) => {
  console.log(`${idx}: ${product.getName()} ${product.getPrice()}`);
});
// you need to add some logic to print out the list sorted by name
// you need to add some logic to print out the list sorted by price
// you need to add some logic to print out the most expensive items
// you need to add some logic to print out the least expensive items
