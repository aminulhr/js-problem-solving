// function miletokilo(mile) {
//   let kilo = mile * 1.60934;
//   return kilo;
// }
// console.log(miletokilo(3));
const products = [
  { id: 1, name: "Laptop", price: 99, category: "Electronics", stock: 20 },
  {
    id: 2,
    name: "Smartphone",
    price: 59,
    category: "Electronics",
    stock: 50,
  },
  { id: 3, name: "Table", price: 12, category: "Furniture", stock: 10 },
  { id: 4, name: "Chair", price: 80, category: "Furniture", stock: 25 },
  {
    id: 5,
    name: "Headphones",
    price: 49,
    category: "Accessories",
    stock: 100,
  },
];

function getTotal(allproducts) {
  let total = 0;
  for (const product of allproducts) {
    const totalItem = product.price * product.stock;
    total = total + totalItem;
  }
  return total;
}
console.log(getTotal(products));
