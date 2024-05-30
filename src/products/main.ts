import { createProduct, calcStock, products } from "./product.service";


createProduct({
  name: 'Pantalon',
  createdAt: new Date(),
  stock: 11
});

createProduct({
  name: 'Campera',
  createdAt: new Date(),
  stock: 12,
  size: 'L'
});

console.log(products);
const total = calcStock();
console.log('total ', total);
