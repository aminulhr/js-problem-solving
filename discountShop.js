// up to 100 price 90
//up to 150 price 70
// up to 200 price 50
function discountPrice(quantity) {
  if (quantity <= 100) {
    return quantity * 90;
  } else if (quantity <= 150) {
    return quantity * 70;
  } else {
    return quantity * 50;
  }
}
console.log(discountPrice(150));
